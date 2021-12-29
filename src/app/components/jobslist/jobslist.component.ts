import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { jobsList } from 'src/app/models/jobs';
import { JobsService } from 'src/app/service/jobs.service';
import {MatTableDataSource} from '@angular/material/table';
import { jobpost } from 'src/app/models/postjob';
import { favmodel } from 'src/app/models/favjobs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-jobslist',
  templateUrl: './jobslist.component.html',
  styleUrls: ['./jobslist.component.css']
})
export class JobslistComponent implements OnInit,AfterViewInit{
  dataSource:any = new MatTableDataSource<jobsList>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  jobs:jobsList;
  jobsdata:any;
  job:jobpost;
  byemp:any;
  favourite:favmodel;
  userid=localStorage.getItem('userid');
  userrole=localStorage.getItem('usertype');
  userroleid=Number(this.userrole);
  favresponse:any;

  constructor(private jbs:JobsService,private toastr:ToastrService,private route:Router) {
    this.jobs=new jobsList();
    this.job=new jobpost();
    this.favourite=new favmodel();
   }

  ngOnInit(): void {
    this.getjobslist();
    
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
   
  }
  getjobs(){
    this.jbs.getjobs().subscribe(data=>{
      console.log('jobs',data);
     
      this.dataSource.data = data;
this.jobsdata=this.dataSource.data
      console.log(this.dataSource.data);
    })

  }
  getjobsbyemployee(){
    this.jbs.getjobsListbyEmployee(this.userid).subscribe(data=>{
      console.log('byemployer',data);
      this.byemp=data;
      console.log('byemployer', this.byemp.rows);
      this.jobsdata=this.byemp.rows;
     
    //   this.dataSource.data = data;
    //  this.jobsdata=this.dataSource.data
    //   console.log(this.dataSource.data);
    })
  }
  getjobslist(){
    if(this.userroleid===2){
this.getjobsbyemployee();
    }
    else{
      this.getjobs();
    }
  }
  fav(row:any){
  
    this.favourite.jobid=row.id;
    this.favourite.userid=Number(this.userid);
    console.log(this.favourite.userid)
this.jbs.Favjob(this.favourite).subscribe((favdata:favmodel)=>{
 
  console.log(favdata);
  // this.favresponse=favdata.message;

  this.toastr.success('jobs saved for future use');
})
  }

  jobdes(row:any){
this.route.navigate(['/jobdesc/',row.id,row.userid]);
  }
  edit(row:any){
   
    this.route.navigate(['jobpost/',row.id]);
  }
 

}
