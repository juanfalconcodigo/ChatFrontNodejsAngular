import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { WebsocketService } from '../services/websocket.service';



@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {

  constructor(private _websocketService:WebsocketService,private router:Router) { }
  canActivate(){
    if(this._websocketService.getUsuario()){
      return true;
    }else{
       this.router.navigateByUrl('/login');
      return false;
    }

  }


}
