import { Stack, Typography } from "@mui/material";
import TagList from "./TagList";

function PaperDescription({ paper }) {
    return (
        <Stack spacing={1}>
            <Typography variant="caption">Authors: {paper.authors}</Typography>
            {paper.journal && (
                <Typography variant="caption">
                    Journal: {paper.journal}{" "}
                </Typography>
            )}
            {paper.doi && (
                <Typography variant="caption">DOI: {paper.doi}</Typography>
            )}
            {paper.catagories && <TagList tags={paper.catagories}></TagList>}
        </Stack>
    );
}

export default PaperDescription;
