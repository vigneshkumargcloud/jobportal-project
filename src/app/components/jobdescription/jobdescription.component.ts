import { Component, OnDestroy, OnInit } from '@angular/core';
import { JobsService } from 'src/app/service/jobs.service';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/service/company.service';
import { appliedjobs } from 'src/app/models/appiledjobs';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-jobdescription',
  templateUrl: './jobdescription.component.html',
  styleUrls: ['./jobdescription.component.css']
})
export class JobdescriptionComponent implements OnInit,OnDestroy {
jobsid:any;
userid=localStorage.getItem('userid');
jobinfo:any;
jobdataarray:any;
jobs:any;
jobtitle:any;
city:any;
id:any;
imagesarray:any;
img:any;
companyname:any;
description:any;
minsalary:any;
maxsalary:any;
applied=localStorage.getItem('applied');
applyjob:boolean;
not:any;
appliedforjobs:boolean;
uid:any;

apply:appliedjobs;
  constructor(private jbs:JobsService,private _Activatedroute:ActivatedRoute,private Company:CompanyService,private tos:ToastrService) {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.jobsid = params.get('id'); 
      this.uid=params.get('userid');
  });
  this.apply=new appliedjobs();
   }

  ngOnInit(): void {
    this.getjobs();
    console.log(this.jobsid);
    this.getjobsdesc();
    // this.getcompanyimage();
  }
  getjobsdesc(){
this.jbs.getjobdesc(this.jobsid).subscribe(jobdesc=>{
this.jobinfo=jobdesc;
console.log(this.jobinfo.rows[0]);
  this.jobdataarray=this.jobinfo.rows[0];
  this.jobtitle=this.jobdataarray.jobtitle;
  this.city=this.jobdataarray.city;
  this.description=this.jobdataarray.description;
  this.id=this.jobdataarray.userid;
  this.minsalary=this.jobdataarray.minsalary;
  this.maxsalary=this.jobdataarray.maxsalary;
  console.log('id',this.id);
  this.Company.getCompanyListid(this.id).subscribe(data=>{
    console.log('user',data);
    this.imagesarray=data;
    var photo=this.imagesarray.rows[0]
    this.img=photo.companyimage;
    this.companyname=photo.company_name;
    console.log(this.img);


  })
})
  }

  appliedjobs(){
    this.apply.user_acc_id=Number(this.userid);
    this.apply.job_post_id=this.jobsid;
    this.apply.jobappliedfor=this.uid;
    this.apply.applstatus=1;
    this.apply.js="applied";
  
    this.jbs.Appliedjobs(this.apply).subscribe(data=>{
      console.log(data);
      this.tos.success('job appiled successfully','message');
      this.applyjob=true;

      location.reload();
      

    })
  }
  ngOnDestroy(){
    // this.applyjob=false;
  }
  getjobs(){
    this.jbs.getappiledjobs().subscribe(data=>{
      console.log(data);
      this.not=data;
      for(var i=0;i<this.not.length;i++){
      if(this.not[i].user_acc_id==this.userid &&this.not[i].job_post_id==this.jobsid){
        console.log('matched');
        this.appliedforjobs=true;
      }
      }
     
    })
  }
  appiledornot(){
   
  }




}
