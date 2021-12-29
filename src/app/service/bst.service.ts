import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders}from '@angular/common/http';
import { Observable } from 'rxjs';
import { businesStream } from '../models/bst model';

@Injectable({
  providedIn: 'root'
})
export class BstService {

  constructor(private http:HttpClient) { }
  public getBusinessType():Observable<businesStream>{
    return this.http.get<businesStream>("http://localhost:3000/bst");

  }
  public PostBusinessType(bstype:businesStream){
    const htpheaders=new HttpHeaders();
    htpheaders.append('content-type','application/json');
    return this.http.post("http://localhost:3000/bst",bstype,{headers:htpheaders})

  }
  public updateBusinessStream(id,businessstream){
    // const endpoint='http://localhost:3000/jobcategory/' + id;
    return this.http.put('http://localhost:3000/bst/' + id,businessstream);
  }
}
