import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders}from '@angular/common/http';
import { Observable } from 'rxjs';
import { appliedjobs } from '../models/appiledjobs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private hts:HttpClient) { }

  public updatestatus(id,statuname){
    return this.hts.put('http://localhost:3000/appliedjobs/'+id,statuname)
  }

  public jobbyid(id){
    return this.hts.get('http://localhost:3000/appliedjobs/'+id)
  }
}
