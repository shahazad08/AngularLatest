import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { DemocomponentoneComponent } from './democomponentone/democomponentone.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponentComponent,
    DemocomponentoneComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
