//Cards2.js
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./Card.css";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import Inception from "./Images/Inception.jpg";

const Cards2 = ({ reviews }) => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500); // for 1.5 secs
    }, []);
  
    return (
      <>
        {isLoading ? (
          <div className="cards">
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
              <Skeleton height={300} duration={2} count={3} />
            </SkeletonTheme>
          </div>
        ) : (
          <Link
            to={`/movie2/${reviews.id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="cards">
              <img className="cards_img" src={reviews ? reviews.poster_path : null} ></img>
              <div className="cards_overlay">
                <div className="card_title">{reviews ? reviews.title : ""}</div>
                <div className="card_runtime">
                  {/* {reviews ? reviews.release_date : ""} */}
                  <span className="card_rating">
                    {reviews ? reviews.rating : ""}
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <div className="card_description">
                  {reviews ? reviews.description.slice(0, 18) + "..." : ""}
                </div>
              </div>
            </div>
          </Link>
        )}
      </>
    );
  };
  
  export default Cards2;