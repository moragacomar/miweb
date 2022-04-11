import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Input() datos: any = '';
  Math = Math;
  numero: number = 0;

  constructor() {}
  ngOnInit(): void {
    this.numero = Math.floor(Math.random() * this.datos.frases?.length);
  }
}
