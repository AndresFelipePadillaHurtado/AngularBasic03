import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Modulos
import { PaisModule } from './pais/pais.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ // Modules
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PaisModule,
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
