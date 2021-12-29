import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { jobstatus } from 'src/app/models/jobstatus';
import { JobstatusService } from 'src/app/service/jobstatus.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-jobstatus',
  templateUrl: './jobstatus.component.html',
  styleUrls: ['./jobstatus.component.css']
})
export class JobstatusComponent implements OnInit {
  jobstat:jobstatus;
  st:any;
  stlist:any;
  jbs:any;
  jbsin:any;
  constructor(private jobs:JobstatusService,private tos:ToastrService) { 
    this.jobstat=new jobstatus();
  }

  ngOnInit(): void {
    this.jobslist();
  }
  jobstatus(form:NgForm){
this.jobs.jobstatus(this.jobstat).subscribe(status=>{
  console.log(status);
  this.st=status;
  this.stlist=this.st.message;
  console.log(this.stlist);
this.tos.success(this.stlist,'message');
form.reset();
this.jobslist();
})

  }
  jobslist(){
    this.jobs.jobslist().subscribe(jbs=>{
console.log(jbs);
this.jbs=jbs;
// this.jbsin=this.jbs.row;
console.log(this.jbs);
    })
  }
  Editjobstatus(row:any){
this.jobstat.jobstatusname=row.jobstatusname;
  }
  deletejobsstatus(k){
    alert("delete");
this.jobs.deletejs(k).subscribe(del=>{
  console.log(del);
  this.tos.success('job status deleted SuccessFully','message');
})
  }

}
