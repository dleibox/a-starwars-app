import { initialState, FilmState, filmAdapter } from "./film.adapter";
import * as actions from "./film.actions";

export function filmReducer(state: FilmState = initialState, action: actions.FilmActions) {

  switch (action.type) {

    case actions.LOAD:
      console.log('[filmReducer] LOAD');
      return state;

    case actions.LOAD_SUCCESS:
      console.log('[filmReducer] LOAD_SUCCESS');
      return filmAdapter.addAll(action.films, state);

    case actions.LOAD_ERROR:
      console.log('[filmReducer] LOAD_ERROR');
      throw 'Loading films ERROR';

    case actions.DELETE:
      console.log('[filmReducer] DELETE');
      return filmAdapter.removeOne(action.id, state);

    case actions.DELETE_SUCCESS:
      console.log('[filmReducer] DELETE_SUCCESS');
      return state;

    case actions.DELETE_ERROR:
      console.log('[filmReducer] DELETE_ERROR');
      throw 'Deleting film ERROR';

    default:
      return state;
  }

}