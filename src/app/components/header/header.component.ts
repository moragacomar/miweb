import { Component, OnInit, Renderer2 } from '@angular/core'
import { ObtenerdatosService } from 'src/app/services/obtenerdatos.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  datos: any
  abierto: boolean = true

  constructor(private renderer: Renderer2, private datosPortfolio: ObtenerdatosService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      this.datos = data[0]
    })
  }
  actualizarDatos() {
    this.datos.nombre = 'Juan'
    const datos1: any[] = []
    datos1.push(this.datos)
    this.datosPortfolio.guardarDatos(datos1)
  }
  abrir(event: Event) {
    if (this.abierto) {
      this.renderer.addClass(document.body, 'mobile-nav-active')
      this.renderer.removeClass(event.target, 'bi-list')
      this.renderer.addClass(event.target, 'bi-x')
      this.renderer.setStyle(document.querySelector('.navbar'), 'display', 'block')
    } else {
      this.renderer.removeClass(document.body, 'mobile-nav-active')
      this.renderer.addClass(event.target, 'bi-list')
      this.renderer.removeClass(event.target, 'bi-x')
      this.renderer.setStyle(document.querySelector('.navbar'), 'display', 'flex')
    }
    this.abierto = !this.abierto
    this.actualizarDatos()
  }
}
