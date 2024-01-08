import React from "react";
import {
    Box,
    IconButton,
    Link,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    DialogContentText,
    Button,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DeleteIcon from "@mui/icons-material/Delete";

function SavedPaperFooter({ paper }) {
    const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);

    const handleDeleteDialogOpen = () => {
        setDeleteDialogOpen(true);
    };

    const handleDeleteDialogClose = () => {
        setDeleteDialogOpen(false);
    };

    const handleDelete = async () => {
        console.log(`deleted paper ${paper.id}`);
        await setDeleteDialogOpen(false);
        return;
    };
    return (
        <Box sx={{ mt: 1, mb: 0, display: "flex", gap: 2 }}>
            <IconButton color="primary" onClick={handleDeleteDialogOpen}>
                <DeleteIcon />
            </IconButton>

            <Dialog open={deleteDialogOpen}>
                <DialogTitle>Delete Paper</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this paper?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteDialogClose}>Cancel</Button>
                    <Button onClick={handleDelete}>Delete</Button>
                </DialogActions>
            </Dialog>

            <IconButton
                color="primary"
                href={paper.download_url}
                target="_blank"
                rel="noopener"
            >
                <DownloadIcon />
            </IconButton>

            <Link
                href={paper.url}
                underline="hover"
                target="_blank"
                rel="noopener"
                sx={{ ml: "auto", display: "flex", alignItems: "center" }}
            >
                {"View Paper"}
                <OpenInNewIcon sx={{ ml: 0.5, fontSize: 15 }} />
            </Link>
        </Box>
    );
}

export default SavedPaperFooter;
