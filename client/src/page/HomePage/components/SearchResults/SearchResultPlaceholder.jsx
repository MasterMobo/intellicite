import { Paper, Typography, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchResultPlaceholder() {
    return (
        <Box
            sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
                pt: "20%",
            }}
        >
            <SearchIcon sx={{ fontSize: 80 }}></SearchIcon>
            <Typography variant="h6">Search Results</Typography>
            <Typography variant="caption">
                Your search results will be displayed here
            </Typography>
        </Box>
    );
}

export default SearchResultPlaceholder;
