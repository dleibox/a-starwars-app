import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  res$: Observable<any>;

  constructor(private dsvc: DataService) { }

  ngOnInit() {
    console.log('... init');
    this.res$ = this.dsvc.getPlanets();
  }

}
