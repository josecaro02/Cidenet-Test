import { Component, Inject, OnInit, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import {PageEvent} from '@angular/material/paginator';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogDataInfoEmployee {
  area: string;
  country: string;
  email: string;
  entry_date: string;
  id: number;
  first_name: string;
  id_number: string;
  id_type: string;
  last_name: string;
  other: string;
  second_last_name: string;
  state: boolean;

}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  headers = new HttpHeaders();
  httpOptions = {
    headers: this.headers.set('Content-Type', 'application/json'),
  };
  employees : any;
  employees_num_pages : any;
  num_employees : any;
  

  constructor(private http:HttpClient,
    public dialog: MatDialog) { }

  
  ngOnInit(): void {
    this.getEmployeesData();
  }

  getEmployeesData(page = 1){
    this.http.get("http://127.0.0.1:8000/api/v1/employee/?page=" + page.toString(), this.httpOptions).subscribe((data:any) =>{
      console.log(data);
      this.employees = data.results;
      this.employees_num_pages = Math.ceil(data.count / 10);
      this.num_employees = data.count;
    })
  };

  onPaginate(pageEvent: PageEvent) {
    this.getEmployeesData(pageEvent.pageIndex + 1)
  }

  infoEmployee(event: DialogDataInfoEmployee){
    console.log(event);
    this.dialog.open(DialogInfoEmployee, {
      data : event
    });
  }
}

@Component({
  selector : 'info-employee',
  templateUrl : 'infoEmployee.html',
})
export class DialogInfoEmployee{
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogDataInfoEmployee) {}

  type_id :  any = {
    'cc': 'Cédula de ciudadania',
    'ce': 'Cédula de extranjeria',
    'pp': 'Pasaporte',
    'pe': 'Permiso especial'
  }

  area : any = {
    'adm': 'Administración',
    'fin': 'Financiera',
    'com': 'Comercial',
    'inf': 'Infraestructura',
    'ope': 'Operación',
    'tal': 'Talento humano',
    'ser': 'Servicios varios',
    'otr': 'Otros',
  }

  estado : any = {
    'true' : 'Activo',
    'false' : 'Inactivo'
  }

  type_id_value : string = "";
  area_value : string = "";
  estado_value : string = "";
  ngOnInit(): void {
    this.type_id_value = this.type_id[this.data.id_type];
    this.area_value = this.area[this.data.area];
    this.estado_value = this.estado[this.data.state.toString()]
  }
}
