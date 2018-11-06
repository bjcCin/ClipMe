import {Router, Routes} from '@angular/router'
import { EditarTemplateComponent } from 'src/app/editar-template/editar-template.component'
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CriarClippingComponent } from './criar-clipping/criar-clipping.component'

export const ROUTES : Routes = [
    {path: '', component: LoginComponent},
    {path: 'editartemplate', component: EditarTemplateComponent},
    {path: 'cadastro', component: CadastrarUsuarioComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'criarClipping', component: CriarClippingComponent}
]