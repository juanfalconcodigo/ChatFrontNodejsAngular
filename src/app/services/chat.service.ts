import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private _websocketService:WebsocketService) { }
  sendMessage(mensaje:string){
    const payload:Object={
      de:this._websocketService.getUsuario().nombre,
      mensaje
    }
    console.log("Mensaje enviado:",payload)
    return this._websocketService.emit('mensaje',payload);
  }
  getMessages(){
    return this._websocketService.listen('mensaje-nuevo');
  }
  getMessagesPrivate(){
    return this._websocketService.listen('mensaje-privado');
  }
  getUsuariosActivos(){
    return this._websocketService.listen('usuarios-activos');
  }
  getEmitirUsuariosActivos(){
    return this._websocketService.emit('obtener-usuarios');
  }

}
