import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  @Input() datos: any = '';
  @Input() 'data-aos-delay': any = '';
  @Input() d!: any;
  constructor() {}

  ngOnInit(): void {}
}
