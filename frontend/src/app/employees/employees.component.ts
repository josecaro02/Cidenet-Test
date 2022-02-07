import { Component, Inject, OnInit, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { PageEvent } from '@angular/material/paginator';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee} from './employee';
import { globalVariables } from './globalVariables';
import { map, catchError } from 'rxjs/operators';
import { FormControl } from '@angular/forms';


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
  employees: any;
  employees_num_pages: any;
  num_employees: any;


  constructor(private http: HttpClient,
    public dialog: MatDialog) { }


  ngOnInit(): void {
    this.getEmployeesData();
  }

  getEmployeesData(page = 1) {
    this.http.get("http://127.0.0.1:8000/api/v1/employee/?page=" + page.toString(), this.httpOptions).subscribe((data: any) => {
      console.log(data);
      this.employees = data.results;
      this.employees_num_pages = Math.ceil(data.count / 10);
      this.num_employees = data.count;
    })
  };

  onPaginate(pageEvent: PageEvent) {
    this.getEmployeesData(pageEvent.pageIndex + 1)
  }

  infoEmployee(event: DialogDataInfoEmployee) {
    console.log(event);
    this.dialog.open(DialogInfoEmployee, {
      data: event
    });
  }

  formPost(){
    this.dialog.open(FormPostEmployee, {});
  }
}

@Component({
  selector: 'info-employee',
  templateUrl: 'infoEmployee.html',
})
export class DialogInfoEmployee {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogDataInfoEmployee) { }



  type_id_value: string = "";
  area_value: string = "";
  estado_value: string = "";
  pais : string = "";
  ngOnInit(): void {
    this.type_id_value = globalVariables.type_id[this.data.id_type];
    this.area_value = globalVariables.area[this.data.area];
    this.estado_value = globalVariables.estado[this.data.state.toString()]
    this.pais = globalVariables.pais[this.data.country];
  }
}

@Component({
  selector: 'form-post-employee',
  templateUrl: 'form-post-employee.html',
})
export class FormPostEmployee{
  constructor(private http: HttpClient,
    public dialog: MatDialog){ }
  
  headers = new HttpHeaders();
  httpOptions = {
    headers: this.headers.set('Content-Type', 'application/json'),
  };
  model = new Employee("", "", "", "", "", "", "", true, "");
  type_id = globalVariables.type_id;
  area = globalVariables.area;
  estado = globalVariables.estado;
  pais = globalVariables.pais;

  fname_control = new FormControl('');
  sname_control = new FormControl('');
  lname_control = new FormControl('');
  slname_control = new FormControl('');
  num_id_control = new FormControl('');

  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value;
  }

  
  newHero() {
    
  }

  onSubmit(){
    console.log('Enviado el formulario');
    console.log(this.model);
    this.http.post<any>('http://127.0.0.1:8000/api/v1/employeePost/', this.model, { observe: 'response' })
    .subscribe({
      next : data => {
        console.log(data);
        if (data.ok){
          alert('Empleado agregado satisfactoriamente');
          this.dialog.closeAll();
        }
      },
      error: error => {
        let first_error = Object.keys(error.error)[0]
        alert(error.error[first_error][0]);
      }
    })
  }

}