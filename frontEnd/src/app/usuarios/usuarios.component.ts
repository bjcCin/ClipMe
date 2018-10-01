import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private httpService : CrudServiceService) { }

 //characteres: Observable<any[]>
  usuarios: any
  editar = false
  usuarioEdicao: any
  usuarioEdicaoLogin: String
  usuarioEdicaoEmail: String
  usuarioEdicaoPassword: String
  cadastrar = false

  ngOnInit() {

    this.httpService.listarUsuarios().subscribe(res=>{
      this.usuarios = res.json();
      this.usuarios = Array.of(this.usuarios)[0];

    })
  }

  deletarUsuario(id){
    this.httpService.apagarUsuario(id).subscribe(res=>{
      this.ngOnInit()
    })
    
  }

  editarUsuario(user){
    this.cadastrar= false
    this.editar = true
    this.usuarioEdicao = user
    this.usuarioEdicaoLogin = user.login
    this.usuarioEdicaoEmail = user.email
    this.usuarioEdicaoPassword = user.password  
    console.log(user)
  }

  onClickSalvar(form){
    console.log(form.value)
    console.log(this.usuarioEdicao.id,this.usuarioEdicaoEmail, this.usuarioEdicaoLogin, this.usuarioEdicaoPassword)
    this.httpService.editarUsuario(this.usuarioEdicao.id,form.value.email, form.value.login, form.value.password)
    .subscribe(res => {
      this.ngOnInit()
    })
  }

  onClickCadastrar(){
    this.editar = false
    this.cadastrar = true
  }

  onClickSalvarCadastro(form){
    this.httpService.cadastrarUsuario(form.value.email, form.value.login, form.value.password)
    .subscribe(res => {
      this.ngOnInit()
    })
    this.cadastrar = false
  }

}
