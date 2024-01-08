import { useState } from "react";
import { Paper, Divider, Stack, Collapse } from "@mui/material";
import HighlightsSection from "./HighlightsSection";
import PaperDescription from "./PaperDescription";
import PaperHeader from "./PaperHeader";
import PaperFooter from "./PaperFooter";

function PaperSearchResult({ paper, index }) {
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
                    <HighlightsSection paper={paper}></HighlightsSection>
                    <PaperFooter paper={paper}></PaperFooter>
                </Collapse>
            </Stack>
        </Paper>
    );
}

export default PaperSearchResult;
