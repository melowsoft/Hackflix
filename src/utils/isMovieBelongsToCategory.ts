import {IGenre, IMovie} from "../types";

// a category name should match a genre name
export const isMovieBelongsToCategory =
  (genres: IGenre[]) =>
  (movie: IMovie, categoryName: string): boolean => {
    if (categoryName === "All") {
      return true;
    }

    // let isBelong: boolean = false;
    // let filtered =

    // It is possible to implement this in a functional way
    // and avoid intermediary variables
    return (
      genres
        .filter((gen) => movie.genre_ids.includes(gen.id))
        .filter((movie) => movie.name === categoryName).length > 0
    );

    // The for loop is faster here but you need to add the break 
    // otherwise, it will loop throught the entire array even 
    // when it found the required category

    // for (let el of filtered) {
    //   if (el.name === categoryName) {
    //     isBelong = true;
    //     break;
    //   }
    // }

    // return isBelong;
  };
