import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Escala } from '../escala';
import { EscalaDataService } from '../escala-data.service';
import { EscalaService } from '../escala.service';

@Component({
  selector: 'app-escalas-tb',
  templateUrl: './escalas-tb.component.html',
  styleUrls: ['./escalas-tb.component.css']
})
export class EscalasTbComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Escala>;
  dataSource: MatTableDataSource<any>

  constructor(private escalaService: EscalaService, private escalaDataService: EscalaDataService) {
    
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nomes', 'dia'];

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.escalaService.getAll().subscribe(data => {
      // console.log('dados', data)
      this.dataSource = new MatTableDataSource(data); 
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    })

  }
}
