import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MessageDetails } from 'src/app/model/chatbot/message-details';

@Injectable({
  providedIn: 'root'
})
export class ChatbotmessageService {

  private subject = new Subject<MessageDetails>();
  
    sendMessage(message: string) {
      console.log(message);
      var msgDetails: MessageDetails = new MessageDetails();
      msgDetails.message = message;
      msgDetails.userType = "user";
      this.subject.next(msgDetails);
    }

    clearMessages() {
        this.subject.next();
    }

    getMessage(): Observable<MessageDetails> {
      return this.subject.asObservable();
    }
}
