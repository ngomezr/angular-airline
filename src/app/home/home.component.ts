import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  deleteMessage: any;

  // Trigger will happen from here (Component TS File).
  // This is component file
  ngOnInit(): void {
  }

  user: Employee = new Employee();
  users: any;

  constructor(private employeeService: EmployeeService) { }

  readUser() {
    this.employeeService.getUserList()
      .subscribe(data => { this.users = data }, error => console.log(error));
      // user or data you need to write some logic to iterated and match with your credentials
    }

  deleteUser(employeeId: number) {
    this.employeeService.deleteUserList(employeeId)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.deleteMessage = true;
          this.employeeService.getUserList().subscribe(data => {
            this.users = data
          })
        },
        (error: any) => console.log(error));
  }

}
