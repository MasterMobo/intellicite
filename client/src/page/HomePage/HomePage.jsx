// import "./home.css";
import { Container } from "@mui/material";

import SearchContainer from "./components/SearchContainer";

function HomePage() {
    return (
        <Container maxWidth="xl">
            <SearchContainer />
        </Container>
    );
}

export default HomePage;
