import { Component, OnInit, ElementRef, HostListener, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  today= true;


  change(){

    this.today=!this.today;

     }

  constructor() { }

  ngOnInit(): void {
  }

}
