import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobsService } from 'src/app/service/jobs.service';


@Component({
  selector: 'app-jobpost',
  templateUrl: './jobpost.component.html',
  styleUrls: ['./jobpost.component.css']
})
export class JobpostComponent implements OnInit {
 
  userid=localStorage.getItem('userid');
  username=localStorage.getItem('user');
  msg:any;
  noofmsg:any;
  dotmsg:any;
  jobsapplied:any;
  appliedlength:any;
  constructor(private router:Router,private jbs:JobsService) { }

  ngOnInit(): void {
    this.jobsappliedbythisuser();
    this.Noofmessages();
   
   
  }
  navigatetoResumePage(){
    this.router.navigate(['/','resume']);
  }
  navigateProfile(){
    this.router.navigate(['/seeker/',this.userid]);
  }
  Noofmessages(){
    this.jbs.getnoofmessages(this.userid).subscribe(data=>{
      this.msg=data;
      console.log(this.msg.message[0].totalmessages);
      this.noofmsg=this.msg.message[0].totalmessages;
      console.log(this.noofmsg);
    })
  }
 
  jobsappliedbythisuser(){
    
    this.jbs.getappiledjobsforuser(this.userid).subscribe(data=>{
      console.log(data);
      this.dotmsg=data;
      this.jobsapplied=this.dotmsg.message;
      this.appliedlength=this.jobsapplied.length;
      console.log(this.appliedlength);
    })
  }
  navigatecompany(){
   
  }

}
