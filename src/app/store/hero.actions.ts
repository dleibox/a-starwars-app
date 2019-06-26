import { Action } from "@ngrx/store";
import { Hero } from '../models/hero.model';

export const LOAD = '[Hero] Load';
export const LOAD_SUCCESS = '[Hero] Load Success';
export const LOAD_ERROR = '[Hero] Load Error';
export const FIND = '[Hero] Find';
export const FIND_SUCCESS = '[Hero] Find Success';
export const FIND_ERROR = '[Hero] Find Error';
export const DELETE = '[Hero] Delete';
export const DELETE_SUCCESS = '[Hero] Delete Success';
export const DELETE_ERROR = '[Hero] Delete Error';

export class Load implements Action {
  readonly type = LOAD;
  constructor() { }
}
export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;
  constructor(public heros: Hero[]) { }
}
export class LoadError implements Action {
  readonly type = LOAD_ERROR;
  constructor(public msg: string) { }
}

export class Find implements Action {
  readonly type = FIND;
  constructor(public search: string) { }
}
export class FindSuccess implements Action {
  readonly type = FIND_SUCCESS;
  constructor(public heros: Hero[]) { }
}
export class FindError implements Action {
  readonly type = FIND_ERROR;
  constructor(public msg: string) { }
}

export class Delete implements Action {
  readonly type = DELETE;
  constructor(public id: string) { }
}
export class DeleteSuccess implements Action {
  readonly type = DELETE_SUCCESS;
  constructor() { }
}
export class DeleteError implements Action {
  readonly type = DELETE_ERROR;
  constructor(public msg: string) { }
}

export type HeroActions = Load | LoadSuccess | LoadError | Find | FindSuccess | FindError | Delete | DeleteSuccess | DeleteError;