import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JobCategory } from 'src/app/models/jobscategory'; 
import { JobcategoryService } from 'src/app/service/jobcategory.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-jobcategory',
  templateUrl: './jobcategory.component.html',
  styleUrls: ['./jobcategory.component.css']
})
export class JobcategoryComponent implements OnInit {

jobcateg:JobCategory;
getjobacte;

displayedColumns: string[] = [];
  constructor(private jbs:JobcategoryService,private tos:ToastrService) { 
    this.jobcateg=new JobCategory();
    
  }

  ngOnInit(): void {
    this.getJob();
  }
  Jobcategory(form:NgForm){
    // console.log(this.jobcateg.id);
    // console.log(this.jobcateg);
    this.jbs.jobscategory(this.jobcateg).subscribe((data:JobCategory)=>{
      console.log(data);
     
      this.tos.success('Jobcategory added SuccessFully','message');
      form.reset();
      this.getJob();

    })
  }

  getJob(){
    this.jbs.getjobsCategory().subscribe(data=>{
     this.getjobacte=data;
    })
  }
  deleteJobcat(i){
   
    this.jbs.deletejobcategory(i).subscribe((data)=>{
      this.getJob();
      console.log("data's dele",data);
      this.tos.success('Jobcategory deleted SuccessFully','message');
    })
  }
  EditJobcat(row:any){
    this.jobcateg.id=row.id;
    alert(this.jobcateg.id);
this.jobcateg.jobcate=row.jobcate
  }
  updateJobCategory(){
alert(this.jobcateg.id);
    this.jbs.updatejobCategory(this.jobcateg.id,this.jobcateg).subscribe(res=>{
      console.log(res);
      this.tos.success('Jobcategory updated SuccessFully','message');
      this.getJob();

    })
  }





}
