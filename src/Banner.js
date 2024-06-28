import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Banner.css";
function Banner(props) {
  const [movie, setMovie] = useState({});
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function getMovie() {
      const res = await axios.get(props.fetchUrl);
      setMovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
    }
    getMovie();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
      <header
        className="banner"
        style={{ backgroundImage: `url(${base_url}${movie.backdrop_path})` }}
      >
        {/*Bachground image  */}
        {/* title */}
        <div className="banner_contents">
          <div className="banner_title">
            <h1>{movie?.name || movie?.title || movie?.original_name}</h1>
          </div>
          {/* div : 2 Buttons */}
          <div className="banner_buttons">
            <button className="banner_button">Play </button>
            <button className="banner_button">My List </button>
          </div>
          <div className="banner_description">
            {/* description */}
            {truncate(movie?.overview, 150)}
          </div>
        </div>
        <div className="banner--fadebottom" />
      </header>
    </>
  );
}
export default Banner;
