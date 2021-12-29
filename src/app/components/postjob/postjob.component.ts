import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { jobpost } from 'src/app/models/postjob';
import { JobsService } from 'src/app/service/jobs.service';
import { JobcategoryService } from 'src/app/service/jobcategory.service';

import { JobtypeService } from 'src/app/service/jobtype.service';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {
jbpste:jobpost;
getjobacte:any;
jobtypes:any;
datedetail:any;
start:any;
formsstart:any;
startopening:any;
jobsapply:any;
jobsclose:any;
jobid:any;
jobdata:any;
jobrow:any;
datepi:any;
datepi1:any;
datePickerConfig = {
  drops: 'up',
  format: 'YYYY/MM/DD'
}
userid=localStorage.getItem('userid');
companyid=localStorage.getItem('companyid');


  constructor(private jobs:JobsService,private jbs:JobcategoryService,private jbtype:JobtypeService,private to:ToastrService,private datePipe: DatePipe,private activated:ActivatedRoute,private router:Router) { 
    this.jbpste=new jobpost();
    this.activated.paramMap.subscribe(params => { 
      this.jobid = params.get('id'); 
      // this.uid=params.get('userid');
  });
    // this.jbpste.sarting_date=new Date();
    // this.jbpste.sarting_date = new Date(this.getCurrentTime());
  }

  ngOnInit(): void {
    if(this.jobid!=null){
    this.getbyid();
    }
    this.getJob();
    this.getJobtype();
   
  this.getCurrentTime();
  let myDate = new Date(); 
console.log('date',this.datePipe.transform(myDate, 'yyyy-mm-dd'));
    
  }
  jobspost(form:NgForm){
    if(this.jobid!=null){
      alert("put");
      this.jbpste.posted_by=55;
      this.jbpste.userid=Number(this.userid);
     
      
      // let myDate =new Date().toISOString().slice(0,10);
      // console.log(myDate);
      //   console.log('date',this.datePipe.transform(myDate, 'YYYY-MM-dd'));
      //   this.datedetail=this.datePipe.transform(myDate,'YYYY-MM-dd');
        // this.start=this.datePipe.transform('YYYY-MM-dd');
        // this.jbpste.sarting_date=this.start;
        // this.jbpste.created_date=this.datedetail;
        this.formsstart=form.form.value.picker1;
        this.jobsapply=form.form.value.picker;
        console.log(this.datePipe.transform(this.formsstart,'YYYY-MM-dd'));
        this.startopening=this.datePipe.transform(this.formsstart,'YYYY-MM-dd');
        this.jobsclose=this.datePipe.transform(this.jobsapply,'YYYY-MM-dd');
        this.jbpste.end_date=this.startopening;
        this.jbpste.sarting_date=this.jobsclose;
      // this.jbpste.sarting_date = new Date(this.getCurrentTime());
     console.log(this.jbpste.end_date);
      this.jobs.updatejobs(this.jobid,this.jbpste).subscribe((data)=>{
       
  console.log(data);
        this.to.success('job updated SuccessFully','message');
        // form.reset();
      })
      this.router.navigate(['/','jobslist']);
      //console.log(form.form.value.end_date._d);
    }
    else{
      alert("post");
      this.jbpste.posted_by=55;
      this.jbpste.userid=Number(this.userid);
      // let dateString = '1968-11-16';
      const isoDate = new Date();
      this.datedetail =new Date();
      let myDate =new Date().toISOString().slice(0,10); ; 
      console.log(myDate);
        console.log('date',this.datePipe.transform(myDate, 'YYYY-MM-dd'));
        this.datedetail=this.datePipe.transform(myDate,'YYYY-MM-dd');
        // this.start=this.datePipe.transform('YYYY-MM-dd');
        // this.jbpste.sarting_date=this.start;
        this.jbpste.created_date=this.datedetail;
        this.formsstart=form.form.value.picker1;
        this.jobsapply=form.form.value.picker;
        console.log(form.form.value.picker1);
        console.log(this.jobsapply);
        console.log(form.form.value.picker._d);
        console.log(this.datePipe.transform(this.formsstart,'YYYY-MM-dd'));
        this.startopening=this.datePipe.transform(this.formsstart,'YYYY-MM-dd');
        this.jobsclose=this.datePipe.transform(this.jobsapply,'YYYY-MM-dd');
        console.log(this.jobsclose);
        this.jbpste.end_date=this.startopening;
        this.jbpste.sarting_date=this.jobsclose;
        console.log( this.jbpste.sarting_date);
      // this.jbpste.sarting_date = new Date(this.getCurrentTime());
     console.log(this.jbpste.end_date);
      this.jobs.postjobs(this.jbpste).subscribe((data:jobpost)=>{
       
  
        this.to.success('job posted SuccessFully','message');
        form.reset();
      })
      this.router.navigate(['/','jobslist']);
      // console.log(form.form.value.end_date._d);
    }

    

  }
  getJob(){
    this.jbs.getjobsCategory().subscribe(data=>{
     this.getjobacte=data;
     console.log(this.getjobacte);
    })
  }
  getJobtype(){
    this.jbtype.getjobType().subscribe(data=>{
     this.jobtypes=data;
     
     console.log(this.jobtypes);
    })
  }
  getCurrentTime(){
    return moment().format('DD MM YYYY'); 
 }
 datechecker(e:Event){
   console.log(e);
 }
 getbyid(){
   this.jobs.getbyid(this.jobid).subscribe(data=>{
     console.log(data);
      this.jobrow=data;
     console.log(this.jobrow);
     this.jobdata=this.jobrow.rows;
     console.log( this.jobdata[0]);
  this.jbpste.jobcategory_id=this.jobdata[0].jobcategory_id;
  this.jbpste.jobtitle=this.jobdata[0].jobtitle;
  this.jbpste.jobtype_id=this.jobdata[0].jobtype_id;
  this.jbpste.workinghours=this.jobdata[0].workinghours;
  this.jbpste.minsalary=this.jobdata[0].minsalary;
  this.jbpste.maxsalary=this.jobdata[0].maxsalary;
  this.datepi=this.datePipe.transform(this.jobdata[0].sarting_date,'YYYY-MM-dd');
  console.log('date',this.datepi);
  this.jbpste.sarting_date=this.datepi;
  this.datepi1=this.datePipe.transform(this.jobdata[0].end_date,'YYYY-MM-dd');
  this.jbpste.end_date=this.datepi1;
  this.jbpste.state=this.jobdata[0].state;
  this.jbpste.city=this.jobdata[0].city;
  this.jbpste.pin=this.jobdata[0].pin;
  this.jbpste.description=this.jobdata[0].description;
   })
 }
}
