import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import {Headers} from '@angular/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


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

  listarUsuarios(){
      return this._http.get("/users")
      .map(result => result);
  }

  apagarUsuario(id){
    return this._http.delete(`/users/${id}`).map(result => result);
  }

  editarUsuario(id, email: String, login: String, password: String){
    var json = JSON.stringify({id:id, email: email, login: login, password: password});
    return this._http.put("/users", json).map(result => result);
  }

}
