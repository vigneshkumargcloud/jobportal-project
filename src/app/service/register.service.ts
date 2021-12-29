import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders}from '@angular/common/http';
import { Observable } from 'rxjs';
import { register } from '../models/registermodel';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  public register(register){
    const htpheaders=new HttpHeaders();
    htpheaders.append('content-type','application/json');
    return this.http.post("http://localhost:3000/auth/register",register,{headers:htpheaders})
  }

  public getUserById(id):Observable<register>{
    return this.http.get<register>("http://localhost:3000/auth/"+id);

  }
  
}
