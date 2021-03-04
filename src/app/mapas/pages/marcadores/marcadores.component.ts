import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarcadorColor {
  color: string;
  marker: mapboxgl.Marker;
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [`
    .mapa-container {
      height:100%;
      width:100%;
    }
    .list-group {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 99;
    }
    li {
      cursor: pointer;
    }
  `]

})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef 
  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [-99.04217275766999, 19.47755822576886]

  //arreglo marcadores
  marcadores: MarcadorColor[] = [];


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
    // new mapboxgl.Marker()
    //   .setLngLat(this.center)
    //   .addTo(this.mapa)



  }
  agregarMarcador(){
    // generar color hexadecimal de manera  aleatoria
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

    const nuevoMarcador = new mapboxgl.Marker({
                            draggable:true,
                            color: color
                          })
                            .setLngLat( this.center )
                            .addTo( this.mapa );

    this.marcadores.push( {
      color:color,
      marker: nuevoMarcador
    } );
  }

  irMarcador(marker: mapboxgl.Marker){
    this.mapa.flyTo({
      center: marker.getLngLat()
    })
  }

}
