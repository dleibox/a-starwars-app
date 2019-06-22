import { NgModule, ModuleWithProviders } from '@angular/core';
import { DataService } from './data.service';

@NgModule({
  declarations: [],
  imports: []
})
export class ServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServiceModule,
      providers: [DataService]
    }
  }
}
