import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-rage',
  templateUrl: './zoom-rage.component.html',
  styles: [`
    #mapa {
      height:100%;
      width:100%;
    }
  `]
})
export class ZoomRageComponent implements OnInit {

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
