import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders}from '@angular/common/http';
import { login } from '../models/login_model';
import { Employeer } from '../models/login_model';
import { JobCategory } from '../models/jobscategory';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobcategoryService {

  constructor(private http:HttpClient) { }
  public jobscategory(jbs:JobCategory){
    const htpheaders=new HttpHeaders();
    htpheaders.append('content-type','application/json');
    return this.http.post("http://localhost:3000/jobcategory",jbs,{headers:htpheaders})
  }
  public getjobsCategory():Observable<JobCategory>{
    return this.http.get<JobCategory>("http://localhost:3000/jobcategory");

  }
  public deletejobcategory(id){
    return this.http.delete("http://localhost:3000/jobcategory/"+id);

  }

  public updatejobCategory(id,updatedata){
    // const endpoint='http://localhost:3000/jobcategory/' + id;
    return this.http.put('http://localhost:3000/jobcategory/' + id,updatedata);
  }
  //  deletePost(id){
  //   return this.httpClient.delete(this.url+'/'+id);
  // }

}
