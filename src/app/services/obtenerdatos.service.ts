import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ObtenerdatosService {
  constructor(private http: HttpClient) {}

  obtenerDatos(): Observable<any> {
    return this.http.get('https://jmoraga-porfolio-default-rtdb.firebaseio.com/datos.json')
  }

  guardarDatos(datos: Array<any>) {
    const newLocal = 'https://jmoraga-porfolio-default-rtdb.firebaseio.com/datos.json'
    this.http.put(newLocal, datos).subscribe((data) => this.obtenerDatos())
  }
}
