import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { jobType } from 'src/app/models/jobtypemodel';
import { JobtypeService } from 'src/app/service/jobtype.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-jobtype',
  templateUrl: './jobtype.component.html',
  styleUrls: ['./jobtype.component.css']
})
export class JobtypeComponent implements OnInit {
  jobtype:any;
  getjobtype;

  constructor(private jobs:JobtypeService,private toastr:ToastrService) {
    this.jobtype=new jobType();
   }

  ngOnInit(): void {
    this.getJob();
  }
  jobtypeSubmit(form:NgForm){

    this.jobs.jobstype(this.jobtype).subscribe((data:jobType)=>{
      console.log(data);
      this.toastr.success('jobtype added SuccessFully','message');
     
       
    })
  }
  getJob(){
    this.jobs.getjobType().subscribe(data=>{
     this.getjobtype=data;
    })
  }
  EditJobtype(row:any){
    this.jobtype.id=row.id;
this.jobtype.jobtype=row.jobtype
  }
  deleteJobtype(i){
   
    this.jobs.deletejobType(i).subscribe((data)=>{
      this.getJob();
      console.log("data's dele",data);
      this.toastr.success('JobType deleted SuccessFully','message');
    })
  }
  updateJobType(){

    this.jobs.updatejobType(this.jobtype.id,this.jobtype).subscribe(res=>{
      console.log(res);
      this.toastr.success('jobtype updated SuccessFully','message');
      this.getJob();

    })
  }

}
