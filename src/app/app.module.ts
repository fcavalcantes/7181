import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppFirstComponent } from './First/app.firstcomponent';

@NgModule({
  declarations: [
    AppFirstComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppFirstComponent]
})
export class AppModule { }
