import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as heroAdapter from '../../store/hero.adapter';
import * as heroActions from '../../store/hero.actions';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  res$: Observable<any>;
  search: FormControl;
  sbs: Subscription;

  constructor(private store: Store<heroAdapter.HeroState>) { }

  ngOnInit() {
    console.log('... init');
    // this.res$ = this.dsvc.getPeople();
    this.store.dispatch(new heroActions.Load());
    this.res$ = this.store.select(heroAdapter.selectAllHeros);

    this.search = new FormControl();
    this.sbs = this.search.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(v => {
      this.store.dispatch(new heroActions.Find(v));
      this.res$ = this.store.select(heroAdapter.selectAllHeros);
    })
  }

  ngOnDestroy() {
    this.sbs.unsubscribe();
  }

  // search(evt) {
  //   // this.res$ = this.dsvc.getPeople(this.keyword).pipe(
  //   // );
  //   this.store.dispatch(new heroActions.Find(this.keyword));
  //   this.res$ = this.store.select(heroAdapter.selectAllHeros);
  // }
}
