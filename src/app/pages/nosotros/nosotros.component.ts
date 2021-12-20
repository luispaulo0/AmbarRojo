import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  tittle='Sobre Nosotros';
  imagen='assets/img/urban-856.png';

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
