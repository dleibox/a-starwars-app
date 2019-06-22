import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetComponent } from './planet.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PlanetComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PlanetComponent }]),
  ]
})
export class PlanetModule { }
