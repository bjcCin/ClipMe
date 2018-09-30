import { CrudServiceService } from './crud-service.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  providers : [CrudServiceService] 
})
export class AppComponent {

   onClickLogin(){

   }

   constructor(){}

 }