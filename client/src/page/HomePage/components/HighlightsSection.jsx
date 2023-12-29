import { Stack, Tooltip, Typography, Chip, Box, Paper } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HighlightsBox from "./HighLightsBox";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentTag from "./SentimentTag/SentimentTag";

function HighlightsSection({ paper }) {
    return (
        <Stack spacing={0.5}>
            <HighlightsHeader sentiment={paper.sentiment}></HighlightsHeader>
            <HighlightsBox highlights={paper.highlights}></HighlightsBox>
        </Stack>
    );
}

function HighlightsHeader({ sentiment }) {
    return (
        <Box sx={{ display: "flex" }}>
            <Typography variant="subtitle1">
                Highlights
                <Tooltip
                    placement="right"
                    title="Relevant sentences found in the paper"
                >
                    <HelpOutlineIcon fontSize="1"></HelpOutlineIcon>
                </Tooltip>
            </Typography>

            <SentimentTag
                sentiment={sentiment}
                sx={{
                    ml: "auto",
                }}
            ></SentimentTag>
        </Box>
    );
}

export default HighlightsSection;
