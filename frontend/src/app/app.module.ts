import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatDialogModule} from '@angular/material/dialog'; 
import { MatButtonModule} from '@angular/material/button'; 
import { CommonModule} from '@angular/common'


import { EmployeesComponent, DialogInfoEmployee } from './employees/employees.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    DialogInfoEmployee
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    CommonModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
