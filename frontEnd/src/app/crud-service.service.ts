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

  cadastrarUsuario(email: String, login: String, password: String){
    
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

  cadastrarTemplate(name: String, titleList: any){
  var json = JSON.stringify({name: name, titleList: titleList});
  
  var cabe = new Headers();
  cabe.append('Content-Type', 'application/json');
  return this._http.post('/templates', 
  json, {
    headers: cabe
  }).map(res=> res.json());

}

  listarUsuarios(){
      return this._http.get("/users")
      .map(result => result);
  }

  listarTemplates(){
    return this._http.get("/template")
    .map(result => result);
}

  apagarUsuario(id){
    return this._http.delete(`/users/${id}`).map(result => result);
  }

  editarUsuario(id, email: String, login: String, password: String){
    var json = JSON.stringify({email: email, login: login, password: password});
    var cabe = new Headers();
    cabe.append('Content-Type', 'application/json');
    return this._http.put(`/users/${id}`, json,{
      headers: cabe
    }).map(result => result);
  }

  editarTemplate(id, name, titleList: any){
    var json = JSON.stringify({name: name, titleList: titleList});
    var cabe = new Headers();
    console.log(json)
    console.log("id",id)
    cabe.append('Content-Type', 'application/json');
    return this._http.put(`/template/${id}`, json,{
      headers: cabe
    }).map(result => result);
  }

}
