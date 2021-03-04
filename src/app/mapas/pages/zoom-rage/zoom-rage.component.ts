import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
      width:400px;
    }
  `]
})
export class ZoomRageComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mapa') divMapa!: ElementRef //sirve para tomar un elemento y utilizarlo como una propiedad
  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [-99.04217275766999, 19.47755822576886]

  constructor() { }

  ngOnDestroy(): void {
    //REGLA DE ORO, SIEMPRE SE DEBEN DE DESTRUIR LOS LISTENER CUANDO SE SALE DEL COMPINENTE
    this.mapa.off('zoom', () => {});
    this.mapa.off('zoomend', () => {});
    this.mapa.off('move', () => {});
  }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: this.center,
      zoom: this.zoomLevel
    });
    
    this.mapa.on('zoom', (ev) => {//manera de hacer un Listener (Escuchar un evento)
      // console.log(ev);
      this.zoomLevel = this.mapa.getZoom();
    })
   
    this.mapa.on('zoomend', (ev) => {
      if (this.mapa.getZoom() > 18 ) {        
        this.mapa.zoomTo( 18 );
      }
    })

    this.mapa.on('move', (ev) => {     
        // this.mapa.getCenter
        const target = ev.target;
        const {lng, lat} = target.getCenter();
        this.center = [lng, lat]
    })

  }

  zoomOut(){
    this.mapa.zoomOut();    
    // this.zoomLevel = this.mapa.getZoom();  

  }

  zoomIn(){
    this.mapa.zoomIn();  
  }

  zoomCambio(valor: string){
    this.mapa.zoomTo( Number(valor) );
  }

}
