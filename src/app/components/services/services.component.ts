import { Component, OnInit, Input } from '@angular/core'
import { ObtenerdatosService } from 'src/app/services/obtenerdatos.service'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  datos: any
  @Input() 'data-aos-delay': any = ''
  @Input() d!: any
  constructor(private datosPortfolio: ObtenerdatosService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      this.datos = data[0]
    })
  }
}
