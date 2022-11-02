import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PayrollService {
 // Inside this service class we are going to write all the business logic
  // Which is required to CONNECT TO REST API
  // We will require some support from the entity class

  // Service must be triggered by Componenet(Home or About)
  // Service acts as controller as in Java.

  // REST API
  // constructor() { }
  private baseUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) { }
  //connect to the server and get the data from the server  object
  //CRUD service
  //connect point to the server and UI

  //we need to define method to post the data
  //Post the data to the server

  createuserlist(user: object): Observable<object> {
    console.log("success");
    return this.http.post(`${this.baseUrl}` + '/adduser', user);
  }

  //Read Operation
  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/getpayroll');  //will change
  }

  // We need to create method in order to do delete operation
  // Inside the method we need to make the arrangement to call REST API for Delete
  deleteUserList(payId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/deletepayroll/` + `${payId}`, {responseType: 'text'});  //will change
  }
}
