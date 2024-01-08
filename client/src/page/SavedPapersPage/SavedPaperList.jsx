import { Stack } from "@mui/material";
import SavedPaperRecord from "./SavedPaperRecord";

function SavedPaperList({ papers }) {
    return (
        <Stack direction="column" spacing={2}>
            {papers.map((paper, index) => {
                return (
                    <SavedPaperRecord paper={paper} index={index} key={index} />
                );
            })}
        </Stack>
    );
}

export default SavedPaperList;
