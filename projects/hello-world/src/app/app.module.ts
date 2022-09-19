import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoggerModule } from 'logger';

import { AppComponent } from './app.component';
import { SpecialLogger } from './special-logger.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoggerModule.forRoot({
      logger: SpecialLogger
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
