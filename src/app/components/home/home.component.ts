import { Component, OnInit } from '@angular/core';
import { gettable } from 'src/app/models/gettables'; 
import { CandidateService } from 'src/app/service/candidate.service';
import { jobsList } from 'src/app/models/jobs';
import { JobsService } from 'src/app/service/jobs.service';
import { UsersService } from 'src/app/service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  getdataarray;
  dataSource;
  displayedColumns:string[]=[];
  jobsdata;
  noofjobs;
  emparray:any;
  companieslength;
  jobseeker;
  seeker;
  appliedjbs;
  applist;

  constructor(private ser:CandidateService,private jbs:JobsService,private user:UsersService,private router:Router) { }

  ngOnInit(): void {
    this.getdatas();
    this.getjobs();
    this.getEmployeers();
    this.getJobSeeker();
    this.getAppliedjobs();
  }
  getdatas(){
    this.ser.getAlumbs().subscribe(data=>{
      this.getdataarray=data;
      console.log(this.getdataarray);
      this.displayedColumns = ['userId', 'id', 'title', 'completed'];
      this.dataSource =  this.getdataarray;
    })
     }
     getjobs(){
      this.jbs.getjobs().subscribe(data=>{
        console.log('jobs',data);
    
       
        this.jobsdata=data
        console.log(this.jobsdata.length);
        console.log("jobs by this user", this.jobsdata);
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
      this.router.navigate(['/','education']);
     }
  
    

}
