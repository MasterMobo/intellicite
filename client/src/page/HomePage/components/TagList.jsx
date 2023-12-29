import { Box, Chip } from "@mui/material";

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
                <Chip label={tag} key={index} size="small"></Chip>
            ))}
        </Box>
    );
}

export default TagList;
