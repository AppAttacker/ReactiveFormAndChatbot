import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserRegisterComponent } from './register/user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './service/login/auth.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { DraggableDirective } from './directive/chatbot/draggable.directive';
import { SpeechRecognizerService } from './service/chatbot/speech-recognizer.service';
import { SpeechSynthesizerService } from './service/chatbot/speech-synthesizer.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    UserRegisterComponent,
    NavbarComponent,
    ChatbotComponent,
    DraggableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthGuard,
    SpeechRecognizerService,
    SpeechSynthesizerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
