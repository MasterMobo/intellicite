import { useState, useContext } from "react";
import { Box, IconButton, Link, Snackbar } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DownloadIcon from "@mui/icons-material/Download";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { isLoggedIn, getUser, getToken } from "../../utils/authUtils";
import axios from "axios";
import { SearchContext } from "../SearchContainer";

const apiUrl = import.meta.env.VITE_API_BASE_URL;

function PaperFooter({ paper }) {
    const { searchText } = useContext(SearchContext);
    const [saveSuccessOpen, setSaveSuccessOpen] = useState(false);
    const [saveErrorOpen, setSaveErrorOpen] = useState(false);
    const [notLoggedInOpen, setNotLoggedInOpen] = useState(false);

    const handleSave = async () => {
        if (!isLoggedIn()) {
            await setNotLoggedInOpen(true);
            return;
        }

        const user = getUser();
        const token = getToken();

        try {
            await axios.post(
                `${apiUrl}/user/${user._id}/saved`,
                {
                    article: {
                        ...paper,
                        userQuery: searchText,
                        saveDate: new Date().toISOString(),
                    },
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            await setSaveSuccessOpen(true);
        } catch (error) {
            console.log(error);
            await setSaveErrorOpen(true);
        }
    };

    return (
        <Box sx={{ mt: 1, mb: 0, display: "flex", gap: 2 }}>
            <IconButton color="primary" onClick={handleSave}>
                <FavoriteIcon />
            </IconButton>
            <IconButton
                color="primary"
                href={paper.download_url}
                target="_blank"
                rel="noopener"
            >
                <DownloadIcon />
            </IconButton>
            <Link
                href={paper.url}
                underline="hover"
                target="_blank"
                rel="noopener"
                sx={{ ml: "auto", display: "flex", alignItems: "center" }}
            >
                {"View Paper"}
                <OpenInNewIcon sx={{ ml: 0.5, fontSize: 15 }} />
            </Link>
            <Snackbar
                open={saveSuccessOpen}
                autoHideDuration={3000}
                onClose={() => setSaveSuccessOpen(false)}
                message="Saved paper!"
            />
            <Snackbar
                open={notLoggedInOpen}
                autoHideDuration={3000}
                onClose={() => setNotLoggedInOpen(false)}
                message="You need to login to save papers!"
            />
            <Snackbar
                open={saveErrorOpen}
                autoHideDuration={3000}
                onClose={() => setSaveErrorOpen(false)}
                message="Something went wrong, please try again"
            />
        </Box>
    );
}

export default PaperFooter;
