import { Box, Chip } from "@mui/material";
import generateRandomColor from "../../utils/generateRandomColor";

function TagList({ tags }) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 1,
            }}
        >
            {tags.map((tag, index) => (
                <Chip
                    label={tag}
                    key={index}
                    sx={{ bgcolor: generateRandomColor(tag) }}
                    size="small"
                ></Chip>
            ))}
        </Box>
    );
}

export default TagList;
