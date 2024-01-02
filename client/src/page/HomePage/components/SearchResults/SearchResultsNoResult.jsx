import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchResultsNoResult() {
    return (
        <Box
            sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
            }}
        >
            <SearchIcon sx={{ fontSize: 80 }}></SearchIcon>

            <Typography variant="h6">No results found</Typography>
            <Typography variant="caption">
                Nothing matched your search query, maybe try something else?
            </Typography>
        </Box>
    );
}

export default SearchResultsNoResult;
