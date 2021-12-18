import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  Tittle:String = 'Noticias';
  pablita1:String='assets/img/pablita-finance.png';
  pablita2:String='assets/img/pablita-522.png';
  constructor() { }

  ngOnInit(): void {
  }

}
