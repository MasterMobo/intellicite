import { Box, Stack } from "@mui/material";
import PaperSearchResult from "./SearchResult/PaperSearchResult";

function SearchResultContainer({ results }) {
    return (
        <Box
            sx={{
                width: "50%",
                maxHeight: "100vh",
                overflowX: "hidden",
                overflowY: "scroll",
            }}
        >
            <Stack direction="column" spacing={2}>
                {results.map((paper, index) => (
                    <PaperSearchResult
                        key={index}
                        paper={paper}
                    ></PaperSearchResult>
                ))}
            </Stack>
        </Box>
    );
}

export default SearchResultContainer;
