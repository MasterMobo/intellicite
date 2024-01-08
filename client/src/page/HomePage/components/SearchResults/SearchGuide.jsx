import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Link,
    Stack,
    Typography,
    IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";

function SearchGuideSummary({ step, title }) {
    return (
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Box display={"flex"} gap={1} alignItems="center">
                <Typography
                    fontWeight="bold"
                    sx={{
                        border: "1px solid rgba(0, 0, 0, 0.23)",
                        width: "1.5rem",
                        height: "1.5rem",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {step}
                </Typography>
                <Typography>{title}</Typography>
            </Box>
        </AccordionSummary>
    );
}

function SearchGuideDetails({ detailsText, children }) {
    if (children) {
        return <AccordionDetails>{children}</AccordionDetails>;
    }

    return <AccordionDetails>{detailsText}</AccordionDetails>;
}

function SearchGuideAccordianItem({
    step,
    title,
    detailsText,
    detailsChildren,
}) {
    return (
        <Accordion>
            <SearchGuideSummary step={step} title={title} />
            <SearchGuideDetails detailsText={detailsText}>
                {detailsChildren}
            </SearchGuideDetails>
        </Accordion>
    );
}

function SearchGuide() {
    return (
        <Stack sx={{ overflowY: "auto", maxHeight: "50%" }}>
            <Typography variant="h6" mb={2}>
                How do I use this?
            </Typography>

            <SearchGuideAccordianItem
                step={1}
                title="Put in your search query"
                detailsText="Put your essay, paragraph or sentences into the input box. You can search for any topic, paper title, or author name. Try putting in a sentiment to make the best use of the sentiment analysis feature."
            />
            <SearchGuideAccordianItem
                step={2}
                title="Search for papers"
                // detailsText="Press the 'Find Sources' button to search for papers. Searching can take up to 30 seconds to complete, hang in there while we crunch the numbers!"
                detailsChildren={
                    <Typography>
                        Press the{" "}
                        <Button variant="contained" size="small">
                            Find Sources
                        </Button>{" "}
                        button to search for papers. Searching can take up to 30
                        seconds to complete, hang in there while we crunch the
                        numbers!
                    </Typography>
                }
            />

            <SearchGuideAccordianItem
                step={3}
                title="View the results"
                detailsText="Once the search is complete, you will be able to see the results here."
            />

            <SearchGuideAccordianItem
                step={4}
                title="Save your favorite papers"
                detailsChildren={
                    <Typography>
                        Don&apos;t want to lose your favorite papers? Click
                        <IconButton color="primary">
                            <FavoriteIcon />
                        </IconButton>{" "}
                        to save the paper to your account. (This feature
                        requires you to be logged in)
                    </Typography>
                }
            />
            <Typography align="center" variant="caption" mt={2}>
                Still confused? Check out our <Link href="#">User Guide</Link>
            </Typography>
        </Stack>
    );
}
export default SearchGuide;
