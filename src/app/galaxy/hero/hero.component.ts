import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  res$: Observable<any>;
  keyword: string;

  constructor(private dsvc: DataService) { }

  ngOnInit() {
    console.log('... init');
    this.res$ = this.dsvc.getPeople();
  }

  search(evt){
    this.res$ = this.dsvc.getPeople(this.keyword);
  }
}
