import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
 
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];

  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.service.getEmployees2().subscribe((response: any) =>{
      this.employees = response.data;
    });
  }
}
