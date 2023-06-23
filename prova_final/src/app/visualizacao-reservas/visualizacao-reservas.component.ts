import { Component } from '@angular/core';
import { ListService } from '../service/list.service';
@Component({
  selector: 'app-visualizacao-reservas',
  templateUrl: './visualizacao-reservas.component.html',
  styleUrls: ['./visualizacao-reservas.component.css'],
})
export class VisualizacaoReservasComponent {
formData: any;
displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
dataSource!: any;

constructor( private listService: ListService){
  this.listService.getReservas().subscribe(reservas => this.dataSource = reservas);
 }
}
