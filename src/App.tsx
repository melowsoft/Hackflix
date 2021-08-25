import React, { useContext } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Categories } from "./components/Categories";
import { MovieList } from "./components/MovieList";
import { MoviesContext } from "./context/MoviesContext";

export function App() {
  const {movies} = useContext(MoviesContext);

  return (
    <div data-testid="app-main">
      <Header />
      <section className="wrapper">
        <Categories />
        <MovieList
          movies={movies}
        />
      </section>
      <Footer />
    </div>
  );
}
