import { Component, OnInit } from '@angular/core';
import { MsgService } from 'src/app/service/msg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messageslist',
  templateUrl: './messageslist.component.html',
  styleUrls: ['./messageslist.component.css']
})
export class MessageslistComponent implements OnInit {
  userid=localStorage.getItem('userid');
  usertype=localStorage.getItem('usertype');
  userrole:Number;
  message:any;
  list:any;
  constructor(private msge:MsgService,private route:Router) { }

  ngOnInit(): void {
    this.userrole=Number(this.usertype);
    if(Number(this.usertype)===3){
      this.getMessagesForUser();
    }
    else{
      if(Number(this.usertype)===2){
        this.getMessagesForemp();
      }
    }
    
    console.log(this.userid);
  }
  getMessagesForUser(){
    this.msge.getMessagesForjobseeker(this.userid).subscribe(data=>{
      if(!data){
        console.log("no records found")
      }
      else{
        console.log(data);
        this.message=data;
        this.list=this.message.message;
        console.log(this.list);
      }
      
    })

  }
  getMessagesForemp(){
    this.msge.getMessagesbye(this.userid).subscribe(data=>{
      if(!data){
        console.log("no records found")
      }
      else{
        console.log(data);
        this.message=data;
        this.list=this.message.message;
        console.log('emp',this.list);
      }
      
    })

  }
  messagedetail(row:any){
    alert(row.id);
    this.route.navigate(['addmesg/',row.id]);
  }

}
