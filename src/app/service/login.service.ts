import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders}from '@angular/common/http';
import { login } from '../models/login_model';
import { Employeer } from '../models/login_model';
import { admin } from '../models/login_model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
   tokens:any;
    user:any;
    user_type_id:any;
    companyname:any;

  constructor(private http:HttpClient) { }
  public JObseekerLogin(login:login){
    const htpheaders=new HttpHeaders();
    htpheaders.append('content-type','application/json');
    return this.http.post("http://localhost:3000/auth/login",login,{headers:htpheaders})
  }
  public EmployeerLogin(emp:Employeer){
    const htpheaders=new HttpHeaders();
    htpheaders.append('content-type','application/json');
    return this.http.post("http://localhost:3000/auth/employeerLogin",emp,{headers:htpheaders})
  }
  public adminlogin(adm:admin){
    const htpheaders=new HttpHeaders();
    htpheaders.append('content-type','application/json');
    return this.http.post("http://localhost:3000/auth/login",adm,{headers:htpheaders})
  }
  public storetoken(token,user,usertype){
   localStorage.setItem('id_token',token);
   localStorage.setItem('user',user);
   localStorage.setItem('usertype',usertype);
   this.tokens = token;
   this.user = user;
   this.user_type_id=usertype;
  }
  public Employeertoken(token,companyname,user_type_id){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',companyname);
    localStorage.setItem('usertype',user_type_id);
    this.tokens = token;
    this.companyname = companyname;
    this.user_type_id=user_type_id;
   }
  logout(){
    this.tokens=null;
    this.user=null;
    localStorage.clear();
  }
 

}



