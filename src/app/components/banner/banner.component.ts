import { Component, OnInit, Input } from '@angular/core';
import Typed from 'src/assets/vendor/typed.js/typed.min.js';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  @Input() datos: any = '';
  constructor() {}

  ngOnInit(): void {
    // Can also be included with a regular script tag
    const data = this.datos.profesion;
    new Typed('.typed', {
      strings: data,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }
}
