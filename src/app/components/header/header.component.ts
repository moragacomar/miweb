import { Component, OnInit, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() datos: any = '';

  constructor(private renderer: Renderer2) {}

  abierto: boolean = true;

  abrir(event: Event) {
    if (this.abierto) {
      this.renderer.addClass(document.body, 'mobile-nav-active');
      this.renderer.removeClass(event.target, 'bi-list');
      this.renderer.addClass(event.target, 'bi-x');
      this.renderer.setStyle(
        document.querySelector('.navbar'),
        'display',
        'block'
      );
    } else {
      this.renderer.removeClass(document.body, 'mobile-nav-active');
      this.renderer.addClass(event.target, 'bi-list');
      this.renderer.removeClass(event.target, 'bi-x');
      this.renderer.setStyle(
        document.querySelector('.navbar'),
        'display',
        'flex'
      );
    }
    this.abierto = !this.abierto;
  }
  ngOnInit(): void {}
}
