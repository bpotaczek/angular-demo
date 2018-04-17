// angular libs
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// vango  modules
import { CoreModule } from './core';
import { SharedModule } from './shared';

// main component
import { AppComponent } from './app.component';

// routing
import { AppRoutingModule } from './app.routing.module';

// services and guards

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Core modules
    BrowserModule,
    BrowserAnimationsModule,

    // Vango Modules
    CoreModule,
    SharedModule,

    // routing modules
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
