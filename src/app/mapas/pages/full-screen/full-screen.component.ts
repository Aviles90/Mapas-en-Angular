import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';// se realizo un segunda instalacion con: npm i --save-dev @types/mapbox-gl  

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [`
    #mapa {
      height:100%;
      width:100%;
    }
  `]
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -99.04217275766999, 19.47755822576886],
      zoom: 16
    });
    
  }

}
