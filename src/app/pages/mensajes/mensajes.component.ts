import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';


@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss']
})
export class MensajesComponent implements OnInit {
  nombreUsuario:string=null;
  constructor(private _websocketService:WebsocketService) { }

  ngOnInit() {
    this.nombreUsuario=this._websocketService.getUsuario().nombre;
  }

  logout(){
    console.log('Salir');
    this._websocketService.logoutWS();
  }

}
