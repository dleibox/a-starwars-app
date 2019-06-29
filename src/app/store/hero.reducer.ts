import { initialState, HeroState, heroAdapter } from "./hero.adapter";
import * as actions from "./hero.actions";

export function heroReducer(state: HeroState = initialState, action: actions.HeroActions) {

  switch (action.type) {

    case actions.LOAD:
      console.log('[heroReducer] LOAD');
      // return state;
      return heroAdapter.addAll([], state);

    case actions.LOAD_SUCCESS:
      console.log('[heroReducer] LOAD_SUCCESS');
      return heroAdapter.addAll(action.heros, state);

    case actions.LOAD_ERROR:
      console.log('[heroReducer] LOAD_ERROR');
      throw 'Loading heros ERROR';

    case actions.FIND:
      console.log('[heroReducer] FIND');
      return state;

    case actions.FIND_SUCCESS:
      console.log('[heroReducer] FIND_SUCCESS');
      return heroAdapter.addAll(action.heros, state);

    case actions.FIND_ERROR:
      console.log('[heroReducer] LOAD_ERROR');
      throw 'Loading heros ERROR';

    case actions.DELETE:
      console.log('[heroReducer] DELETE');
      return heroAdapter.removeOne(action.id, state);

    case actions.DELETE_SUCCESS:
      console.log('[heroReducer] DELETE_SUCCESS');
      return state;

    case actions.DELETE_ERROR:
      console.log('[heroReducer] DELETE_ERROR');
      throw 'Deleting hero ERROR';

    default:
      return state;
  }

}