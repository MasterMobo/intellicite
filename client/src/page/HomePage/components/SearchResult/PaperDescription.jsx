import { Stack, Typography } from "@mui/material";
import TagList from "./TagList";

function PaperDescription({ paper }) {
    return (
        <Stack spacing={1}>
            <Typography variant="caption">Authors: {paper.authors}</Typography>
            {paper["journal-ref"] && (
                <Typography variant="caption">
                    Journal: {paper["journal-ref"]}
                </Typography>
            )}
            {paper.doi && (
                <Typography variant="caption">DOI: {paper.doi}</Typography>
            )}
            {paper.categories && (
                <TagList tags={paper.categories.split(" ")}></TagList>
            )}
        </Stack>
    );
}

export default PaperDescription;
