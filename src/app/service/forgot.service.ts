import { Injectable } from '@angular/core';
import { forgot } from '../models/forgotmodel';
import{HttpClient, HttpHeaders}from '@angular/common/http';
import { forgotPass } from '../models/forgotpassmodel';


@Injectable({
  providedIn: 'root'
})
export class ForgotService {

  constructor(private http:HttpClient) { }
  public forgotpassword(forgotpass:forgot){
    // const endpoint='http://localhost:3000/jobcategory/' + id;
    return this.http.put('http://localhost:3000/auth/changepassword',forgotpass);
  }
  public forgotpass(id,forgotpass:forgotPass){
    // const endpoint='http://localhost:3000/jobcategory/' + id;
    return this.http.put('http://localhost:3000/auth/register/'+id,forgotpass);
  }
}
