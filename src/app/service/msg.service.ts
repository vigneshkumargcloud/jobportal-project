import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders}from '@angular/common/http';
import { Observable } from 'rxjs';
import { message } from '../models/msgmodel';
import { replies } from '../models/replies';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor(private http:HttpClient) { }
  public PostMessage(mse:message){
    const htpheaders=new HttpHeaders();
    htpheaders.append('content-type','application/json');
    return this.http.post("http://localhost:3000/msg",mse,{headers:htpheaders})

  }
  public getMessagesForjobseeker(id):Observable<message>{
    return this.http.get<message>("http://localhost:3000/msg/byuser/"+id);

  }
  public getMessagesbyid(id):Observable<message>{
    return this.http.get<message>("http://localhost:3000/msg/formsg/"+id);

  }
  public getMessagesbye(id):Observable<message>{
    return this.http.get<message>("http://localhost:3000/msg/foremp/"+id);

  }
  public getMsgs(id):Observable<message>{
    return this.http.get<message>("http://localhost:3000/msg/msglist/"+id);

  }
 
  public addemplreply(rpl:replies){
    const htpheaders=new HttpHeaders();
    htpheaders.append('content-type','application/json');
    return this.http.post("http://localhost:3000/replies",rpl,{headers:htpheaders})

  }
  public getReply(id):Observable<message>{
    return this.http.get<message>("http://localhost:3000/replies/"+id);

  }
  public updatereplies(id,updatedata){
    // const endpoint='http://localhost:3000/jobcategory/' + id;
    return this.http.put('http://localhost:3000/replies/' + id,updatedata);
  }
}
