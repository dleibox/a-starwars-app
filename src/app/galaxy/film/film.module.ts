import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FilmComponent } from './film.component';

@NgModule({
  declarations: [FilmComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild([{ path: '', component: FilmComponent }]),
  ]
})
export class FilmModule { }
