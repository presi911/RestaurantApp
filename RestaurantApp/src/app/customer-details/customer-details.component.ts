import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../shared/services.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(public service:ServicesService) { }

  ngOnInit(): void {
  }

}
