import { Component, OnInit } from '@angular/core'
import PureCounter from '@srexi/purecounterjs'
import { ObtenerdatosService } from 'src/app/services/obtenerdatos.service'

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css'],
})
export class FactsComponent implements OnInit {
  datos: any
  constructor(private datosPortfolio: ObtenerdatosService) {}
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      this.datos = data[0]
      new PureCounter()
    })
  }
}
