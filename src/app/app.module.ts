import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Modulos
import { PaisModule } from './pais/pais.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ // Modules
    BrowserModule,
    PaisModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
