import { Button, Stack, CircularProgress, TextField, Box } from "@mui/material";
import useResponsive from "../../hooks/useResponsive";
import { Resizable } from "re-resizable";

function SearchInputContainer({ handleSearch, searchState, setSearchText }) {
    const { isTablet } = useResponsive();

    return (
        <Resizable
            defaultSize={{
                width: "50%",
            }}
            maxWidth={isTablet ? "100%" : "70%"}
            minWidth={isTablet ? "100%" : "20%"}
            enable={isTablet ? {} : { right: true }}
            handleStyles={{ right: { width: "5px", right: 0 } }}
        >
            <Stack
                direction={"row"}
                gap={isTablet ? 0 : 3}
                sx={{ height: "100%" }}
            >
                <Stack
                    direction="column"
                    spacing={2}
                    width={"100%"}
                    maxHeight={"100%"}
                >
                    <TextField
                        aria-label="minimum height"
                        // minRows={isTablet ? 10 : 30}
                        maxRows={30}
                        multiline
                        placeholder="Place your query here"
                        onChange={(e) => setSearchText(e.target.value)}
                        sx={{
                            bgcolor: "white",
                        }}
                        inputProps={{
                            style: {
                                height: isTablet ? "20vh" : "70vh",
                                minHeight: "20vh",
                                maxHeight: isTablet ? "20vh" : "70vh",
                                overflowY: "auto",
                                resize: "vertical",
                            },
                        }}
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

                {/* Resizable sidebar */}
                <Box
                    sx={{
                        p: 0,
                        m: 0,
                        bgcolor: "rgba(0, 0, 0, 0.1)",
                        width: "2px",
                        height: "100%",
                        display: isTablet ? "none" : "block",
                    }}
                ></Box>
            </Stack>
        </Resizable>
    );
}

export default SearchInputContainer;
