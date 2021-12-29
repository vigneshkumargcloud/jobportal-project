import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders}from '@angular/common/http';
import { Observable } from 'rxjs';
import { register } from '../models/registermodel';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  public getEmployeer():Observable<register>{
    return this.http.get<register>("http://localhost:3000/careeier/employeer");

  }
  public getJobseeker():Observable<register>{
    return this.http.get<register>("http://localhost:3000/careeier/jobseeker");

  }
  public company():Observable<register>{
    return this.http.get<register>("http://localhost:3000/careeier/company");

  }
  public deleteEmployeer(id){
    return this.http.delete("http://localhost:3000/careeier/employeer/"+id);

  }
  public deleteJobseeker(id){
    return this.http.delete("http://localhost:3000/careeier/jobseeker/"+id);

  }
}
