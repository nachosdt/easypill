import { Injectable } from '@angular/core';

/* Leaflet Geosearch */
import { OpenStreetMapProvider } from 'leaflet-geosearch';
/* Angular Geolocation */
import { Geolocation } from '@ionic-native/geolocation';


@Injectable({
  providedIn: 'root'
})

export class MapaService {
  
  public provider:OpenStreetMapProvider = new OpenStreetMapProvider({
    params: {
      'accept-language': 'es', // render results in Spanish
      countrycodes: 'es', // limit search results to Spain
      addressdetails: 1, // include additional address detail parts
    }
  });

  constructor() { }

  public async getCoords(lugar:string):Promise<any> {
    let result = await this.provider.search({ query: lugar });
    let coords:object = {latitud:result[0].y,longitud:result[0].x};     
    console.log(result);
    console.log(coords);
    return coords;    
  }

  public async buscarFarmacias(lat:number,long:number) {
    let url = `http://localhost:4000/farmacias?latitud=${lat}&longitud=${long}`;
    let param = {
        headers: {"Content-Type": "application/json; charset = UTF-8"},
        method: "GET"
    };
    try {
        let data = await fetch(url,param);
        let resultBruto = await data.json();
        let farmacias = resultBruto.datos;
        console.log("Nº farmacias: ", farmacias.length);        
        return farmacias;                            
    } catch(error) {
        console.log(error);
    }
}
}
