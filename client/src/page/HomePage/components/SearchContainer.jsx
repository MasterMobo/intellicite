import { useState } from "react";
import { Container, Stack } from "@mui/material";
import SearchInputContainer from "./SearchInputContainer";
import SearchResultContainer from "./SearchResults/SearchResultContainer";
import { papers } from "./sampleData";
import axios from "axios";

// FIXME: This is should be an environment variable
const BASE_URL = "http://139.59.243.2:5000/api/v1/process";

function SearchContainer() {
    const [searchState, setSearchState] = useState("initial");
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState(papers);

    const handleSearch = async () => {
        setSearchState("loading");
        const response = await axios.post(BASE_URL, { user_input: searchText });

        if (response.status === 200) {
            console.log(response.data);
            await setSearchResults(response.data);
        } else {
            console.log("Error", response);
        }

        await setSearchState("done");
    };

    return (
        <Container maxWidth="xl" sx={{ minHeight: "100vh" }}>
            <Stack direction={"row"} spacing={2} height={"100%"} pt={"10vh"}>
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
