import { Box, Typography } from "@mui/material";

function HighlightsBox({ highlights }) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 1,
                bgcolor: "rgba(0, 0, 0, 0.1)",
                p: 1.5,
                borderRadius: 1,
            }}
        >
            {highlights.map((highlight, index) => {
                if (index === 0) {
                    return (
                        <Typography variant="body2" key={index}>
                            &quot;{highlight}...
                        </Typography>
                    );
                }

                if (index === highlights.length - 1) {
                    return (
                        <Typography variant="body2" key={index}>
                            {highlight}...&quot;
                        </Typography>
                    );
                }

                return (
                    <Typography variant="body2" key={index}>
                        ...{highlight}...
                    </Typography>
                );
            })}
        </Box>
    );
}

export default HighlightsBox;
