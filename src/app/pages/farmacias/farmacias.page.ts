import { Component, OnInit } from '@angular/core';

/* Importaciones para trabajar con geolocalización y el mapa */
import { Geolocation } from '@ionic-native/geolocation/ngx';
import * as Leaflet from 'leaflet';
/* Servicio del Mapa*/
import { MapaService } from 'src/app/shared/mapa.service';

@Component({
  selector: 'app-farmacias',
  templateUrl: './farmacias.page.html',
  styleUrls: ['./farmacias.page.scss'],
})


export class FarmaciasPage implements OnInit {

  public nombreCabecera:string = "Buscador de farmacias";
  public map: Leaflet.Map;  

  constructor(private geolocation: Geolocation, private servicioMapa:MapaService) {}  

  ionViewDidEnter() {
    if (!this.map) {this.leafletMap(40.4, -3.6, 9);}     
    this.localizarUsuario(); 
  }

  // Método que construye el mapa centrado en la posición dle usuario
  private leafletMap(latitud:number,longitud:number,zoom:number) {
    this.map = Leaflet.map('mapId',{ zoomControl: false }).setView([latitud, longitud], zoom);
    Leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: '',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoibmFjaG83OCIsImEiOiJja3RibjR5NGowbTQxMndteWtvNTMwMGl1In0.SyZ7hjPO3837MJmMAWbNzw'
    }).addTo(this.map);
  }

  ngOnInit() {
  }

  // Método que localiza la posición de usuario y llama a leafletMap(lat,long)
  private async localizarUsuario() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp);
      this.map.setView([resp.coords.latitude,resp.coords.longitude],16);
      let icono = Leaflet.icon({
        iconUrl: "../../../../assets/map/marker-icon.png",
        iconSize: [25, 41], // size of the icon
        iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
        shadowUrl: "../../../../assets/map/marker-shadow.png",
        shadowSize: [41, 41], // size of the shadow
        shadowAnchor: [12, 41],
        popupAnchor: [0, -40] // point from which the popup should open relative to the iconAnchor
      });
      Leaflet.marker([resp.coords.latitude, resp.coords.longitude],{icon: icono}).addTo(this.map);
      
      // Añadimos las farmacias cercanas      
      let iconoFarmacias = Leaflet.icon({
        iconUrl: "../../../../assets/map/farmacia.png",
        iconSize: [32, 37], 
        iconAnchor: [16, 37], 
        popupAnchor: [0, -40] 
      });
      let farmacias = this.servicioMapa.buscarFarmacias(resp.coords.latitude,resp.coords.longitude);
      farmacias.then((resultado) => {
        resultado.forEach((farmacia:any) => {
          Leaflet.marker([farmacia.latitud, farmacia.longitud],{icon: iconoFarmacias})
          .bindPopup(farmacia.direccion)
          .addTo(this.map);          
        });
      })
      .catch(error =>{
        console.log(error);
      });      
    }).catch((error) => {
       console.log('Error getting location', error);
    });
  }

  public async buscarLugar(dato:string) {
    let coords = await this.servicioMapa.getCoords(dato + ", Comunidad de Madrid");    
    this.map.setView([coords.latitud,coords.longitud],16);
    let icono = Leaflet.icon({
      iconUrl: "../../../../assets/map/marker-icon.png",
      iconSize: [25, 41], // size of the icon
      iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
      shadowUrl: "../../../../assets/map/marker-shadow.png",
      shadowSize: [41, 41], // size of the shadow
      shadowAnchor: [12, 41],
      popupAnchor: [0, -40] // point from which the popup should open relative to the iconAnchor
    });
    Leaflet.marker([coords.latitud, coords.longitud],{icon: icono}).addTo(this.map);
    let iconoFarmacias = Leaflet.icon({
      iconUrl: "../../../../assets/map/farmacia.png",
      iconSize: [32, 37], 
      iconAnchor: [16, 17], 
      popupAnchor: [0, -40] 
    });
    let farmacias = this.servicioMapa.buscarFarmacias(coords.latitud,coords.longitud);
      farmacias.then((resultado) => {
        resultado.forEach((farmacia:any) => {
          Leaflet.marker([farmacia.latitud, farmacia.longitud],{icon: iconoFarmacias})
          .bindPopup(farmacia.direccion)
          .addTo(this.map);
        });
      })
      .catch(error =>{
        console.log(error);
      });
  }

  public detectarIntro(event:KeyboardEvent,dato:string) {
    if (event.key==="Enter") {
      this.buscarLugar(dato);
    }

  }
}
