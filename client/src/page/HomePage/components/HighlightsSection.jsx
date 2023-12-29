import { Stack, Tooltip, Typography, Chip, Box } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HighlightsBox from "./HighLightsBox";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentTag from "./SentimentTag/SentimentTag";

function HighlightsSection({ highlights }) {
    return (
        <Stack spacing={0.5}>
            <HighlightsHeader></HighlightsHeader>
            <HighlightsBox highlights={highlights}></HighlightsBox>
        </Stack>
    );
}

function HighlightsHeader() {
    return (
        <Box sx={{ display: "flex" }}>
            <Typography variant="subtitle1">
                Highlights
                <Tooltip
                    placement="right"
                    title="Relevant sentences we found in the paper"
                >
                    <HelpOutlineIcon fontSize="1"></HelpOutlineIcon>
                </Tooltip>
            </Typography>

            <SentimentTag
                sentiment={"neutral"}
                sx={{
                    ml: "auto",
                }}
            ></SentimentTag>
        </Box>
    );
}

export default HighlightsSection;
