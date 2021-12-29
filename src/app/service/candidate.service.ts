import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders}from '@angular/common/http';
import { Observable } from 'rxjs';
import { gettable } from '../models/gettables';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http:HttpClient) { }
  public getAlumbs():Observable<gettable>{
    return this.http.get<gettable>("https://jsonplaceholder.typicode.com/todos");

  }
}
