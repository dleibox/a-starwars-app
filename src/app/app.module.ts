import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { ServiceModule } from './service/service.module';

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
    ServiceModule.forRoot(),
  ],
  entryComponents: [
    AppBottomsheetComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
