import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [`
    .mapa-container {
      height:100%;
      width:100%;
    }
  `]

})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef 
  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [-99.04217275766999, 19.47755822576886]


  constructor() { }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: this.center,
      zoom: this.zoomLevel
    });

    
    //crear markador personalizado
      // const markerHtml : HTMLElement = document.createElement('div');
      // markerHtml.innerHTML = 'Mi casa'
      // new mapboxgl.Marker({
      //   element:markerHtml
      // })
      // .setLngLat(this.center)
      // .addTo(this.mapa)
      
    //markador basico
    new mapboxgl.Marker()
      .setLngLat(this.center)
      .addTo(this.mapa)

  }

}
