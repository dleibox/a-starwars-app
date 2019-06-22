import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecieComponent } from './specie.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SpecieComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SpecieComponent }]),
  ]
})
export class SpecieModule { }
