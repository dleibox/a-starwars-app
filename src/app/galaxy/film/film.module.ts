import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { filmReducer } from 'src/app/store/film.reducer';
import { FilmEffects } from 'src/app/store/film.effects';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FilmComponent } from './film.component';

@NgModule({
  declarations: [FilmComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild([{ path: '', component: FilmComponent }]),
    StoreModule.forFeature('film', filmReducer),
    EffectsModule.forFeature([FilmEffects])
  ]
})
export class FilmModule { }
