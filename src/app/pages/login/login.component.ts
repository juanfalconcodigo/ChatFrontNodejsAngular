import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  nombre:string='';
  constructor(private _websocketService:WebsocketService,private router:Router) { }

  ngOnInit() {
  }
  ingresar(){
    this._websocketService.loginWS(this.nombre).then(()=>{
      this.router.navigateByUrl('/mensajes');
    });
  }

}
