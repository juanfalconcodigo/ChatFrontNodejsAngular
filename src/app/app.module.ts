import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//environment
import { environment } from '../environments/environment'; 
//configuración del socketio
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: environment.wsUrl, options: {} };
//componentes
import { FooterComponent } from './components/footer/footer.component';
import { ChatComponent } from './components/chat/chat.component';
//formulario
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ChatComponent,
    LoginComponent,
    MensajesComponent,
    ListaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
