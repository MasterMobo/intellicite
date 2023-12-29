import { useState } from "react";
import { Paper, Divider, Stack, Collapse } from "@mui/material";
import HighlightsSection from "./HighlightsSection";
import PaperDescription from "./PaperDescription";
import PaperHeader from "./PaperHeader";

function PaperSearchResult({ paper, index }) {
    const [expanded, setExpanded] = useState(true);

    return (
        <Paper key={index} sx={{ p: 2 }}>
            <PaperHeader
                paper={paper}
                expanded={expanded}
                setExpanded={setExpanded}
            ></PaperHeader>
            <Divider />

            <Stack spacing={1}>
                <PaperDescription paper={paper}></PaperDescription>

                <Collapse in={expanded}>
                    <HighlightsSection paper={paper}></HighlightsSection>
                </Collapse>
            </Stack>
        </Paper>
    );
}

export default PaperSearchResult;
