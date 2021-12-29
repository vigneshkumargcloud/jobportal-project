import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders}from '@angular/common/http';
import { Observable } from 'rxjs';
import { company } from '../models/compnay';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) { }
  // public PostCompanyDetails(company_name:string,profile_desc:string,establishment_date:string,business_sid:any,company_website:string,filetoupload:File){
  //   const htpheaders=new HttpHeaders();
  //   const formdata:FormData=new FormData();
  //   formdata.append('Image',filetoupload,filetoupload.name);
  //   formdata.append('companyname',company_name);
  //   formdata.append('profile_desc',profile_desc);
  //   formdata.append('profile_desc',profile_desc);
  //   formdata.append('establishment_date',establishment_date);
  //   formdata.append(business_sid,business_sid);
  //   formdata.append('business_sid',company_website);
  //   htpheaders.append('content-type','application/json');
  //   return this.http.post("http://localhost:3000/cmp",formdata,{headers:htpheaders})

  // }
  public PostCompanyDetails(cmp:FormData){
    const htpheaders=new HttpHeaders();
    
    htpheaders.append('content-type','application/json');
    return this.http.post("http://localhost:3000/cmp",cmp,{headers:htpheaders})

  }
  public getCompanyList():Observable<company>{
    
    return this.http.get<company>("http://localhost:3000/cmp");

  }
  public getCompanyListid(id):Observable<company>{
    
 
    return this.http.get<company>("http://localhost:3000/cmp/user/"+id);

  }
  public getCompanyListids(id):Observable<company>{
    
    return this.http.get<company>("http://localhost:3000/cmp/"+id);

  }
}
