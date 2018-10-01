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
    this.editar = true
    this.usuarioEdicao = user
  }

  onClickSalvar(form){
    console.log(this.usuarioEdicao.id,form.value.email, form.value.login, form.value.password)
    this.httpService.editarUsuario(this.usuarioEdicao.id,form.value.email, form.value.login, form.value.password)
    .subscribe(res => {
      this.ngOnInit()
    })
  }

}
