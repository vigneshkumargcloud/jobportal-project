import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders}from '@angular/common/http';
import { Observable } from 'rxjs';
import { jobstatus } from '../models/jobstatus';
@Injectable({
  providedIn: 'root'
})
export class JobstatusService {

  constructor(private http:HttpClient) { }
  public jobstatus(jobsts:jobstatus){
    const htpheaders=new HttpHeaders();
    htpheaders.append('content-type','application/json');
    return this.http.post("http://localhost:3000/jobstatus",jobsts,{headers:htpheaders})

  }
  public jobslist():Observable<jobstatus>{
    return this.http.get<jobstatus>("http://localhost:3000/jobstatus/");

  }
  public deletejs(id):Observable<jobstatus>{
    return this.http.delete<jobstatus>("http://localhost:3000/jobstatus/"+id);

  }
}
