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
    cabe.append('Content-Type', 'application/json');
    return this._http.post('/login', 
    json, {
      headers: cabe
    }).map(res=> res.json());

  }

  cadastrarUsuario(email: String, login: String, password: String){
    var json = JSON.stringify({email: email, login: login, password: password});
    var cabe = new Headers();
    cabe.append('Content-Type', 'application/json');
    return this._http.post('/users', 
    json, {
      headers: cabe
    }).map(res=>  res);
  
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

cadastrarClipping(clippingName: String, idUser, itemList: any){

  var json = JSON.stringify({clippingName: clippingName, idUser: idUser,itemList: itemList});
  var cabe = new Headers();
  cabe.append('Content-Type', 'application/json');
  return this._http.post('/clipping', 
  json, {
    headers: cabe
  }).map(res=> res.json());

}

  listarUsuarios(){
      return this._http.get("/users")
      .map(result => result)
  }

  listarUsuarioPorId(id){
    return this._http.get(`/users/${id}`)
    .map(result => result)
  }

  listarTemplates(){
    return this._http.get("/templates")
    .map(result => result)
}

  listarClippings(){
    return this._http.get("/clipping")
    .map(result => result)
  }

  listarClippingsPorId(id){
    return this._http.get(`/clipping/${id}`)
    .map(result => result)
  }

  apagarUsuario(id){
    return this._http.delete(`/users/${id}`).map(result => result);
  }

  apagarClipping(id){
    return this._http.delete(`/clipping/${id}`).map(result => result);
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
    console.log(json)
    var cabe = new Headers();

    cabe.append('Content-Type', 'application/json');
    return this._http.put(`/templates/${id}`, json,{
      headers: cabe
    }).map(result => result);
  }

}
