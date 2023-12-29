import { Box, Typography, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function PaperHeader({ paper, expanded, setExpanded }) {
    return (
        <Box sx={{ display: "flex" }}>
            <Typography variant="h6" maxWidth={"90%"}>
                {paper.title}
            </Typography>

            <IconButton
                sx={{
                    ml: "auto",
                    aspectRatio: 1,
                    height: "fit-content",
                }}
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? (
                    <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
                ) : (
                    <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                )}
            </IconButton>
        </Box>
    );
}

export default PaperHeader;
