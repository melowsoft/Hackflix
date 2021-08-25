import {ICategory, IGenre, IMovie} from '../src/types';
import {shallow} from 'enzyme';
import React from 'react';
import {Movie} from '../src/components/Movie';
import {MovieList} from '../src/components/MovieList';
import 'jest-enzyme'


const harryPotterAndThePhilosophersStoneMovie: IMovie = {
    id: 1,
    title: `Harry Potter and the Philosopher's Stone`,
    genre_ids: [1, 2, 3],
    backdrop_path: '',
    poster_path: '/posters/harry-potter-and-the-philosopher-s-stone',
};

const harryPotterAndTheChamberOfSecretsMovie: IMovie = {
    id: 2,
    title: 'Harry Potter and Chamber of Secrets',
    genre_ids: [1, 2, 3],
    backdrop_path: '',
    poster_path: '/posters/harry-potter-and-the-chamber-of-secrets',
};


test('should render multiples movies title and poster', () => {
    // Given
    const movies: IMovie[] = [
        harryPotterAndThePhilosophersStoneMovie,
        harryPotterAndTheChamberOfSecretsMovie,
    ]
    // When
    const component = shallow(<MovieList movies={movies} />);

    // Then
    expect(component).toContainReact(<Movie movie={harryPotterAndThePhilosophersStoneMovie} />)
    expect(component).toContainReact(<Movie movie={harryPotterAndTheChamberOfSecretsMovie} />)
});

test('should filter the movies based on search terms (movie 1)', () => {
    // Given
    const movies: IMovie[] = [
        harryPotterAndThePhilosophersStoneMovie,
        harryPotterAndTheChamberOfSecretsMovie,
    ]

    // When
    const component = shallow(<MovieList movies={movies} />);

    // Then
    expect(component).not.toContainReact(<Movie movie={harryPotterAndThePhilosophersStoneMovie} />)
    expect(component).toContainReact(<Movie movie={harryPotterAndTheChamberOfSecretsMovie} />)
});

test('should filter the movies based on search terms (movie 2)', () => {
    // Given
    const movies: IMovie[] = [
        harryPotterAndThePhilosophersStoneMovie,
        harryPotterAndTheChamberOfSecretsMovie,
    ]

    // When
    const component = shallow(<MovieList  movies={movies} />);

    // Then
    expect(component).toContainReact(<Movie movie={harryPotterAndThePhilosophersStoneMovie} />)
    expect(component).not.toContainReact(<Movie movie={harryPotterAndTheChamberOfSecretsMovie} />)
});


test('should category filter movies based on active filter', () => {
    // Given
    const genres: IGenre[] = [
        {
            id: 12,
            name: "Adventure",
        },
        {
            id: 18,
            name: "Drama",
        },
    ]
    const titanicMovie = {
        id: 597,
        title: 'Titanic',
        poster_path: '/kHXEpyfl6zqn8a6YuozZUujufXf.jpg',
        genre_ids: [18, 10749, 53],
        backdrop_path: '/fVcZErSWa7gyENuj8IWp8eAfCnL.jpg',
    };
    const thorMovie = {
        id: 10195,
        title: 'Thor',
        poster_path: '/bIuOWTtyFPjsFDevqvF3QrD1aun.jpg',
        genre_ids: [12, 14, 28],
        backdrop_path: '/6UxFfo8K3vcihtUpX1ek2ucGeEZ.jpg',
    };
    const movies: IMovie[] = [
        titanicMovie,
        thorMovie,
    ]

    // When
    const component = shallow(<MovieList movies={movies}/>);

    // Then
    expect(component).toContainReact(<Movie movie={titanicMovie} />);
    expect(component).not.toContainReact(<Movie movie={thorMovie} />);
});
