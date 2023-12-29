import React from "react";
import { Box, IconButton, Link } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DownloadIcon from "@mui/icons-material/Download";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function PaperFooter({ paper }) {
    return (
        <Box sx={{ mt: 1, mb: 0, display: "flex", gap: 2 }}>
            <IconButton color="primary" sx>
                <FavoriteIcon />
            </IconButton>

            <IconButton color="primary" sx>
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
