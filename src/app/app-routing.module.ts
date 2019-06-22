import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'planet',
    loadChildren: () => import('./galaxy/planet/planet.module').then(m => m.PlanetModule),
  },
  {
    path: 'film',
    loadChildren: () => import('./galaxy/film/film.module').then(m => m.FilmModule),
  },
  {
    path: 'hero',
    loadChildren: () => import('./galaxy/hero/hero.module').then(m => m.HeroModule),
  },
  {
    path: 'starship',
    loadChildren: () => import('./galaxy/starship/starship.module').then(m => m.StarshipModule),
  },
  {
    path: 'specie',
    loadChildren: () => import('./galaxy/specie/specie.module').then(m => m.SpecieModule),
  },
  {
    path: 'vehicle',
    loadChildren: () => import('./galaxy/vehicle/vehicle.module').then(m => m.VehicleModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
