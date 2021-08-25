import React from "react";
import { IMovie } from "../types";

interface IMovieProps {
    movie: IMovie;
}
export function Movie({ movie }: IMovieProps) {
    const {poster_path, title} = movie

    return (
        <div className="single-movie relative">
        <img src={poster_path} alt={title} />
        <div className="movie-content flex items-center justify-center text-center absolute w-full h-full inset-0 px-4">
          <div className="content-inner">
            <h3 className="mb-5">{title}</h3>
          </div>
        </div>
      </div>
    );
}
