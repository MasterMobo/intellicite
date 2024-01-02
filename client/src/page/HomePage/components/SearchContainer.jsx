import { useState } from "react";
import { Container, Stack } from "@mui/material";
import SearchInputContainer from "./SearchInput/SearchInputContainer";
import SearchResultContainer from "./SearchResults/SearchResultContainer";
import { papers } from "./sampleData";
import axios from "axios";
import useResponsive from "../hooks/useResponsive";

// FIXME: This is should be an environment variable
const BASE_URL = "http://139.59.243.2:5000/api/v1/process";

function SearchContainer() {
    const [searchState, setSearchState] = useState("initial");
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState(papers);
    const { isTablet } = useResponsive();

    const handleSearch = async () => {
        if (searchText === "") {
            return;
        }
        if (searchState === "loading") {
            return;
        }

        await setSearchState("loading");

        try {
            const response = await axios.post(BASE_URL, {
                user_input: searchText,
            });
            console.log(response.data);
            await setSearchResults(response.data);
        } catch (error) {
            console.log(error);

            // FIXME: Need to handle error
            await setSearchResults([]);
        }

        await setSearchState("done");
    };

    return (
        <Container maxWidth="xl" sx={{ minHeight: "100vh" }}>
            <Stack
                direction={isTablet ? "column" : "row"}
                spacing={2}
                height={"100%"}
                pt={"10vh"}
                gap={1}
            >
                <SearchInputContainer
                    searchState={searchState}
                    handleSearch={handleSearch}
                    setSearchText={setSearchText}
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
