import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Hero } from '../models/hero.model';

export interface HeroState extends EntityState<Hero> { }

export const heroAdapter = createEntityAdapter<Hero>();

const defaultHeros : HeroState = {
    ids: [],
    entities: {}
};

export const initialState: HeroState = heroAdapter.getInitialState(defaultHeros);

export const {
    selectAll,
    selectEntities,
    selectIds,
    selectTotal
} = heroAdapter.getSelectors();

export const selectHeroState = createFeatureSelector<HeroState>('hero');

export const selectAllHeros = createSelector(
    selectHeroState,
    selectAll
);

export const selectTotalHeros = createSelector(
    selectHeroState,
    selectTotal
);