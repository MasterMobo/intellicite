import { Box, Tooltip, Chip } from "@mui/material";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";

function NeutralSentimentTag() {
    return (
        <Box>
            <Tooltip
                placement="left"
                title="The paper's sentiment towards your input"
            >
                <Chip
                    label="Neutral"
                    size="medium"
                    sx={{
                        borderRadius: 1,
                    }}
                    icon={<SentimentNeutralIcon></SentimentNeutralIcon>}
                ></Chip>
            </Tooltip>
        </Box>
    );
}

export default NeutralSentimentTag;
