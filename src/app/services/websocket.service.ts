import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from '../classes/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  socketStatus:Boolean=false;
  usuario:Usuario=null;
  constructor(private socket:Socket,private router:Router) {
    this.checkStatus();
    this.cargarStorage();
   }

   checkStatus(){
     this.socket.on('connect',()=>{
       console.log("Conectado al servidor");
       this.socketStatus=true;
       this.cargarStorage();
     });
     this.socket.on('disconnect',()=>{
      console.log("Desconectado al servidor");
      this.socketStatus=false;
    });
   }
   emit(evento:string,payload?:any,callback?:Function){
     return this.socket.emit(evento,payload,callback);
   }
   listen(evento:string){
     return this.socket.fromEvent(evento);
   }

   loginWS(nombre:string){
     console.log("Configurando nombre",nombre);
     return new Promise((resolve,reject)=>{
      this.emit('configurar-usuario',{nombre},(resp)=>{
        console.log(resp);
        this.usuario=new Usuario(nombre);
        this.guardarStorage();     
        resolve();
      });
     });
   }

   cargarStorage(){
     if(localStorage.getItem('usuario')){
       this.usuario=JSON.parse(localStorage.getItem('usuario'));
       this.loginWS(this.usuario.nombre);
     }
   }
   guardarStorage(){
    localStorage.setItem('usuario',JSON.stringify(this.usuario));
   }
   getUsuario(){
     return this.usuario;
   }

   logoutWS(){
     this.usuario=null;
     localStorage.removeItem('usuario');
     const payload={
       nombre:'sin-nombre'
     }
     this.emit('configurar-usuario',payload,()=>{});
     this.router.navigateByUrl('/login'); 
   }
   

}
