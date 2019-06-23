import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  res$: Observable<any>;

  constructor(private dsvc: DataService) { }

  ngOnInit() {
    console.log('... init');
    this.res$ = this.dsvc.getFilms().pipe(
      tap((res: any) => res.results.sort((a, b) => a.episode_id - b.episode_id))
    );
  }

}
