import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tittle = 'Crear y desarrollar experiencias es la meta';
  bermuda = 'assets/img/bermuda-web-design.png';
  grup = 'assets/img/grupo.png';


  constructor() { }

  ngOnInit(): void {

  }

}
