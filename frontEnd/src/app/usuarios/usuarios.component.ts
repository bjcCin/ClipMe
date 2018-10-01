import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private httpService : CrudServiceService) { }

 //characteres: Observable<any[]>
  usuarios: any

  ngOnInit() {

    this.httpService.listarUsuarios().subscribe(res=>{
      console.log(res)
    })
  }

}
