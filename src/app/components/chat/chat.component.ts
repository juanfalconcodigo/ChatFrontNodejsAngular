import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit,OnDestroy {
  mensajes:any[]=[];
  elemento:HTMLElement;
  texto:string="";
  menssageSubscription:Subscription;
  constructor(private _chatService:ChatService) { }

  ngOnInit():void {
    this.elemento=document.getElementById('id-chat');
    this.menssageSubscription=this._chatService.getMessages().subscribe((data:any)=>{
      this.mensajes.push(data);
      setTimeout(()=>{
        this.elemento.scrollTop=this.elemento.scrollHeight;
      },100);
      
      
      console.log(data);
    });  
  }
  ngOnDestroy():void{
    this.menssageSubscription.unsubscribe();
  }

  enviar(){
    if(this.texto.trim().length===0){
      return;
    }
    this._chatService.sendMessage(this.texto);
    this.texto="";
  }

}
