import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as filmAdapter from '../../store/film.adapter';
import * as filmActions from '../../store/film.actions';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  res$: Observable<any>;

  constructor(private store: Store<filmAdapter.FilmState>) { }

  ngOnInit() {
    console.log('... init');
    this.store.dispatch(new filmActions.Load());
    this.res$ = this.store.select(filmAdapter.selectAllFilms).pipe(
      tap((res: any) => res.sort((a, b) => a.episode_id - b.episode_id))
    );
  }

}
