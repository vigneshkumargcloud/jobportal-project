import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { JobsService } from 'src/app/service/jobs.service';
import { UsersService } from 'src/app/service/users.service';
import { CandidateService } from 'src/app/service/candidate.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employeedashboard',
  templateUrl: './employeedashboard.component.html',
  styleUrls: ['./employeedashboard.component.css']
})
export class EmployeedashboardComponent implements OnInit {
  jobsdata;
  noofjobs;
  emparray:any;
  companieslength;
  jobseeker;
  seeker;
  appliedjbs;
  applist;
  jobsofthisemployeer:any;
  userid=localStorage.getItem('userid');
  nojobs:any;
  noofappliedjobs:any;
  applied:any;
  msg:any;
  noofmsg:any;
  constructor(private login:LoginService,private ser:CandidateService,private jbs:JobsService,private user:UsersService,private router:Router) { }

  ngOnInit(): void {
    
    this.getjobs();
    this.getEmployeers();
    this.getJobSeeker();
    this.getAppliedjobs();
    this.NoofEmployees();
    this.Noofappliedjobs();
    this.Noofmessages();
  }
  getjobs(){
    this.jbs.getjobs().subscribe(data=>{
      console.log('jobs',data);
  
     
      this.jobsdata=data
      console.log(this.jobsdata.length);
      console.log('userjobs',this.jobsdata);
      this.noofjobs=this.jobsdata.length;
    })

  }
  getAppliedjobs(){
    this.jbs.getappiledjobs().subscribe(data=>{
      console.log('jobs',data);
  
     
      this.applist=data;
      console.log(this.applist.length);
      this.appliedjbs=this.applist.length;
    })

  }

  getEmployeers(){
    this.user.company().subscribe(data=>{
      console.log(data);
      this.emparray=data;
      this.companieslength=this.emparray.length;
      console.log(this.companieslength);
    })
   }
   getJobSeeker(){
    this.user.getJobseeker().subscribe(data=>{
      console.log(data);
      this.jobseeker=data;
      this.seeker=this.jobseeker.length;
    })
   }
   NoofEmployees(){
     this.jbs.getnoofjobsforemployeer(this.userid).subscribe(data=>{
       this.jobsofthisemployeer=data;
       console.log(this.jobsofthisemployeer.message[0].totaljobs);
       this.nojobs=this.jobsofthisemployeer.message[0].totaljobs;
     })
   }
   Noofmessages(){
    this.jbs.getnoofmessages(this.userid).subscribe(data=>{
      this.msg=data;
      console.log(this.msg.message[0].totalmessages);
      this.noofmsg=this.msg.message[0].totalmessages;
      console.log(this.noofmsg);
    })
  }
   Noofappliedjobs(){
    this.jbs.getnoofappliedjobs(this.userid).subscribe(data=>{
      this.noofappliedjobs=data;
      console.log(this.noofappliedjobs.message.length);
      if(this.noofappliedjobs.message.length!=0){
        this.applied=this.noofappliedjobs.message.length;
      }
      else{
        this.applied=0;
      }
    
    })
  }
   navigatecompany(){
    this.router.navigate(['/','comapnylist']);
   }
   navigateappliedjobs(){
    this.router.navigate(['/','education']);
   }
   navigatejobseeker(){
    this.router.navigate(['/','education']);
   }
   navigatejobs(){
    this.router.navigate(['/','postjob']);
   }

}
