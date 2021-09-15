import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-farmacias',
  templateUrl: './farmacias.page.html',
  styleUrls: ['./farmacias.page.scss'],
})
export class FarmaciasPage implements OnInit {

  map: Leaflet.Map;
  constructor() {}  

  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    this.map = Leaflet.map('mapId',{ zoomControl: false }).setView([40.4, -3.7], 10);
    Leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: '',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoibmFjaG83OCIsImEiOiJja3RibjR5NGowbTQxMndteWtvNTMwMGl1In0.SyZ7hjPO3837MJmMAWbNzw'
  }).addTo(this.map);

    // Leaflet.marker([28.6, 77]).addTo(this.map).bindPopup('Delhi').openPopup();
    // Leaflet.marker([34, 77]).addTo(this.map).bindPopup('Leh').openPopup();    
  }

  ngOnInit() {
  }

}
