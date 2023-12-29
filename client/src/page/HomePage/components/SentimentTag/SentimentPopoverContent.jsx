import {
    Card,
    CardContent,
    Typography,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Tooltip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PositiveSentimentTag from "./PositiveSentimentTag";
import NegativeSentimentTag from "./NegativeSentimentTag";
import NeutralSentimentTag from "./NeutralSentimentTag";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
const getSentimentScore = (target, sentiment) => {
    for (let i = 0; i < sentiment.length; i++) {
        if (sentiment[i].label == target) {
            return sentiment[i].score;
        }
    }

    return 0;
};
function SentimentPopoverContent({ sentiment }) {
    const [sentimentScore, setSentimentScore] = React.useState({
        positive: 0,
        negative: 0,
        neutral: 0,
    });

    useEffect(() => {
        setSentimentScore({
            positive: getSentimentScore("positive", sentiment),
            negative: getSentimentScore("negative", sentiment),
            neutral: getSentimentScore("neutral", sentiment),
        });
    }, []);

    return (
        <TableContainer component={Card}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell
                            sx={{
                                display: "flex",
                                gap: 0.5,
                                alignItems: "center",
                            }}
                        >
                            Sentiment
                            <Tooltip
                                title="Sentiment of the paper compared to your input"
                                placement="right"
                            >
                                <HelpOutlineIcon fontSize="1"></HelpOutlineIcon>
                            </Tooltip>
                        </TableCell>
                        <TableCell>Score</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    <TableRow>
                        <TableCell>
                            <PositiveSentimentTag></PositiveSentimentTag>
                        </TableCell>
                        <TableCell>{sentimentScore.positive}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <NegativeSentimentTag></NegativeSentimentTag>
                        </TableCell>
                        <TableCell>{sentimentScore.negative}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <NeutralSentimentTag></NeutralSentimentTag>
                        </TableCell>
                        <TableCell>{sentimentScore.neutral}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default SentimentPopoverContent;
