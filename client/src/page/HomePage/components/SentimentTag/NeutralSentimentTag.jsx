import { Chip } from "@mui/material";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";

function NeutralSentimentTag() {
    return (
        <Chip
            label="Neutral"
            size="medium"
            sx={{
                borderRadius: 1,
            }}
            icon={<SentimentNeutralIcon></SentimentNeutralIcon>}
            onClick={() => {}}
        ></Chip>
    );
}

export default NeutralSentimentTag;
