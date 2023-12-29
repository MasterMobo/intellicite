import { Chip } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
function PositiveSentimentTag() {
    return (
        <Chip
            label="Positive"
            size="medium"
            color="success"
            sx={{
                borderRadius: 1,
                fontWeight: "bold",
                textTransform: "uppercase",
            }}
            icon={<ThumbUpAltIcon></ThumbUpAltIcon>}
            onClick={() => {}}
        ></Chip>
    );
}

export default PositiveSentimentTag;
