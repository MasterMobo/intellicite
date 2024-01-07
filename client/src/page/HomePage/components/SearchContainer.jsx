import { useState, createContext } from "react";
import { Container, Stack } from "@mui/material";
import SearchInputContainer from "./SearchInput/SearchInputContainer";
import SearchResultContainer from "./SearchResults/SearchResultContainer";
import axios from "axios";
import useResponsive from "../hooks/useResponsive";

// FIXME: This is should be an environment variable
const BASE_URL = "https://www.intellicite.online/api/v1/process";

const SearchContext = createContext();

function SearchContainer() {
    const [searchState, setSearchState] = useState("initial");
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState([]);
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
        <SearchContext.Provider
            value={{
                searchState,
                setSearchState,
                searchText,
                setSearchText,
                handleSearch,
            }}
        >
            <Container maxWidth="xl" sx={{ minHeight: "100vh" }}>
                <Stack
                    direction={isTablet ? "column" : "row"}
                    spacing={2}
                    height={"100%"}
                    pt={"10vh"}
                    gap={1}
                >
                    <SearchInputContainer></SearchInputContainer>

                    <SearchResultContainer
                        searchState={searchState}
                        searchResults={searchResults}
                    ></SearchResultContainer>
                </Stack>
            </Container>
        </SearchContext.Provider>
    );
}

export default SearchContainer;
export { SearchContext };
