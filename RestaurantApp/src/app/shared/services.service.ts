import { Injectable } from '@angular/core';
import { BillDetailDetail } from './bill-detail-detail.model';
import { BillDetail } from './bill-detail.model';
import { CustomerDetail } from './customer-detail.model';
import { SupervisorDetail } from './supervisor-detail.model';
import { TableDetail } from './table-detail.model';
import { WaiterDetail } from './waiter-detail.model';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  formDataCustomer : CustomerDetail = new CustomerDetail();
  formDataWaiter : WaiterDetail = new WaiterDetail();
  fomrDataTable : TableDetail = new TableDetail();
  formDataBill : BillDetail = new BillDetail();
  formDataBillDetail : BillDetailDetail = new BillDetailDetail();
  formDataSupervisor : SupervisorDetail = new SupervisorDetail();
}
