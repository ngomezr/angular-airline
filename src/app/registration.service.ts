import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseUrl = 'http://localhost:8080';
  
  constructor(private http: HttpClient) { }

  createUserList(user: object): Observable<object> {
    console.log("success");
    return this.http.post(`${this.baseUrl}` + '/addemployee', user);
  }

  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/getemployee');  //will change
  }

  deleteUserList(employeeId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/deleteemployee/` + `${employeeId}`, {responseType: 'text'});  //will change
  }
}
