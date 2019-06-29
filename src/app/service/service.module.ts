import { NgModule, ModuleWithProviders } from '@angular/core';
import { MatSpinner } from '@angular/material';
import { LoaderService } from './loader.service';
import { DataService } from './data.service';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    LoaderService
  ],
  entryComponents: [
    MatSpinner
  ]
})
export class ServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServiceModule,
      providers: [
        LoaderService,
        DataService
      ]
    }
  }
}
