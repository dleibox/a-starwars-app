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
  covers = {
    1: 'https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY999_SX666_AL_.jpg',
    2: 'https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SY999_CR0,0,659,999_AL_.jpg',
    3: 'https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SY1000_SX750_AL_.jpg',
    4: 'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,643,1000_AL_.jpg',
    5: 'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,641,1000_AL_.jpg',
    6: 'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY999_CR0,0,644,999_AL_.jpg',
    7: 'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg',
  };
  
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
            r.cover = this.covers[r.id];
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