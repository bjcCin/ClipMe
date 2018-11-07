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
  clippings = []
  templateSelecionado
  userSelecionado
  editar: Boolean = false
  templateSelecionadoTitleList
  clippingTitulo
  isVisualizar = false
  clippingVisualizar
  usuarioVisualizar



  ngOnInit() {
    this.httpService.listarTemplates().subscribe(res=>{
      this.templates = res.json()
      this.templates = Array.of(this.templates)[0]

    })

    this.httpService.listarUsuarios().subscribe(res=>{
      this.usuarios = res.json();
      this.usuarios = Array.of(this.usuarios)[0]
    })

    this.httpService.listarClippings().subscribe(res=>{
      this.clippings = res.json();
      this.clippings = Array.of(this.clippings)[0];
      console.log("clippings", this.clippings)
    })

  }

  deletarClipping(id){
    this.httpService.apagarClipping(id).subscribe(
      res => {
        this.ngOnInit()
      }
    )

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

  vizualizar(id){
    this.httpService.listarClippingsPorId(id).subscribe(
      res => {
        this.clippingVisualizar = res.json()
        this.clippingVisualizar = Array.of(this.clippingVisualizar)[0];
        this.httpService.listarUsuarioPorId(this.clippingVisualizar.idUser).subscribe(
          res => {
            this.usuarioVisualizar = res.json()
            this.usuarioVisualizar = Array.of(this.usuarioVisualizar)[0];
            this.isVisualizar = true
          }
        )
        
      }
    )

  }

  criarClipping(u){
    console.log("titulo", this.templateSelecionadoTitleList)
    console.log("descricao", u.value)
    console.log("titulo", this.clippingTitulo)

    var itemList = []

    for(let i=0; i < this.templateSelecionadoTitleList.length;i++){

      var item = {
        "title": this.templateSelecionadoTitleList[i],
        "description": u.value[i]
      }

      itemList.push(item)

    }

    this.httpService.cadastrarClipping(this.clippingTitulo,this.userSelecionado,itemList).subscribe(
      res => {
        this.ngOnInit()
        this.editar = false
      }
    )


  }

}
