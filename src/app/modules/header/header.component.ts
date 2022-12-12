import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  content = {
    headerLogo: 'assets/header/blizzard-logo.png',
    menu: 'assets/header/menu.svg'
  }

  constructor() { }

  ngOnInit() {
  }

}
