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


@NgModule({
  declarations: [
    AppComponent,
    EditarTemplateComponent,
    CadastrarUsuarioComponent,
    LoginComponent
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
