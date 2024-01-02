import {
    Button,
    Stack,
    TextareaAutosize,
    CircularProgress,
} from "@mui/material";
import useResponsive from "../../hooks/useResponsive";

function SearchInputContainer({ handleSearch, searchState, setSearchText }) {
    const { isTablet } = useResponsive();

    return (
        <Stack
            direction="column"
            spacing={2}
            width={isTablet ? "100" : "40%"}
            maxHeight={"100%"}
        >
            <TextareaAutosize
                aria-label="minimum height"
                minRows={10}
                placeholder="Place your query here"
                onChange={(e) => setSearchText(e.target.value)}
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
