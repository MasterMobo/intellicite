import { useNavigate } from "react-router-dom";
import "./home.css";;

function Home() {
    const navigate = useNavigate();
    return ( 
        <div className="home">
            <h1>Intellicite</h1>
            <div className="search-form">
                <input type="text" placeholder="Search here ..." />
                <button className="btn-search" onClick={() => navigate('/search')}>Search</button>
            </div>
        </div>
     );
}

export default Home;