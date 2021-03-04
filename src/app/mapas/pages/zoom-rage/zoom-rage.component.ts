import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-rage',
  templateUrl: './zoom-rage.component.html',
  styles: [`
    .mapa-container {
      height:100%;
      width:100%;
    }
    .row{
      background-color: white;
      border-radius: 5px;
      bottom: 50px;
      left:50px;
      padding: 10px;
      position: fixed;
      z-index: 999;
      box-shadow:3px 3px 3px black;
    }
  `]
})
export class ZoomRageComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef //sirve para tomar un elemento y utilizarlo como una propiedad
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;

  constructor() { }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [ -99.04217275766999, 19.47755822576886],
      zoom: this.zoomLevel
    });
    
    this.mapa.on('zoom', (ev) => {//manera de hacer un Listener (Escuchar un evento)
      // console.log(ev);
      this.zoomLevel = this.mapa.getZoom();
    })

  }

  zoomOut(){
    this.mapa.zoomOut();    
    // this.zoomLevel = this.mapa.getZoom();  

  }

  zoomIn(){
    this.mapa.zoomIn();  
  }

}
