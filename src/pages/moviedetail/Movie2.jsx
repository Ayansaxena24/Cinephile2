import React, { useEffect, useState } from "react";
import "./Movie.css";
import { useParams } from "react-router-dom";
import { reviewsData } from "../myreviews/reviewsData";

const Movie2 = () => {
  const [currentMovieDetail, setMovie] = useState([]);
  const { id } = useParams();
  console.log(currentMovieDetail);

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    reviewsData.forEach((reviews) => {
      if (reviews.id == id) {
        setMovie(reviews);
      }
    });
  };

  return (
    <div className="movie">
      <div className="movie_intro">
        <img
          className="movie__backdrop"
          src={currentMovieDetail ? currentMovieDetail.backdrop_path : null}
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={currentMovieDetail ? currentMovieDetail.poster_path : null}
            />
          </div>
        </div>
        <div className="movie_detailRight">
          <div className="movie_detailRightTop">
            <div className="movie__name">
              {currentMovieDetail ? currentMovieDetail.original_title : ""}
            </div>
            <div className="movie__tagline">
              {currentMovieDetail ? currentMovieDetail.tagline : ""}
            </div>
            <div className="movie__rating">
              {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
              <i className="fas fa-star" />
              <span className="movie__voteCount">
                {currentMovieDetail
                  ? "(" + currentMovieDetail.vote_count + ") votes"
                  : ""}
              </span>
            </div>
            <div className="movie__runtime">
              {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
            </div>
            <div className="movie__releaseDate">
              {currentMovieDetail
                ? "Release date: " + currentMovieDetail.release_date
                : ""}
            </div>
            <div className="my-5 space-x-1 left-2">
              {currentMovieDetail && currentMovieDetail.genres
                ? currentMovieDetail.genres.map((genre) => (
                    <>
                      <span id={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>
          <div className="movie_detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
          </div>
        </div>
      </div>
      <div className="movie__links">
        <div className="movie__heading">Useful Links</div>
        {currentMovieDetail && currentMovieDetail.homepage && (
          <a
            href={currentMovieDetail.homepage}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie__homeButton movie__Button">
                Homepage <i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
        {currentMovieDetail && currentMovieDetail.imdb_id && (
          <a
            href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie__imdbButton movie__Button">
                IMDb<i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
      </div>
      <div className="px-52 space-y-2 shadow-lg shadow-cyan-300 rounded-3xl mx-10 py-2">
        <div className="font-bold text-3xl text-center">Review</div>
        <div>{currentMovieDetail ? currentMovieDetail.review1 : ""}</div>
        <div></div>
        <div>{currentMovieDetail ? currentMovieDetail.review2 : ""}</div>
        <div className="flex justify-center">
        <div className="font-bold text-center rounded-3xl px-5 text-xl pt-4 pb-4 mb-2 shadow-lg shadow-cyan-400 bg-transparent w-fit flex justify-center">{currentMovieDetail ? currentMovieDetail.charac : ""}</div>
        </div>
        <div></div>
        <div>{currentMovieDetail ? currentMovieDetail.review3 : ""}</div>
        <div></div>
        <div>{currentMovieDetail ? currentMovieDetail.review4 : ""}</div>
        <div></div>
        <div>{currentMovieDetail ? currentMovieDetail.review5 : ""}</div>
        <div></div>
        <div>{currentMovieDetail ? currentMovieDetail.review6 : ""}</div>
        <div></div>
        <div>{currentMovieDetail ? currentMovieDetail.review7 : ""}</div>
      </div>

      <div className="mt-10">
        <p className="text-3xl text-center font-bold">Characters</p>
        {/* <div className="grid"> */}
          <div className="flex flex-col-2 flex-wrap px-32 text-center justify-center space-x-6 mt-6">
            {currentMovieDetail &&
              currentMovieDetail.characters &&
              currentMovieDetail.characters.map((character) => (
                <>
                  {character.name && (
                    <span className=" hover:text-cyan-300 hover:shadow-cyan-500 hover:z-50 bg-black shadow-lg hover:transform hover:ease-in-out hover:scale-110 duration-700 hover:opacity-0.8 hover:box-shadow-rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; ">
                      <img className="w-80 h-70 rounded-md" src={character.image} />
                      <span className="pt-2 text-center flex justify-center bg-black hover:z-50">{character.name}</span>
                    </span>
                  )}
                </>
              ))}
          {/* </div> */}
        </div>
      </div>
      <div className="text-3xl text-center pt-10 font-bold">
        Production companies
      </div>
      <div className="movie__production">
        {currentMovieDetail &&
          currentMovieDetail.production_companies &&
          currentMovieDetail.production_companies.map((company) => (
            <>
              {company.logo_path && (
                <span className="productionCompanyImage">
                  <img
                    className="movie__productionComapany"
                    src={company.logo_path}
                  />
                  <span>{company.name}</span>
                </span>
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default Movie2;
