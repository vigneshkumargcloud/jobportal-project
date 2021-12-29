import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders}from '@angular/common/http';

import { JobCategory } from '../models/jobscategory';
import { Observable } from 'rxjs';
import { jobType } from '../models/jobtypemodel';

@Injectable({
  providedIn: 'root'
})
export class JobtypeService {

  constructor(private http:HttpClient) { }

  public jobstype(jobType:jobType){
    const htpheaders=new HttpHeaders();
    htpheaders.append('content-type','application/json');
    return this.http.post("http://localhost:3000/jobtype",jobType,{headers:htpheaders});
  }
  public getjobType():Observable<jobType>{
    return this.http.get<jobType>("http://localhost:3000/jobtype");

  }
  public deletejobType(id){
    return this.http.delete("http://localhost:3000/jobtype/"+id);

  }

  public updatejobType(id,updatedata){
   
    return this.http.put('http://localhost:3000/jobType/' + id,updatedata);
  }
}
