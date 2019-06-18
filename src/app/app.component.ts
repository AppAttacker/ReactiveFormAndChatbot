import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login/login.service';
import { MessageService } from './service/message/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestApp';
  isLoginSuccess: boolean = false;
  message: any;
  subscription: Subscription;

  constructor ( private loginService: LoginService, private messageService: MessageService ){
    // this.isLoginSuccess = this.loginService.isLogged();
    this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; this.isLoginSuccess = (message == "logged");});
   }
   ngOnInit(){
    this.isLoginSuccess = this.loginService.isLogged();
   }

  getChildData(e){
    console.log(e);
    this.isLoginSuccess = e;
  }

}
