import { useState } from "react";
import { Paper, Divider, Stack, Collapse } from "@mui/material";
import HighlightsSection from "../HomePage/components/SearchResult/HighlightsSection";
import PaperDescription from "../HomePage/components/SearchResult/PaperDescription";
import PaperHeader from "../HomePage/components/SearchResult/PaperHeader";
import SavedPaperQuery from "./SavedPaperQuery";
import SavedPaperFooter from "./SavedPaperFooter";

function SavedPaperRecord({ paper, index }) {
    const [expanded, setExpanded] = useState(true);
    return (
        <Paper key={index} sx={{ px: 4, py: 1.5 }}>
            <PaperHeader
                paper={paper}
                expanded={expanded}
                setExpanded={setExpanded}
            ></PaperHeader>
            <Divider />

            <Stack spacing={1}>
                <PaperDescription paper={paper}></PaperDescription>

                <Collapse in={expanded}>
                    <SavedPaperQuery paper={paper}></SavedPaperQuery>
                    <HighlightsSection paper={paper}></HighlightsSection>
                    <SavedPaperFooter paper={paper}></SavedPaperFooter>
                </Collapse>
            </Stack>
        </Paper>
    );
}

export default SavedPaperRecord;
