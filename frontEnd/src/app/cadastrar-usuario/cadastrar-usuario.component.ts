import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';
import {Router, Routes, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  constructor(private httpService: CrudServiceService, private router: Router, private route: ActivatedRoute) { }
  postData :  string;
  erroCadastro = false
  mensagemError: String = ""

  ngOnInit() {
  }
  
  cadastro(form){

    this.httpService.cadastrarUsuario(form.value.email, form.value.login, form.value.senha)
    .subscribe(
       data => {
        this.postData = data["_body"]
        if(this.postData=="ok"){
          this.router.navigate(['/'], { relativeTo: this.route })
        } else if (this.postData=="email"){
          this.erroCadastro = true
          this.mensagemError = "email já cadastrado!"
        } else {
          this.erroCadastro = true
          this.mensagemError = "login já existe!"
        }
      }
    );
  }



}
