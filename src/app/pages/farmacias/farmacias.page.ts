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
  map: Leaflet.Map;
  constructor(private geolocation: Geolocation, private servicioMapa:MapaService) {}  

  ionViewDidEnter() { 
    this.leafletMap(40.4, -3.6, 9);
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
  private localizarUsuario() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp);
      this.map.setView([resp.coords.latitude,resp.coords.longitude],15);
      //console.log("resultado localizacion: ",resp);
      let icono = Leaflet.icon({
        iconUrl: "../../../../assets/map/marker-icon.png",
        iconSize: [35, 55], // size of the icon
        iconAnchor: [13, 38], // point of the icon which will correspond to marker's location
        shadowUrl: "../../../../assets/map/marker-shadow.png",
        shadowSize: [35, 55], // size of the shadow
        shadowAnchor: [0,38],
        popupAnchor: [0, -40] // point from which the popup should open relative to the iconAnchor
      });
      //Leaflet.marker([resp.coords.latitude, resp.coords.longitude],{icon: icono}).addTo(this.map).bindPopup("<b>Usted está aquí.</b>").openPopup();
      let iconoFarmacias = Leaflet.icon({
        iconUrl: "../../../../assets/map/farmacia.png",
        iconSize: [35, 55], 
        iconAnchor: [13, 38], 
        popupAnchor: [0, -40] 
      });
      Leaflet.marker([resp.coords.latitude+0.001, resp.coords.longitude-0.0015],{icon: iconoFarmacias}).addTo(this.map);
      Leaflet.marker([resp.coords.latitude-0.002, resp.coords.longitude-0.0029],{icon: iconoFarmacias}).addTo(this.map);
      Leaflet.marker([resp.coords.latitude+0.0014, resp.coords.longitude+0.0034],{icon: iconoFarmacias}).addTo(this.map);
      Leaflet.marker([resp.coords.latitude-0.0041, resp.coords.longitude+0.001],{icon: iconoFarmacias}).addTo(this.map);
      Leaflet.marker([resp.coords.latitude+0.0052, resp.coords.longitude-0.002],{icon: iconoFarmacias}).addTo(this.map);
      Leaflet.marker([resp.coords.latitude+0.003, resp.coords.longitude-0.002],{icon: iconoFarmacias}).addTo(this.map);
    }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  public async buscarLugar(input:HTMLInputElement) {
    let coords = await this.servicioMapa.getCoords(input.value + ", Comunidad de Madrid");    
    this.map.setView([coords.latitud,coords.longitud],15);
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
  }
  

}
