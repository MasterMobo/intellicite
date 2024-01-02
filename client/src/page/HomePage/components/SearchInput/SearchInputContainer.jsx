import {
    Button,
    Stack,
    TextareaAutosize,
    CircularProgress,
} from "@mui/material";
import useResponsive from "../../hooks/useResponsive";
import { Resizable } from "re-resizable";

function SearchInputContainer({ handleSearch, searchState, setSearchText }) {
    const { isTablet } = useResponsive();

    return (
        <Resizable
            defaultSize={{
                width: 320,
                height: 200,
            }}
            maxWidth={isTablet ? "100%" : "70%"}
            minWidth={isTablet ? "100%" : "20%"}
            enable={isTablet ? {} : { right: true }}
        >
            <Stack
                direction="column"
                spacing={2}
                width={"100%"}
                maxHeight={"100%"}
                pr={2}
                borderRight={"1px solid black"}
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
        </Resizable>
    );
}

export default SearchInputContainer;
