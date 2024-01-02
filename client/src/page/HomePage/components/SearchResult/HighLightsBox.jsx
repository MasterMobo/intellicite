import { Box, Typography } from "@mui/material";

function HighlightsBox({ highlights }) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 1,
                bgcolor: "rgba(0, 0, 0, 0.08)",
                p: 1.5,
                borderRadius: 1,
            }}
        >
            {highlights.map((highlight, index) => {
                return (
                    <Typography variant="body2" key={index}>
                        {highlight}...
                    </Typography>
                );
            })}
        </Box>
    );
}

export default HighlightsBox;
