import { Component, OnInit } from '@angular/core'
import Typed from 'src/assets/vendor/typed.js/typed.min.js'
import { ObtenerdatosService } from 'src/app/services/obtenerdatos.service'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  datos: any
  constructor(private datosPortfolio: ObtenerdatosService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      this.datos = data[0]
      new Typed('.typed', {
        strings: this.datos.profesion,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      })
    })
  }
}
