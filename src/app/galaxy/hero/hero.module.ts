import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from 'src/app/app-material.module';

@NgModule({
  declarations: [HeroComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild([{ path: '', component: HeroComponent }]),
  ]
})
export class HeroModule { }
