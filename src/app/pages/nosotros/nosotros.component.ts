import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  tittle='Sobre Nosotros';
  imagen='assets/img/marginalia-763.png';

  constructor() { }

  ngOnInit(): void {
  }

}
