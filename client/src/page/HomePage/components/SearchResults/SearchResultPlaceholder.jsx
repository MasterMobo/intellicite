import { Typography, Box, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SearchGuide from "./SearchGuide";

function SearchResultPlaceholder() {
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
            <Typography variant="h6">Search Results</Typography>
            <Typography variant="caption">
                Your search results will be displayed here
            </Typography>
            <Divider sx={{ mt: 5, mb: 3 }} style={{ width: "100%" }}></Divider>
            <SearchGuide></SearchGuide>
        </Box>
    );
}

export default SearchResultPlaceholder;
