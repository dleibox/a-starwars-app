import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle.component';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from 'src/app/app-material.module';

@NgModule({
  declarations: [VehicleComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild([{ path: '', component: VehicleComponent }]),
  ]
})
export class VehicleModule { }
