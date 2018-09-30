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

  cadastro(email: String, login: String, password: String){
    
    var json = JSON.stringify({email: email, login: login, password: password});
    console.log("service", json)
    var params = 'json=' + json;
    var cabe = new Headers();
    cabe.append('Content-Type', 'application/json');
    return this._http.post('/users', 
    json, {
      headers: cabe
    }).map(res=> res.json());

  
}

}
