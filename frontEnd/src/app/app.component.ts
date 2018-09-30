import { CrudServiceService } from './crud-service.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  providers : [CrudServiceService] 
})
export class AppComponent {
   postData :  string;
   login: string;
   senha: string;
   
   onClickLogin(form){
    this.login = form.value.senha
    console.log(form)
    this.onTestPost(form.value.login,form.value.senha)
   }

   constructor(private httpService : CrudServiceService){}
    onTestPost(login: String, senha: String) {
       this.httpService.postJSON(login, senha)
       .subscribe(
          data => {this.postData = JSON.stringify(data)
            console.log("TESTE: ",data)
          },
          error => alert(error),
          () => console.log("acesso a webapi post ok...")
       );
   }
 }