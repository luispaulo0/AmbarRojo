import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() tittle: String ='';
  @Input() img1: String ='';
  @Input() img2: String ='';
  @Input() img3: String ='';
  @Input() img4: String ='';
  @Input() img5: String ='';



  constructor() { }

  ngOnInit(): void {


  }

}
