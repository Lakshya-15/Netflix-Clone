import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import "./Row.css";

function Row(props) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [trailerURl, setTrailerUrl] = useState("");
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  useEffect(() => {
    async function fetchData() {
      const Data = await axios.get(props.fetchUrl).then((res) => {
        return res;
      });
      // console.table(Data);
      setMovies((movies) => Data.data.results);
    }
    fetchData();
  }, [props.fetchUrl]);

  const handleClick = (movie) => {
    if (trailerURl) {
      setTrailerUrl("");
    } else {
      console.log("@@", movie?.name);
      movieTrailer(movie?.name || "")
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div className="row">
        <h2>{props.title}</h2>
        <div className="row_posters">
          {movies.map((movie) => {
            return (
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row_poster ${
                  props.isLargeRow == true && "row_posterLarge"
                }`}
                src={`${base_url}${movie.poster_path}`}
                alt={movie.title}
              />
            );
          })}
        </div>
        {trailerURl && <YouTube videoId={trailerURl} opts={opts} />}
      </div>
    </>
  );
}

export default Row;
