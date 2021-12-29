import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { message } from 'src/app/models/msgmodel'; 
import { CompanyService } from 'src/app/service/company.service';
import { MsgService } from 'src/app/service/msg.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { replies } from 'src/app/models/replies';


@Component({
  selector: 'app-addmessages',
  templateUrl: './addmessages.component.html',
  styleUrls: ['./addmessages.component.css']
})
export class AddmessagesComponent implements OnInit {
  mes:message;
  cmparray:any;
  userid=localStorage.getItem('userid');
  userrole=localStorage.getItem('usertype');
  msgid:any;
  comm:any;
  utype:any;
  msgs:any;
  companyname:any;
  ci:any;
  cim:any;
  reply:replies;
  repl:any;
  rply:any;
  uid=localStorage.getItem('uid');
  bool:any=0;
  conm:any;
  conres:any;
  
  constructor(private cmps:CompanyService,private msge:MsgService,private _Activatedroute:ActivatedRoute,private tos:ToastrService) {
    this.mes=new message();
    this.reply=new replies();
    this._Activatedroute.paramMap.subscribe(params => { 
      this.msgid = params.get('id'); 
     
  });
   }

  ngOnInit(): void {
    this.utype=Number(this.userrole);
      
    this.getcompanylist();
    if(this.msgid){
      this.getReplies();
    }
   
   
    if(this.msgid && Number(this.userrole)===3){
      this.msgbyid();
    }
    else{
      if(this.msgid && Number(this.userrole)===2){
        this.msgbyidlist();
      }
    }
  }
  getcompanylist(){
    this.cmps.getCompanyList().subscribe(data=>{
    this.cmparray=data;
    console.log(this.cmparray);
    
    })
  }
  msgadd(form:NgForm){
   console.log(this.cim);
    this.mes.userid=Number(this.userid);
    this.mes.uid=Number(this.uid);
   this.msge.PostMessage(this.mes).subscribe((data:message)=>{
     console.log(data);
     this.tos.success('message sent successfully','message');
   })
  //  localStorage.removeItem('uid');
  
  }

  msgbyid(){
    this.msge.getMessagesbyid(this.msgid).subscribe(data=>{
      console.log(data);
      this.comm=data;
      this.msgs=this.comm.message;
      this.companyname=this.msgs[0].companyid;
      var mesg=this.msgs[0].message;
      console.log(this.companyname);
      this.mes.companyid=this.companyname
      this.mes.message=mesg;

    })
  }
  msgbyidlist(){
    this.msge.getMsgs(this.msgid).subscribe(data=>{
      console.log(data);
      this.comm=data;
      this.msgs=this.comm.message;
      this.companyname=this.msgs[0].username;
      var mesg=this.msgs[0].message;
      console.log(this.companyname);
      this.mes.username=this.companyname
      this.mes.message=mesg;

    })
  }
  onChange(e:Event){
 alert(e);
 this.cmps.getCompanyListids(e).subscribe(data=>{
   console.log(data);
   this.ci=data;
   this.cim=this.ci.rows;
   console.log(this.cim[0].uid);
   localStorage.setItem('uid',this.cim[0].uid);
   
 })
  }
  addemplyreply(reply:NgForm){
    if(Number(this.userrole)===2){
      this.reply.msgid=this.msgid;
      this.reply.seekerreply='';
     this.msge.addemplreply(this.reply).subscribe(data=>{
       this.repl=data;
       localStorage.setItem('bool',this.bool);
      this.tos.success('your message sent successfully','message');
      reply.reset();
     })
    }
    else{
      if(Number(this.userrole)===3){
        alert(this.userrole);
        this.reply.msgid=this.msgid;
        // this.reply.employeerreply='';
       this.msge.updatereplies(this.msgid,this.reply).subscribe(data=>{
         this.repl=data;
         localStorage.setItem('bool',this.bool);
        this.tos.success('your message sent successfully','message');
        // reply.reset();
        this.ngOnInit();
       })
      }
    }

  
  }
  getReplies(){
    alert("");
    this.msge.getReply(this.msgid).subscribe(data=>{
      console.log(data);
      this.conm=data;
      this.conres=this.conm.message;
      console.log(this.conres[0].employeerreply);
      this.reply.employeerreply=this.conres[0].employeerreply;
      this.reply.seekerreply=this.conres[0].seekerreply;
    })
  }

}
