import {IMovie} from '../src/types';
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
    const component = shallow(<MovieList movies={movies}/>);

    // Then
    expect(component).toContainReact(<Movie movie={harryPotterAndThePhilosophersStoneMovie} />)
    expect(component).toContainReact(<Movie movie={harryPotterAndTheChamberOfSecretsMovie} />)
});

