import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 


import {Employee} from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmplyoee: Employee;
  employees: Employee[];
  private baseURL = 'http://localhost:3000/employee';

  constructor(private http: HttpClient) { }

  postEmployee(emp: Employee) {
    return this.http.post(this.baseURL, emp);
  }

  getEmployee() {
    return this.http.get(this.baseURL);
  }

  updateEmployee(emp: Employee) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }
  deleteEmplyoee(_id) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
