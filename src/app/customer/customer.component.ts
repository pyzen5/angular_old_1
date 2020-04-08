import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../service/data-access.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers = [];
  constructor(private dataAccess: DataAccessService) { }

  ngOnInit(): void {
    this.dataAccess.getCustomers().subscribe((data: any[]) => {
      this.customers = data;
    }, (error) => {

    });
  }

}
