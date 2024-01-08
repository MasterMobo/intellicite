import { Box, IconButton, Link } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DownloadIcon from "@mui/icons-material/Download";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function PaperFooter({ paper, searchText }) {
    const handleSave = async () => {
        paper.userQuery = searchText;
        paper.saveTime = new Date().toISOString();
        return;
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
        </Box>
    );
}

export default PaperFooter;
