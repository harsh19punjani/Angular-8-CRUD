import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// imported service from shared
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { IfStmt } from '@angular/compiler';
declare let M: any;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
    this.getEmployeeList();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmplyoee = {
        _id: '',
        name: '',
        position: '',
        office: '',
        salary: null

      };
    }
  }

  onsbmit(form: NgForm) {
    if (form.value._id == null) {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getEmployeeList();
        M.toast({ html: 'Employee Details added successfully', classes: 'rounded' });
      });
    } else {
      this.employeeService.updateEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getEmployeeList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  getEmployeeList() {
    this.employeeService.getEmployee().subscribe((res) => {
      this.employeeService.employees = res as Employee[];
    });
  }
  onEdit(emp: Employee) {
    this.employeeService.selectedEmplyoee = emp;
  }
  delete(_id, form: NgForm) {
    if (confirm('Are your sure to delete this record?') === true) {
      this.employeeService.deleteEmplyoee(_id).subscribe((res) => {
        this.resetForm(form);
        this.getEmployeeList();
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });

    }

  }
}
