import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';


@Component({
  selector: 'app-criar-clipping',
  templateUrl: './criar-clipping.component.html',
  styleUrls: ['./criar-clipping.component.css']
})
export class CriarClippingComponent implements OnInit {

  constructor(private httpService : CrudServiceService) { }

  templates = []
  usuarios = []
  templateSelecionado
  userSelecionado
  editar: Boolean = false
  templateSelecionadoTitleList


  ngOnInit() {
    this.httpService.listarTemplates().subscribe(res=>{
      this.templates = res.json()
      this.templates = Array.of(this.templates)[0]

    })

    this.httpService.listarUsuarios().subscribe(res=>{
      this.usuarios = res.json();
      this.usuarios = Array.of(this.usuarios)[0]
    })
    
  }


  onClickTemplate(){
    console.log(this.templateSelecionado)

  }

  checkChange(){

    if(this.userSelecionado != null && this.templateSelecionado != null){

      for(let template of this.templates){
        if(template.id == this.templateSelecionado){
          this.templateSelecionadoTitleList = template.titleList.slice(0).reverse();
        }
      }


      this.editar = true;
    }

  }

  criarClipping(u){

    console.log("titulo", this.templateSelecionadoTitleList)
    console.log("descricao", u.value)

    var itemList = []


    for(let i=0; i < this.templateSelecionadoTitleList.length;i++){

      var item = {
        "title": this.templateSelecionadoTitleList[i],
        "description": u.value[i]
      }

      itemList.push(item)

    }


    this.httpService.cadastrarClipping(u.value.titulo,this.userSelecionado,itemList).subscribe(
      res => {
        this.ngOnInit()
        this.editar = false
      }
    )


  }

}
