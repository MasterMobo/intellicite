// import "./home.css";

import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
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
