import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InitDestroyDemoComponent } from './init-destroy-demo/init-destroy-demo.component';
import { SpyDirectiveComponent } from './spy-directive/spy-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    InitDestroyDemoComponent,
    SpyDirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
