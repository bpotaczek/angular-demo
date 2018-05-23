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
import { PetModule } from './pet/pet.module';

// services and guards

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Core modules
    BrowserModule,
    BrowserAnimationsModule,

    // Custom Modules
    CoreModule,
    SharedModule,
    PetModule,

    // routing modules
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
