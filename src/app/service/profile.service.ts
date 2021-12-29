import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders}from '@angular/common/http';
import { Observable } from 'rxjs';
import {CandidateProfile} from '../models/profile';
import { edumodel } from '../models/edumodel';
import { expere } from '../models/exper';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }
  public PostCandidateProfile(profile:FormData){
    const htpheaders=new HttpHeaders();
    htpheaders.append('content-type','application/json');
    return this.http.post("http://localhost:3000/profile",profile,{headers:htpheaders})

  }
  public getprofile(id):Observable<CandidateProfile>{
    return this.http.get<CandidateProfile>("http://localhost:3000/profile/"+id);

  }
  public getprofilelist():Observable<CandidateProfile>{
    return this.http.get<CandidateProfile>("http://localhost:3000/profile");

  }
  public Education(profile:any){
    const htpheaders=new HttpHeaders();
    htpheaders.append('content-type','application/json');
    return this.http.post("http://localhost:3000/educationdetails",profile,{headers:htpheaders})

  }
  public Educationdetails(id):Observable<edumodel>{
    return this.http.get<edumodel>("http://localhost:3000/educationdetails/"+id);

  }
  public Experience(id):Observable<expere>{
    return this.http.get<expere>("http://localhost:3000/wrke/"+id);

  }
  public experience(expere:any){
    const htpheaders=new HttpHeaders();
    htpheaders.append('content-type','application/json');
    return this.http.post("http://localhost:3000/wrke",expere,{headers:htpheaders})

  }
  public skills(expere:any){
    const htpheaders=new HttpHeaders();
    htpheaders.append('content-type','application/json');
    return this.http.post("http://localhost:3000/skills",expere,{headers:htpheaders})

  }
  public updateCandidateProfile(id,profile:FormData){
    // const endpoint='http://localhost:3000/jobcategory/' + id;
    return this.http.put('http://localhost:3000/profile/' + id,profile);
  }
  public educationput(id,edu){
    // const endpoint='http://localhost:3000/jobcategory/' + id;
    return this.http.put('http://localhost:3000/educationdetails/' + id,edu);
  }
  public workupdate(id,wrk){
    // const endpoint='http://localhost:3000/jobcategory/' + id;
    return this.http.put('http://localhost:3000/wrke/' + id,wrk);
  }
  public skillsbyid(id):Observable<expere>{
    return this.http.get<expere>("http://localhost:3000/skills/"+id);

  }
  public skillsupdate(id,skills){
    // const endpoint='http://localhost:3000/jobcategory/' + id;
    return this.http.put('http://localhost:3000/skills/' + id,skills);
  }
  public deleteskills(id):Observable<expere>{
    return this.http.delete<expere>("http://localhost:3000/skills/"+id);

  }
  public deletework(id):Observable<expere>{
    return this.http.delete<expere>("http://localhost:3000/wrke/"+id);

  }
  public deleteeducationdetails(id):Observable<expere>{
    return this.http.delete<expere>("http://localhost:3000/educationdetails/"+id);

  }
}
