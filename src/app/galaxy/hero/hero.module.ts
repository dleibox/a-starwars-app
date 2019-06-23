import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeroComponent],
  imports: [
    CommonModule, FormsModule,
    AppMaterialModule,
    RouterModule.forChild([{ path: '', component: HeroComponent }]),
  ]
})
export class HeroModule { }
