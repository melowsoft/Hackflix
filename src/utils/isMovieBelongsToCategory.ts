import {IGenre, IMovie} from '../types';

// a category name should match a genre name
export const isMovieBelongsToCategory = (genres: IGenre[]) => (movie: IMovie, categoryName: string): boolean => {
    if(categoryName === 'All'){
        return true
    }

    let isBelong: boolean = false;
    let filtered = genres.filter(gen => movie.genre_ids.includes(gen.id))

    for (let el of filtered){
        if(el.name === categoryName){
            isBelong = true;
        }
    }

    return isBelong;
}
