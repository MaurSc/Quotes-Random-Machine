import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }  from '@angular/common/http';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/background/background.component';
import { FrameComponent } from './components/frame/frame.component';
import { ButtonQuoteComponent } from './components/button-quote/button-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    FrameComponent,
    ButtonQuoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
