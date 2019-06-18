import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login/login.service';
import { Router } from '@angular/router';
import { MessageService } from '../service/message/message.service';
import { NavbarService } from '../service/navbar/navbar.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private navbarService: NavbarService ,private loginService: LoginService, private router: Router, private messageService: MessageService) { }

  ngOnInit() { }

  doLogout(){
    alert("logged out...");
    this.loginService.setToken("logout");
    this.navbarService.hide();
    // this.router.navigate(["/login"]);
    this.messageService.sendMessage('logout');
  }
  displayChatbot(){
    this.navbarService.toggle();
  }
}
