import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipComponent } from './starship.component';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from 'src/app/app-material.module';

@NgModule({
  declarations: [StarshipComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild([{ path: '', component: StarshipComponent }]),
  ]
})
export class StarshipModule { }
