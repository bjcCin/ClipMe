import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';


@Component({
  selector: 'app-editar-template',
  templateUrl: './editar-template.component.html',
  styleUrls: ['./editar-template.component.css']
})
export class EditarTemplateComponent implements OnInit {

  constructor(private httpService : CrudServiceService) { }
  
  templates: any
  editar = false
  templateSelecionadoId: Number
  templateSelecionadoName: String
  templateSelecionadoTitleList = []

  templateTeste = []

  ngOnInit() {
    this.httpService.listarTemplates().subscribe(res=>{
      this.templates = res.json()
      this.templates = Array.of(this.templates)[0]
    })
  }

  editarTemplate(template){
    this.templateSelecionadoId = template.id
    this.templateSelecionadoName = template.name
    this.templateSelecionadoTitleList = template.titleList.slice(0).reverse();
    this.editar = true
  }

  onClickSalvar(form){
    var values = Object.values(form.value)
    var nome = values[values.length-1]
    var lists = values.slice(0,values.length-1)
    console.log("nome", nome)
    console.log("lists", lists)

    this.httpService.editarTemplate(this.templateSelecionadoId, nome, lists).subscribe(
      res => {
        this.editar = false
        this.templateSelecionadoTitleList = []
        this.ngOnInit()
      }
    )
    this.editar = false;
  }



}
