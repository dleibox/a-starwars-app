import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { heroReducer } from 'src/app/store/hero.reducer';
import { HeroEffects } from 'src/app/store/hero.effects';

@NgModule({
  declarations: [HeroComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    AppMaterialModule,
    RouterModule.forChild([{ path: '', component: HeroComponent }]),
    StoreModule.forFeature('hero', heroReducer),
    EffectsModule.forFeature([HeroEffects])
  ]
})
export class HeroModule { }
