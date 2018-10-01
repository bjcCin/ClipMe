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
      
      console.log(this.usuarios)
      
      //this.usuarios = Array.of(res["_body"])


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
  }

  onClickSalvar(form){
    console.log(form)
    this.httpService.editarUsuario(this.usuarioEdicao.id,form.value.email, form.value.login, form.value.password)
    .subscribe(res => {
      this.ngOnInit()
    })
  }

  onClickCadastrar(form){
    this.editar = false
    this.cadastrar = true
    console.log(form)
    this.httpService.cadastro(form.value.email, form.value.login, form.value.password)
    .subscribe(res => {
      this.ngOnInit()
    })
  }

}
