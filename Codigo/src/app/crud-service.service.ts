import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import {Headers} from '@angular/http'
import 'rxjs/add/operator/map';


@Injectable()
export class CrudServiceService {

  constructor(private _http : Http) {   }

  postJSON(login: String, senha: String){
    var json = JSON.stringify({login: login, senha: senha});
    var params = 'json=' + json;
    var cabe = new Headers();
    console.log(params)
    cabe.append('Content-Type', 'application/json');
    return this._http.post('http://validate.jsontest.com', 
    json).map(res=> res.json());


  }

  
}
