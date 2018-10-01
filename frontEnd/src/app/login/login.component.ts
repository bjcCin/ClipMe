import { CrudServiceService } from '../crud-service.service';
import { Component, OnInit } from '@angular/core';
import {Router, Routes, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  postData :  string;
  login: string;
  senha: string;
  loginIncorreto = false

  constructor(private httpService : CrudServiceService, private router: Router, private route: ActivatedRoute){}

  ngOnInit() {
  }

  onClickLogin(form){
    this.onTestPost(form.value.login,form.value.senha)
   }

  onTestPost(login: String, senha: String) {
    this.httpService.login(login, senha)
    .subscribe(
       data => {this.postData = JSON.stringify(data)
         if(data==false){
           this.loginIncorreto = true
         } else {
          this.router.navigate(['/editartemplate'], { relativeTo: this.route });
         }
       },
       error => alert(error),
       () => console.log("acesso a webapi post ok...")
    );
}

}
