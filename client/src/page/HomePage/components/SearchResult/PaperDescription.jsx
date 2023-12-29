import { Stack, Typography } from "@mui/material";
import TagList from "./TagList";

function PaperDescription({ paper }) {
    return (
        <Stack spacing={1}>
            <Typography variant="caption">
                Authors: {paper.authors.join(", ")}
            </Typography>
            {paper.journal && (
                <Typography variant="caption">
                    Journal: {paper.journal}{" "}
                </Typography>
            )}
            {paper.doi && (
                <Typography variant="caption">DOI: {paper.doi}</Typography>
            )}
            {paper.tags && <TagList tags={paper.tags}></TagList>}
        </Stack>
    );
}

export default PaperDescription;
