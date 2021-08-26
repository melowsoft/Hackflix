import React, { useState, createContext, useEffect } from "react";
import { IMovie } from "../types";
import { useQuery, UseQueryResult } from "react-query";
import { isMovieTitleContain } from "../utils";
import { isMovieBelongsToCategory } from "../utils/isMovieBelongsToCategory";
import { genres } from "../mocks";
import { fetchMovies } from "../api";

export const MoviesContext = createContext<any>(null);

export const MoviesProvider: React.FC = (props) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const {
    data,
  }: UseQueryResult<IMovie[], Error> = useQuery<
  IMovie[],
    Error
  >("movies", fetchMovies, { staleTime: 5 * 1000 });

  useEffect(() => {
   if(data){
     setMovies(data)
   }
  }, [data]);

  const filterMovies = (searchTerm: string) => {
    let filtered = data?.filter((movie: IMovie) =>
      isMovieTitleContain(movie, searchTerm)
    ) || [];
    setMovies(filtered);
  };

  const filterMoviesBasedOnCategory = (category: string) => {
    let filtered = data?.filter((movie: IMovie) =>
      isMovieBelongsToCategory(genres)(movie, category)
    ) || [];
    setMovies(filtered);
  };


  return (
    <MoviesContext.Provider
      value={{ movies, setMovies, filterMovies, filterMoviesBasedOnCategory }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};
