import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  res$: Observable<any>;

  constructor(private dsvc: DataService) { }

  ngOnInit() {
    console.log('... init');
    this.res$ = this.dsvc.getVehicles();
  }

}
