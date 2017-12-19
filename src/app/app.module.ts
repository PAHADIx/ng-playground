import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConnectModule } from './connect.module/connect.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ConnectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
