import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  constructor(private httpService: CrudServiceService) { }
  postData :  string;

  ngOnInit() {
  }
  
  cadastro(form){

    console.log(form.value)

    this.httpService.cadastro(form.value.email, form.value.username, form.value.senha)
    .subscribe(
       data => {this.postData = JSON.stringify(data)},
       error => alert(error),
       () => console.log("acesso a webapi post ok...")
    );
  }



}
