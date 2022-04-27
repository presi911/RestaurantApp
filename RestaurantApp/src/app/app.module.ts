import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { TableDetailsComponent } from './table-details/table-details.component';
import { WaiterDetailsComponent } from './waiter-details/waiter-details.component';
import { BillDetailsComponent } from './bill-details/bill-details.component';
import { BillDetailDetailsComponent } from './bill-detail-details/bill-detail-details.component';
import { SupervisorDetailsComponent } from './supervisor-details/supervisor-details.component';
import { EmployeeDetailsFormComponent } from './EmployeeDetails/employee-details-form/employee-details-form.component';
import { CustomerDetailsFormComponent } from './Customer-Details/customer-details-form/customer-details-form.component';
import { BillDetailsFormComponent } from './Bill-Details/bill-details-form/bill-details-form.component';
import { BillDetailDetailsFormComponent } from './Bill-Detail-Details/bill-detail-details-form/bill-detail-details-form.component';
import { SupervisorDetailsFormComponent } from './Supervisor-Details/supervisor-details-form/supervisor-details-form.component';
import { TableDetailsFormsComponent } from './Table-Details/table-details-forms/table-details-forms.component';
import { WaiterDetailsFormComponent } from './Waiter-Details/waiter-details-form/waiter-details-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    CustomerDetailsComponent,
    TableDetailsComponent,
    WaiterDetailsComponent,
    BillDetailsComponent,
    BillDetailDetailsComponent,
    SupervisorDetailsComponent,
    EmployeeDetailsFormComponent,
    CustomerDetailsFormComponent,
    BillDetailsFormComponent,
    BillDetailDetailsFormComponent,
    SupervisorDetailsFormComponent,
    TableDetailsFormsComponent,
    WaiterDetailsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
