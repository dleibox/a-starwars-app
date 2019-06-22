import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {

  res$: Observable<any>;

  constructor(private dsvc: DataService) { }

  ngOnInit() {
    console.log('... init');
    this.res$ = this.dsvc.getStarships();
  }

}
