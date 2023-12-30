import { useState } from "react";
import { Container, Stack } from "@mui/material";
import SearchInputContainer from "./SearchInputContainer";
import SearchResultContainer from "./SearchResults/SearchResultContainer";
import { papers } from "./sampleData";

function SearchContainer() {
    const [searchState, setSearchState] = useState("initial");
    const [searchResults, setSearchResults] = useState(papers);
    const handleSearch = () => {
        setSearchState("loading");

        // Simulate an asynchronous search operation (replace with your actual search logic)
        setTimeout(() => {
            setSearchState("done");
        }, 1000); // Adjust the time based on your search operation duration
    };

    return (
        <Container sx={{ minHeight: "100vh" }}>
            <Stack direction={"row"} spacing={2} height={"100%"} pt={"10vh"}>
                <SearchInputContainer
                    searchState={searchState}
                    handleSearch={handleSearch}
                ></SearchInputContainer>

                <SearchResultContainer
                    searchState={searchState}
                    searchResults={searchResults}
                ></SearchResultContainer>
            </Stack>
        </Container>
    );
}

export default SearchContainer;
