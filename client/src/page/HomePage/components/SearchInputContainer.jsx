import {
    Button,
    Stack,
    TextareaAutosize,
    CircularProgress,
} from "@mui/material";

function SearchInputContainer({ handleSearch, searchState }) {
    return (
        <Stack direction="column" spacing={2} width={"50%"} maxHeight={"100%"}>
            <TextareaAutosize
                aria-label="minimum height"
                minRows={10}
                placeholder="Place your text here"
            />
            <Button
                variant="contained"
                sx={{ height: "2.2rem" }}
                onClick={handleSearch}
            >
                {searchState === "loading" && (
                    <CircularProgress
                        size={20}
                        sx={{
                            color: "black",
                        }}
                    />
                )}
                {searchState !== "loading" && "Find Sources"}
            </Button>
        </Stack>
    );
}

export default SearchInputContainer;
