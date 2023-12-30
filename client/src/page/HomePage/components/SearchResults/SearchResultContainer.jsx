import SearchResultPlaceholder from "./SearchResultPlaceholder";
import LoadingSkeleton from "./LoadingSkeleton";
import SearchResultDoneContainer from "./SearchResultDoneContainer";
import { Box } from "@mui/material";

function SearchResultContainer({ searchState, searchResults }) {
    return (
        <Box
            sx={{
                width: "50%",
                height: "80vh",
                p: 3,
                border: "1px solid rgba(0,0,0,0.3)",
                borderRadius: 2,
                boxShadow: "inset 0 0 0.3rem rgba(0,0,0,0.3)",
            }}
        >
            {searchState === "initial" && (
                <SearchResultPlaceholder></SearchResultPlaceholder>
            )}
            {searchState === "loading" && <LoadingSkeleton></LoadingSkeleton>}
            {searchState === "done" && (
                <SearchResultDoneContainer
                    results={searchResults}
                ></SearchResultDoneContainer>
            )}
            {searchState === "done" && searchResults.length === 0 && (
                <div>No results found</div>
            )}
        </Box>
    );
}

export default SearchResultContainer;
