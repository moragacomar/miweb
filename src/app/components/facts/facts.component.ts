import { Component, OnInit, Input } from '@angular/core';
import PureCounter from '@srexi/purecounterjs';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css'],
})
export class FactsComponent implements OnInit {
  @Input() datos: any = '';
  constructor() {}
  ngOnInit(): void {
    new PureCounter();
  }
}
