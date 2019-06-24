import { Action } from "@ngrx/store";
import { Film } from '../models/film.model';

export const LOAD = '[Film] Load';
export const LOAD_SUCCESS = '[Film] Load Success';
export const LOAD_ERROR = '[Film] Load Error';
export const DELETE = '[Film] Delete';
export const DELETE_SUCCESS = '[Film] Delete Success';
export const DELETE_ERROR = '[Film] Delete Error';

export class Load implements Action {
  readonly type = LOAD;
  constructor() { }
}
export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;
  constructor(public films: Film[]) { }
}
export class LoadError implements Action {
  readonly type = LOAD_ERROR;
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

export type FilmActions = Load | LoadSuccess | LoadError | Delete | DeleteSuccess | DeleteError;