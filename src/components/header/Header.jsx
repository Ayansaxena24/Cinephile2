import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Cinephile2 from "./Cinephile 2.jpg";
import MyReviews from "../../pages/myreviews/myreviews";

const Header = () => {
    return (
        <div className="header shadow-xl shadow-gray-800 rounded-xl left-0">
            <div className="headerLeft px-1">
                {/* <Link to="/IMDB-Clone"><img id="header_icon" alt="imdb" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link> */}
                <Link to="/IMDB-Clone"><img id="header_icon" className="rounded-lg" alt="imdb" src={Cinephile2} /></Link>
                <Link to="/movies/popular"><span>POPULAR</span></Link>
                <Link to="/movies/top_rated"><span>Top Rated</span></Link>
                <Link to="/movies/upcoming"><span>Upcoming</span></Link>
                <Link to="/movies/Reviews"><span>My Reviews</span></Link>
            </div>
        </div>
    )
}

export default Header
