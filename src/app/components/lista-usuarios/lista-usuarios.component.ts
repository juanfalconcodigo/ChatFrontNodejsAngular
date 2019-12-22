import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {
  usuariosConectadosObservable:Observable<any>;
  constructor(private _chatService:ChatService) { }

  ngOnInit() {
    this.usuariosConectadosObservable=this._chatService.getUsuariosActivos();
    this._chatService.getEmitirUsuariosActivos();

  }

}

