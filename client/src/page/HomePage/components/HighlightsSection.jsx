import { Stack, Tooltip, Typography } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HighlightsBox from "./HighLightsBox";

function HighlightsSection({ highlights }) {
    return (
        <Stack spacing={0.5}>
            <Typography variant="subtitle2">
                Highlights:
                <Tooltip
                    placement="right"
                    title="Relevant sentences we found in the paper"
                >
                    <HelpOutlineIcon fontSize="small"></HelpOutlineIcon>
                </Tooltip>
            </Typography>
            <HighlightsBox highlights={highlights}></HighlightsBox>
        </Stack>
    );
}

export default HighlightsSection;
