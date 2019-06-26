import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Film } from '../models/film.model';

export interface FilmState extends EntityState<Film> { }

export const filmAdapter = createEntityAdapter<Film>();

const defaultFilms : FilmState = {
    ids: [],
    entities: {}
};

export const initialState: FilmState = filmAdapter.getInitialState(defaultFilms);

export const {
    selectAll,
    selectEntities,
    selectIds,
    selectTotal
} = filmAdapter.getSelectors();

export const selectFilmState = createFeatureSelector<FilmState>('film');

export const selectAllFilms = createSelector(
    selectFilmState,
    selectAll
);