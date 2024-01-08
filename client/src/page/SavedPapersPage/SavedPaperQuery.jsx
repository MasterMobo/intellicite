import { Typography, Box, Stack, Tooltip } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
function SavedPaperQuery({ paper }) {
    return (
        <Stack sx={{ mb: 1.5 }} gap={1}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.2 }}>
                <Typography variant="subtitle1" fontWeight="bold">
                    Query
                </Typography>

                <Tooltip
                    placement="right"
                    title="The query you used to search for this paper"
                >
                    <HelpOutlineIcon fontSize="1"></HelpOutlineIcon>
                </Tooltip>

                <Typography
                    variant="subtitle2"
                    sx={{ alignSelf: "flex-end", ml: "auto" }}
                >
                    Saved on {new Date(paper.saveDate).toLocaleString()}
                </Typography>
            </Box>
            <Box
                sx={{
                    p: 1.5,
                    border: "1px solid rgba(0,0,0,0.2)",
                    borderRadius: 2,
                }}
            >
                <Typography variant="body2">{paper.userQuery}</Typography>
            </Box>
        </Stack>
    );
}

export default SavedPaperQuery;
