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
  templateSelecionado: any
  templateSelecionadoName: String
  templateSelecionadoTitleList = []

  ngOnInit() {

    this.httpService.listarTemplates().subscribe(res=>{
      this.templates = res.json();
      this.templates = Array.of(this.templates)[0]

      this.templateSelecionado = this.templates[0]
      
      console.log(this.templates)

    })
  }

  editarTemplate(template){
    this.editar = true
    this.templateSelecionado = template
    this.templateSelecionadoName = template.name
    this.templateSelecionadoTitleList = template.titleList
    //console.log(this.templateSelecionado)

  }

  onClickSalvar(form){
    //console.log(form)
    var tamanho = Object.values(form.value)

    //console.log("tamanho ", tamanho[0])
    var templateList = []
    for(let i=1; i<tamanho.length; i++){
      templateList.push(tamanho[i])
    }
   
    //console.log(this.templateSelecionado.id, this.templateSelecionadoName, templateList)
    this.httpService.editarTemplate(this.templateSelecionado.id, this.templateSelecionadoName, templateList)
    this.ngOnInit()
  }

}
