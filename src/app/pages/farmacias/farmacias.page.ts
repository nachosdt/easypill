import { Component, OnInit } from '@angular/core';

/* Importaciones para trabajar con geolocalización y el mapa */
import { Geolocation } from '@ionic-native/geolocation/ngx';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-farmacias',
  templateUrl: './farmacias.page.html',
  styleUrls: ['./farmacias.page.scss'],
})
export class FarmaciasPage implements OnInit {

  public nombreCabecera:string = "Buscador de farmacias";
  map: Leaflet.Map;
  constructor(private geolocation: Geolocation) {}  

  ionViewDidEnter() { this.localizarUsuario(); }

  // Método que construye el mapa centrado en la posición dle usuario
  private leafletMap(latitud:number,longitud:number) {
    this.map = Leaflet.map('mapId',{ zoomControl: false }).setView([latitud, longitud], 15);
    Leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: '',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoibmFjaG83OCIsImEiOiJja3RibjR5NGowbTQxMndteWtvNTMwMGl1In0.SyZ7hjPO3837MJmMAWbNzw'
  }).addTo(this.map);
    
    let icono = Leaflet.icon({
      iconUrl: "../../../../assets/map/marker-icon.png",
      iconSize: [35, 55], // size of the icon
      iconAnchor: [13, 38], // point of the icon which will correspond to marker's location
      shadowUrl: "../../../../assets/map/marker-shadow.png",
      shadowSize: [35, 55], // size of the shadow
      shadowAnchor: [0,38],
      popupAnchor: [0, -40] // point from which the popup should open relative to the iconAnchor
    });
    Leaflet.marker([latitud, longitud],{icon: icono}).addTo(this.map).bindPopup("<b>Ionic Mooooooola!</b>").openPopup();   
  }

  ngOnInit() {
  }

  // Método que localiza la posición de usuario y llama a leafletMap(lat,long)
  private localizarUsuario() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.leafletMap(resp.coords.latitude,resp.coords.longitude);      
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
  

}
