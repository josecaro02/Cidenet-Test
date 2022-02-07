import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatDialogModule} from '@angular/material/dialog'; 
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { EmployeesComponent, DialogInfoEmployee, FormPostEmployee } from './employees/employees.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    DialogInfoEmployee,
    FormPostEmployee,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
