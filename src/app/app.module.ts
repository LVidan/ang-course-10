import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipePlaygroundComponent } from './components/pipe-playground/pipe-playground.component';
import { ArrToStringPipe } from './pipes/arr-to-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipePlaygroundComponent,
    ArrToStringPipe
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
