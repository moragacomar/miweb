import { Component } from '@angular/core';
import datos from 'src/assets/json/app.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'miweb';
  Datos: any = datos;
}
