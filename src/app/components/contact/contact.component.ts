import { Component, OnInit } from '@angular/core'
import { ObtenerdatosService } from 'src/app/services/obtenerdatos.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  datos: any
  constructor(private datosPortfolio: ObtenerdatosService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      this.datos = data[0]
    })
  }
}
