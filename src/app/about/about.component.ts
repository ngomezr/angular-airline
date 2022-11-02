import { Component, OnInit } from '@angular/core';
import { Payroll } from '../payroll';
import { PayrollService } from '../payroll.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  deleteMessage: any;

  // Trigger will happen from here (Component TS File).
  // This is component file
  ngOnInit(): void {
  }

  user: Payroll = new Payroll();
  users: any;

  constructor(private payrollService: PayrollService) { }

  readUser() {
    this.payrollService.getUserList()
      .subscribe(data => { this.users = data }, error => console.log(error));
  }

  deleteUser(payId: number) {
    this.payrollService.deleteUserList(payId)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.deleteMessage = true;
          this.payrollService.getUserList().subscribe(data => {
            this.users = data
          })
        },
        (error: any) => console.log(error));
  }

}
