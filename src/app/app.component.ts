import { Component,OnInit } from '@angular/core';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AppSocketBasico - Falcón';
  constructor(private _chatService:ChatService){



  }
  ngOnInit(): void {
    this._chatService.getMessagesPrivate().subscribe((msg)=>{
      console.log(msg);
    });
    //this._chatService.sendMessage('Super gaaa');  
  }

}
