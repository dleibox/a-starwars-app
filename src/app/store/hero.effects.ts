import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from "rxjs";
import { mergeMap, map, catchError } from "rxjs/operators";
import * as heroActions from './hero.actions';
import { DataService } from '../service/data.service';
import { Hero } from '../models/hero.model';

@Injectable()
export class HeroEffects {
  constructor(private actions$: Actions, private dsvc: DataService) {
  }

  @Effect()
  findAllHeros$: Observable<Action> = this.actions$.pipe(
    ofType<heroActions.Load>(heroActions.LOAD),
    mergeMap(action => {
      console.log('[HeroEffects] findAllHeros$', action);
      let i = 1;
      return this.dsvc.getPeople().pipe(
        map((a: any) => {
          return new heroActions.LoadSuccess(a.results.map((r: Hero) => {
            r.id = i; i++;
            return r;
          }));
        }),
        catchError(() => of(new heroActions.LoadError('ERROR: getAllHeros')))
      );
    })
  );

  @Effect()
  findHeros$: Observable<Action> = this.actions$.pipe(
    ofType<heroActions.Find>(heroActions.FIND),
    mergeMap(action => {
      console.log('[HeroEffects] findHeros$', action);
      let i = 1;
      return this.dsvc.getPeople(action.search).pipe(
        map((a: any) => {
          return new heroActions.FindSuccess(a.results.map((r: Hero) => {
            r.id = i; i++;
            return r;
          }));
        }),
        catchError(() => of(new heroActions.FindError('ERROR: getAllHeros')))
      );
    })
  );

  @Effect()
  deleteHero$: Observable<Action> = this.actions$.pipe(
    ofType<heroActions.Load>(heroActions.DELETE),
    mergeMap(action => {
      console.log('[HeroEffects] deleteHero$', action);
      return of(new heroActions.DeleteSuccess());
    })
  );
}