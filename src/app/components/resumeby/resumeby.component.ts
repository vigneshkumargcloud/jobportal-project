import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';
import { ActivatedRoute } from '@angular/router';
import { appliedjobs } from 'src/app/models/appiledjobs';
import { StatusService } from 'src/app/service/status.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-resumeby',
  templateUrl: './resumeby.component.html',
  styleUrls: ['./resumeby.component.css']
})
export class ResumebyComponent implements OnInit {
param:any;
skills:any;
individu:any;
jobs:appliedjobs;
statid:any;
res:any;
statu:any;
insideres:any;
acre:any;
accreject:any;
flag:boolean=false;
  constructor(private pfs:ProfileService,private _Activatedroute:ActivatedRoute,private staus:StatusService,private toster:ToastrService) { 
    this.jobs=new appliedjobs();
    
    this._Activatedroute.paramMap.subscribe(params => { 
      this.param = params.get('id'); 
      this.statid = params.get('reid'); 
  
  });
  }
  educationdetails:any;
  edudetails:any;
  explist:any;
  exp:any;
  ngOnInit(): void {
    this.Educationdetails();
    this.Experiencedetails();
    this.getSkills();
    console.log(this.statid);
    this.getaccprec();
  }
  Educationdetails(){
    this.pfs.Educationdetails(Number(this.param)).subscribe(data=>{
      console.log(data);
      this.educationdetails=data;
      console.log(this.educationdetails.message);
      this.edudetails=this.educationdetails.message;
     
      

    })
  }

  Experiencedetails(){
    this.pfs.Experience(Number(this.param)).subscribe(data=>{
      console.log(data);
      this.explist=data;
      console.log("experiencedetails",this.explist.message);
      this.exp=this.explist.message;
      // this.userprofile=this.dataarray.message[0].profileimg;
      // this.currentsalary=this.dataarray.message[0].current_salary;
      

    })
  }
  getSkills(){
    this.pfs.skillsbyid(Number(this.param)).subscribe(next=>{
      console.log(next);
      this.skills=next;
      console.log(this.skills);
this.individu=this.skills.message;
console.log(this.individu);
    })
  }
  grant(){
   alert("");
    this.jobs.js="accepted";
    console.log(this.statu);
     
    this.staus.updatestatus(this.statid,this.jobs).subscribe(wrte=>{
      console.log(wrte);
      console.log(this.statu);
      this.res=wrte;
      this.insideres=this.res.message;
      console.log(this.insideres);
      this.toster.success(this.insideres,'message');
    })
  }
getaccprec(){
  this.staus.jobbyid(this.statid).subscribe(res=>{
    console.log(res);
     this.acre=res;
     this.accreject=this.acre.message;
     console.log(this.accreject[0].js);
      if(this.accreject[0].js!='accepted'&& this.accreject[0].js!='rejected'&& this.accreject[0].js!='accepted' && this.accreject[0].js!='InterviewScheduled'){
      
          this.flag=true;
          alert(this.flag);
          console.log(this.flag);
   
      }
      // else{
      //   if(this.accreject[0].js=='rejected'){
        
      //     this.flag=false;
      //     console.log(this.flag);
      //     alert(this.flag);
      //   }
     
      // }

    })
}
  reject(){
   
    this.jobs.js="rejected";
    alert("alert");
    this.staus.updatestatus(this.statid,this.jobs).subscribe(recjres=>{
      console.log(recjres);
      this.res=recjres;
      this.insideres=this.res.message;
      console.log(this.insideres);
      this.toster.success(this.insideres,'message');
    })
  }
  ScheduleInterview(){
    this.jobs.js="InterviewScheduled";
    alert("alert");
    this.staus.updatestatus(this.statid,this.jobs).subscribe(recjres=>{
      console.log(recjres);
      this.res=recjres;
      this.insideres=this.res.message;
      console.log(this.insideres);
      this.toster.success(this.insideres,'message');
    })
  }

}
