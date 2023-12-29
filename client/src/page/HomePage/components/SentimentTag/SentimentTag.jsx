import { useState } from "react";
import NeutralSentimentTag from "./NeutralSentimentTag";
import PositiveSentimentTag from "./PositiveSentimentTag";
import NegativeSentimentTag from "./NegativeSentimentTag";

import { Box, Popover } from "@mui/material";
import SentimentPopoverContent from "./SentimentPopoverContent";

function SentimentTag({ sentiment, ...rest }) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <Box {...rest}>
            <Box aria-describedby={id} onClick={handleClick}>
                {(() => {
                    switch (getMainSentiment(sentiment)) {
                        case "positive":
                            return <PositiveSentimentTag size="medium" />;
                        case "negative":
                            return <NegativeSentimentTag size="medium" />;
                        case "neutral":
                            return <NeutralSentimentTag size="medium" />;
                        default:
                            return <div></div>;
                    }
                })()}
            </Box>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
            >
                <SentimentPopoverContent
                    sentiment={sentiment}
                ></SentimentPopoverContent>
            </Popover>
        </Box>
    );
}

const getMainSentiment = (sentiment) => {
    let maxScore = 0;
    let maxLabel = "";
    sentiment.forEach((item) => {
        if (item.score > maxScore) {
            maxScore = item.score;
            maxLabel = item.label;
        }
    });
    return maxLabel;
};

export default SentimentTag;
