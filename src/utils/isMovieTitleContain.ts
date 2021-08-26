import {IMovie} from "../types";

export const isMovieTitleContain = (movie: IMovie, title: string): boolean =>
  movie.title.toLocaleLowerCase().includes(title.toLocaleLowerCase());
