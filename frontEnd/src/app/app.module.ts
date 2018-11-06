import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import {ROUTES} from './app.routes';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { EditarTemplateComponent } from './editar-template/editar-template.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CriarClippingComponent } from './criar-clipping/criar-clipping.component';


@NgModule({
  declarations: [
    AppComponent,
    EditarTemplateComponent,
    CadastrarUsuarioComponent,
    LoginComponent,
    MenuComponent,
    UsuariosComponent,
    CriarClippingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
