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
            <Box
                sx={{
                    width: "100%",
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "#ded9d3",
                    pt: 2,
                    pb: 3,
                    height: "40%",
                }}
            >
                <SearchIcon sx={{ fontSize: 80 }}></SearchIcon>
                <Typography variant="h6">Search Results</Typography>
                <Typography variant="caption">
                    Your search results will be displayed here
                </Typography>
            </Box>
            <Divider sx={{ mt: 4, mb: 3 }} style={{ width: "100%" }}></Divider>
            <SearchGuide></SearchGuide>
        </Box>
    );
}

export default SearchResultPlaceholder;
