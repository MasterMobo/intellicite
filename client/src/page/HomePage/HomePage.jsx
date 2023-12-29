import { useNavigate } from "react-router-dom";
// import "./home.css";

import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

function HomePage() {
    const navigate = useNavigate();
    return (
        <div className="home">
            <h1>Intellicite</h1>
            <div className="search-form">
                <Button variant="contained">Hello world</Button>
                <Input placeholder="Search here ..." />
                {/* <input type="text" placeholder="Search here ..." />
                <button
                    className="btn-search"
                    onClick={() => navigate("/search")}
                >
                    Search
                </button> */}
            </div>
        </div>
    );
}

export default HomePage;
