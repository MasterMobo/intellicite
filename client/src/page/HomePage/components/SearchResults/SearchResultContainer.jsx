import SearchResultPlaceholder from "./SearchResultPlaceholder";
import LoadingSkeleton from "./LoadingSkeleton";
import SearchResultDoneContainer from "./SearchResultDoneContainer";
import { Box } from "@mui/material";
import SearchResultsNoResult from "./SearchResultsNoResult";

function SearchResultContainer({ searchState, searchResults }) {
    return (
        <Box
            sx={{
                width: "100%",
                height: "80vh",
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
                <SearchResultsNoResult></SearchResultsNoResult>
            )}
        </Box>
    );
}

export default SearchResultContainer;
