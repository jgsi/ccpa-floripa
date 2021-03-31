import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Escala } from '../escala';
import { EscalaDataService } from '../escala-data.service';
import { EscalaService } from '../escala.service';
import { EscalasTbDataSource } from './escalas-tb-datasource';

@Component({
  selector: 'app-escalas-tb',
  templateUrl: './escalas-tb.component.html',
  styleUrls: ['./escalas-tb.component.css']
})
export class EscalasTbComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Escala>;
  dataSource: EscalasTbDataSource

  constructor(private escalaService: EscalaService, private escalaDataService: EscalaDataService) {
    
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nomes', 'dia' , 'departamento'];

  ngOnInit() {
    this.dataSource = new EscalasTbDataSource();
  }

  ngAfterViewInit() {}
    


}
