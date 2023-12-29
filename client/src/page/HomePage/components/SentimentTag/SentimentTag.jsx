import NeutralSentimentTag from "./NeutralSentimentTag";
import PositiveSentimentTag from "./PositiveSentimentTag";
import NegativeSentimentTag from "./NegativeSentimentTag";

import { Box } from "@mui/material";
function SentimentTag({ sentiment, ...rest }) {
    return (
        <Box {...rest}>
            {(() => {
                switch (sentiment) {
                    case "positive":
                        return <PositiveSentimentTag />;
                    case "negative":
                        return <NegativeSentimentTag />;
                    default:
                        return <NeutralSentimentTag />;
                }
            })()}
        </Box>
    );
}

export default SentimentTag;
