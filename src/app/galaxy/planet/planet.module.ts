import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetComponent } from './planet.component';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from 'src/app/app-material.module';

@NgModule({
  declarations: [PlanetComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild([{ path: '', component: PlanetComponent }]),
  ]
})
export class PlanetModule { }
