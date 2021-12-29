import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders}from '@angular/common/http';
import { Observable } from 'rxjs';
import { jobs } from '../models/jobs';
import { jobsList } from '../models/jobs';
import { jobpost } from '../models/postjob';
import { favmodel } from '../models/favjobs';
import { appliedjobs } from '../models/appiledjobs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http:HttpClient) { }
  public getjobs():Observable<jobs>{
    return this.http.get<jobs>("http://localhost:3000/jobs");

  }
  public getjobsList():Observable<jobsList>{
    return this.http.get<jobsList>("http://localhost:3000/jobs");

  }
  public postjobs(jospost:jobpost){
    const htpheaders=new HttpHeaders();
    htpheaders.append('content-type','application/json');
    return this.http.post("http://localhost:3000/jobs",jospost,{headers:htpheaders})

  }
  public Favjob(fav:favmodel){
    const htpheaders=new HttpHeaders();
    htpheaders.append('content-type','application/json');
    return this.http.post("http://localhost:3000/favjobs",fav,{headers:htpheaders})

  }
  public getFavjobs(id):Observable<favmodel>{
    return this.http.get<favmodel>("http://localhost:3000/favjobs/"+id);

  }
  public getjobdesc(id):Observable<jobsList>{
    return this.http.get<jobsList>("http://localhost:3000/jobs/"+id);

  }
  public getjobsListbyEmployee(id):Observable<jobsList>{
    return this.http.get<jobsList>("http://localhost:3000/jobs/user/"+id);

  }
  public Appliedjobs(applied){
    const htpheaders=new HttpHeaders();
    htpheaders.append('content-type','application/json');
    return this.http.post("http://localhost:3000/appliedjobs",applied,{headers:htpheaders})

  }
  public getappiledjobs():Observable<jobsList>{
    return this.http.get<jobsList>("http://localhost:3000/appliedjobs/");

  }
  public getnoofjobsforemployeer(id):Observable<jobsList>{
    return this.http.get<jobsList>("http://localhost:3000/jobs/byuserid/"+id);

  }
  public getnoofappliedjobs(id):Observable<jobsList>{
    return this.http.get<jobsList>("http://localhost:3000/appliedjobs/foremployee/"+id);

  }
  public getnoofmessages(id):Observable<jobsList>{
    return this.http.get<jobsList>("http://localhost:3000/msg/count/"+id);

  }
  public getappiledjobsforuser(id):Observable<jobsList>{
    return this.http.get<jobsList>("http://localhost:3000/appliedjobs/users/"+id);

  }
  public deletesavedjobs(id){
    return this.http.delete("http://localhost:3000/favjobs/"+id);

  }
  public getbyid(id):Observable<jobsList>{
    return this.http.get<jobsList>("http://localhost:3000/jobs/"+id);

  }
  public updatejobs(id,jobs:jobpost){
    // const endpoint='http://localhost:3000/jobcategory/' + id;
    return this.http.put('http://localhost:3000/jobs/'+id,jobs);
  }
  public getappliedjobsforuser(id){
    // const endpoint='http://localhost:3000/jobcategory/' + id;
    return this.http.get('http://localhost:3000/appliedjobs/users/'+id);
  }
  public getAppforemp(status,id){
    return this.http.get('http://localhost:3000/appliedjobs/jobsts/'+status+'/'+id);
  }
  
}

