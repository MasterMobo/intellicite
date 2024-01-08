import { Box, Stack } from "@mui/material";
import PaperSearchResult from "../SearchResult/PaperSearchResult";

function SearchResultDoneContainer({ results }) {
    // Displayed when the search is done
    return (
        <Box
            sx={{
                maxHeight: "100%",
                overflowX: "hidden",
                overflowY: "scroll",
                pr: 1,
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

export default SearchResultDoneContainer;
