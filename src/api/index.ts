import {movies} from "../mocks/movies"
import {categories} from "../mocks/categories"

export const fetchMovies = async () => {
  try {
    return movies
  } catch (err) {
      throw new Error(err);
  }
}

export const fetchCategories = async () => {
  try {
   return categories
  } catch (err) {
      throw new Error(err);
  }
}
