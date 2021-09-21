import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';

/* Geolocation para localizar la posición del usuario */
import { Geolocation } from '@ionic-native/geolocation/ngx';

// Servicio DetalleProspecto
import { DetalleProspectoService } from './shared/detalle-prospecto.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ComponentsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Geolocation,
  DetalleProspectoService
  ], // Añadido Geolocation a providers
  bootstrap: [AppComponent],
})
export class AppModule { }
