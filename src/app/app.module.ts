import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './src/app/core/components/nav/nav.component';
import { PageMiddleComponent } from './src/app/core/components/page-middle/page-middle.component';
import { NavRightComponent } from './src/app/core/components/nav-right/nav-right.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PageMiddleComponent,
    NavRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
