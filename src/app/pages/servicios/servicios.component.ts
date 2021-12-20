import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  tittle='Servicios';
  serviciosimg='assets/img/urban-931.png';

  constructor() { }

  ngOnInit(): void {
  }

}
