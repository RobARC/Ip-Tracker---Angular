import { Component } from '@angular/core';
import { Icon, Map, marker, tileLayer } from 'leaflet';
import { SendDataToResultsService } from './sendDataToResults.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-ip-address-tracker';
  map: any;
  latitud: number = 11.0053;
  longitud: number = -74.8172 ;

  constructor(
    private sendDataToResults: SendDataToResultsService
  ) {}

  ngOnInit(): void {
   this.sendDataToResults.triggerData$.subscribe(resp => {
    this.latitud = resp.location.lat;
    this.longitud = resp.location.lng;

    this.map.remove();
    this.locatationByIp(this.latitud, this.longitud);
   })
  }


  ngAfterContentInit(): void {
    this.map = new Map('map').setView([11.0053, -74.8172], 13);
    tileLayer(
      'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
      {
        maxZoom: 22,
        //attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(this.map);

    const myIcon = new Icon ({
      iconUrl: '../assets/images/icon-location.svg',
      iconSize: [46, 56]
      
    })

    const markerItem = marker([11.0053, -74.8172], {icon: myIcon}).addTo(this.map);
  }

  locatationByIp(lat: number, long: number){

    this.map = new Map('map').setView([lat, long], 13);
    tileLayer(
      'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
      {
        maxZoom: 20,
        //attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(this.map);

    const myIcon = new Icon ({
      iconUrl: '../assets/images/icon-location.svg',
      iconSize: [46, 56]
      
    })

    const markerItem = marker([lat, long], {icon: myIcon}).addTo(this.map);
  }
  
}
