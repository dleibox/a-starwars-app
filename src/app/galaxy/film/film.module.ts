import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './film.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FilmComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FilmComponent }]),
  ]
})
export class FilmModule { }
