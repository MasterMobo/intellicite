import { useState } from "react";
import {
    Paper,
    Divider,
    Stack,
    Collapse,
    Box,
    IconButton,
    Icon,
    Link,
} from "@mui/material";
import HighlightsSection from "./HighlightsSection";
import PaperDescription from "./PaperDescription";
import PaperHeader from "./PaperHeader";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DownloadIcon from "@mui/icons-material/Download";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function PaperSearchResult({ paper, index }) {
    const [expanded, setExpanded] = useState(true);

    return (
        <Paper key={index} sx={{ px: 4, py: 1.5 }}>
            <PaperHeader
                paper={paper}
                expanded={expanded}
                setExpanded={setExpanded}
            ></PaperHeader>
            <Divider />

            <Stack spacing={1}>
                <PaperDescription paper={paper}></PaperDescription>

                <Collapse in={expanded}>
                    <HighlightsSection paper={paper}></HighlightsSection>
                    <PaperFooter paper={paper}></PaperFooter>
                </Collapse>
            </Stack>
        </Paper>
    );
}

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

export default PaperSearchResult;
