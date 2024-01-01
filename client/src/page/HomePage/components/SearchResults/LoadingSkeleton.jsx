import React from "react";
import { Stack, Paper, Skeleton, Divider } from "@mui/material";

const SKELETON_COUNT = 5;

function LoadingSkeleton() {
    return (
        <Stack
            direction="column"
            spacing={2}
            sx={{ maxHeight: "100%", overflow: "hidden" }}
        >
            <Stack direction="column" spacing={1.5}>
                {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                    <Paper sx={{ px: 4, py: 1.5 }} key={index}>
                        <Skeleton variant="text" height={"2rem"} />
                        <Divider />
                        <Skeleton variant="text" width={"20%"} />
                        <Skeleton variant="text" width={"25%"} />
                        <Skeleton
                            variant="rectangular"
                            height={250}
                            animation="wave"
                        />
                        <Skeleton variant="text" height={"2rem"} />
                    </Paper>
                ))}
            </Stack>
        </Stack>
    );
}

export default LoadingSkeleton;
