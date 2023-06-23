import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.css'],
})
export class SolicitacaoComponent {
  nome!:any
  matricula!:any
  lab!:any
  data!:any
  
  constructor() {}

  submitForm() {
      var formData = {
        nome: this.nome,
        matricula: this.matricula,
        lab: this.lab,
        data: this.data,
      };
    console.table(JSON.stringify(formData));
  }
}