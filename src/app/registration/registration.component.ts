import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { Registration } from '../registration';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: Registration = new Registration();
  users: any;
  ack: any;

  constructor(private registrationService: RegistrationService, private router: Router) { }

  ngOnInit(): void {
    this.ack = "Add Record Please!"
  }
  // We need to write the logic here to find the data which is coming from the form
  // Also we need to write the logic to connect to registration service once data ready
  profileForm = new FormGroup({

    employeeId: new FormControl('', [Validators.required, Validators.minLength(4)]),
    empName: new FormControl('', [Validators.required,Validators.minLength(4)]),
    empDept: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required]),

  });
  
  get f(){
    return this.profileForm.controls;
  }

  submit() {

    //console.log('Name:' + this.somedata.name);
    //console.log('Series:' + this.somedata.series);

    this.user.employeeId=this.f['employeeId'].value;         //Angular
    this.user.empName=this.f['empName'].value;
    this.user.empDept=this.f['empDept'].value;
    this.user.salary=this.f['salary'].value;

   console.log("Norberto",this.user.empName);

    console.log(this.profileForm.value)
    //Post Operationwill be executed here
    if(this.user.empName!='' && this.user.empName!=null && this.user.empName.length>=4){
    this.addUser();
    this.router.navigate(['/home']);
    }
    //this.signupService.createuserlist(this.user)
    //Here logic will be there Develop your application can add logic here to call API Hit
  }

  addUser() {
    this.registrationService.createUserList(this.user).subscribe(data => console.log(data), error => console.log(error));
    this.user = new Employee();
    this.ack = "Record added Successfully";
  }

}
