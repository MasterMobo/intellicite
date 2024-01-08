import { useState } from "react";
import {
    Box,
    Button,
    Container,
    Divider,
    Stack,
    TextField,
    Typography,
    InputLabel,
    Select,
    MenuItem,
    FormControl,
} from "@mui/material";

import { savedPapers } from "../sampleData";
import SavedPaperRecord from "./SavedPaperRecord";

import { findPapers, sortPapersByRecency } from "./utils/savedPapersUtils";

function SavedPapersPage() {
    const [papers, setPapers] = useState(savedPapers); // Original papers from database
    const [currentPapers, setCurrentPapers] = useState(papers); // Papers after search/filter/sort
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        if (searchQuery === "") {
            setCurrentPapers(papers);
            return;
        }
        setCurrentPapers(findPapers(papers, searchQuery));
    };

    const handleSort = async (e) => {
        const sortBy = e.target.value;
        console.log(sortBy);
        if (sortBy === "newest") {
            await setCurrentPapers(
                sortPapersByRecency([...currentPapers], true)
            );
        } else if (sortBy === "oldest") {
            await setCurrentPapers(
                sortPapersByRecency([...currentPapers], false)
            );
        }
    };

    return (
        <Container maxWidth="xl" sx={{ minHeight: "100vh", pt: "8vh" }}>
            <Typography variant="h5" sx={{ mb: 3 }}>
                Your saved papers
            </Typography>

            <Box sx={{ display: "flex", mb: 3 }}>
                <TextField
                    placeholder="Find in saved papers"
                    sx={{ width: "80%" }}
                    onChange={(e) => setSearchQuery(e.target.value)}
                ></TextField>
                <Button
                    variant="contained"
                    size="large"
                    sx={{ width: "20%" }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>

            <FormControl sx={{ width: "20%" }}>
                <InputLabel id="sort-by-select-label">Sort By</InputLabel>
                <Select
                    labelId="sort-by-select-label"
                    id="sort-by-select"
                    label="sort-by"
                    onChange={handleSort}
                    defaultValue={""}
                >
                    <MenuItem value={"newest"}>Newest First</MenuItem>
                    <MenuItem value={"oldest"}>Oldest First</MenuItem>
                </Select>
            </FormControl>

            <Divider sx={{ my: 3 }}></Divider>

            <Stack direction="column" spacing={2}>
                {currentPapers.map((paper, index) => {
                    return (
                        <SavedPaperRecord
                            paper={paper}
                            index={index}
                            key={index}
                        />
                    );
                })}
            </Stack>
        </Container>
    );
}

export default SavedPapersPage;
