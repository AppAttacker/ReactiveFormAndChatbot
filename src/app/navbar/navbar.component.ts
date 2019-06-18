import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../service/navbar/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(public navbarService: NavbarService) { }

  ngOnInit() {
    // this.navbarService.show();
  }

}
