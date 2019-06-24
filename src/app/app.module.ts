import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { ServiceModule } from './service/service.module';

import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { AppBottomsheetComponent } from './app-bottomsheet.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBottomsheetComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([]),
    ServiceModule.forRoot(),
  ],
  entryComponents: [
    AppBottomsheetComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
