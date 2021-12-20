import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  tittle="Contacto";
  pablita2="assets/img/pablita-cryptocurrency.png";
  taxi="assets/img/taxi-875.png";

  constructor() { }

  ngOnInit(): void {
  }

}
