import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployeesURL="http://dummy.restapiexample.com/api/v1/employees";

  constructor(private client: HttpClient) { }

  getEmployees(){
    return this.client.get(this.getEmployeesURL);
  }

  public getEmployees2(): Observable<Employee[]>{
    return this.client.get<Employee[]>(this.getEmployeesURL);
  }
}
