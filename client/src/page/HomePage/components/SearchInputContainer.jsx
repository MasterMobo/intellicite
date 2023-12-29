import { Button, Stack, TextareaAutosize } from "@mui/material";

function SearchInputContainer({ handleSearch }) {
    return (
        <Stack direction="column" spacing={2} width={"50%"}>
            <TextareaAutosize
                aria-label="minimum height"
                minRows={10}
                placeholder="Place your text here"
            />
            <Button variant="contained" onClick={handleSearch}>
                Find Sources
            </Button>
        </Stack>
    );
}

export default SearchInputContainer;
