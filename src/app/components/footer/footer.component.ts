import { Component, OnInit, Input } from '@angular/core'
import { ObtenerdatosService } from 'src/app/services/obtenerdatos.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  datos: any
  Math = Math
  numero: number = 0

  constructor(private datosPortfolio: ObtenerdatosService) {}
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      this.datos = data[0]
      this.numero = Math.floor(Math.random() * this.datos.frases?.length)
    })
  }
}
