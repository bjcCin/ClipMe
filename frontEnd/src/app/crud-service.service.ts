import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import {Headers} from '@angular/http'
import 'rxjs/add/operator/map';


@Injectable()
export class CrudServiceService {

  constructor(private _http : Http) {   }

  login(login: String, senha: String){
    var json = JSON.stringify({login: login, password: senha});
    var params = 'json=' + json;
    var cabe = new Headers();
    console.log(params)
    cabe.append('Content-Type', 'application/json');
    return this._http.post('/login', 
    json, {
      headers: cabe
    }).map(res=> res.json());

  }

  cadastro(login: String, senha: String, email: String){
    var json = JSON.stringify({login: login, password: senha, email: String});
    var params = 'json=' + json;
    var cabe = new Headers();
    console.log(params)
    cabe.append('Content-Type', 'application/json');
    return this._http.post('/users', 
    json, {
      headers: cabe
    }).map(res=> res.json());

  
}

}
