import { Chip } from "@mui/material";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

function NegativeSentimentTag() {
    return (
        <Chip
            label="Negative"
            size="medium"
            color="error"
            sx={{
                borderRadius: 1,
            }}
            icon={<ThumbDownAltIcon></ThumbDownAltIcon>}
            onClick={() => {}}
        ></Chip>
    );
}

export default NegativeSentimentTag;
