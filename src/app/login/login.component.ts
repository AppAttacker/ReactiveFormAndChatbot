import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../service/login/login.service';
import { MessageService } from '../service/message/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private messageService: MessageService) { }

  ngOnInit() {
  }

  @Output()
  passData = new EventEmitter<boolean>();

  emitData(){
    this.passData.emit(true);
  }

  doLogin(){
    // alert("login button clicked");
    this.loginService.setToken("logged");
    this.messageService.sendMessage('logged');
    this.emitData();
  }

}
