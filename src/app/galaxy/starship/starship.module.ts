import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipComponent } from './starship.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StarshipComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: StarshipComponent }]),
  ]
})
export class StarshipModule { }
