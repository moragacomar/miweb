import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Input() datos: any = '';
  numero: number = Math.floor(Math.random() * this.datos.frases?.length);
  Math = Math;
  constructor() {}
  ngOnInit(): void {}
}
