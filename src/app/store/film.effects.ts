import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from "rxjs";
import { mergeMap, map, catchError } from "rxjs/operators";
import * as filmActions from './film.actions';
import { DataService } from '../service/data.service';
import { Film } from '../models/film.model';

@Injectable()
export class FilmEffects {
  constructor(private actions$: Actions, private dsvc: DataService) {
  }

  @Effect()
  findAllFilms$: Observable<Action> = this.actions$.pipe(
    ofType<filmActions.Load>(filmActions.LOAD),
    mergeMap(action => {
      console.log('[FilmEffects] findAllFilms$', action);
      return this.dsvc.getFilms().pipe(
        map((a: any) => {
          return new filmActions.LoadSuccess(a.results.map((r: Film) => {
            r.id = r.episode_id;
            return r;
          }));
        }),
        catchError(() => of(new filmActions.LoadError('ERROR: getAllFilms')))
      );
    })
  );

  @Effect()
  deleteFilm$: Observable<Action> = this.actions$.pipe(
    ofType<filmActions.Load>(filmActions.DELETE),
    mergeMap(action => {
      console.log('[FilmEffects] deleteFilm$', action);
      return of(new filmActions.DeleteSuccess());
    })
  );
}