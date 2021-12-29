import { Component, OnInit,ViewChild,AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { appliedjobs } from 'src/app/models/appiledjobs';
import { JobsService } from 'src/app/service/jobs.service';
import { Router } from '@angular/router';
import { StatusService } from 'src/app/service/status.service';

@Component({
  selector: 'app-appliedjobs',
  templateUrl: './appliedjobs.component.html',
  styleUrls: ['./appliedjobs.component.css']
})
export class AppliedjobsComponent implements OnInit,AfterViewInit {
  jobsmo:appliedjobs;
  eachjob:any;
  idjob:any;
  dataSource:any = new MatTableDataSource<appliedjobs>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns:string[]=[];
  constructor(private jobs:JobsService,private route:Router,private stat:StatusService) { 
    this.jobsmo=new appliedjobs();
  }
  userid=localStorage.getItem('userid');
  usertype=localStorage.getItem('usertype');
  datasoure:any;
  ngOnInit(): void {
    
    
    if(Number(this.usertype)==2){
      this.getAppforEmployee();
    }
    else{
      this.getapplied();
    }
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getapplied(){
    alert("user");
    this.jobs.getappiledjobsforuser(this.userid).subscribe(data=>{
      console.log(data);
      this.datasoure=data;
      this.dataSource.data=this.datasoure.message;
    console.log(this.dataSource.data);
    this.displayedColumns = ['jobtitle', 'description', 'maxsalary','city','js'];
    })
  }
  getAppforEmployee(){
    var status=1;
    this.jobs.getAppforemp(status,this.userid).subscribe(res=>{
      console.log('status',res);
      this.datasoure=res;
      this.dataSource.data=this.datasoure.message;
      this.displayedColumns = ['jobtitle', 'description', 'maxsalary','city','username','js','view'];
    })
  }
  FilterFunction(event:Event){
    const filterData=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterData.trim().toLowerCase();
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
  redirect(k,i){
    this.stat.jobbyid(i).subscribe(res=>{
      console.log(res);
      this.idjob=res;
      this.eachjob=this.idjob.message;
      console.log("by",this.eachjob[0].js);
      if(this.eachjob[0].js=="applied"){
        alert("viewed")
        this.jobsmo.js="viewed"
        this.stat.updatestatus(i,this.jobsmo).subscribe(su=>{
          console.log(su);
        })
        this.route.navigate(['/resumeb/',k,i]);
      }
      else{
        this.route.navigate(['/resumeb/',k,i]);
      }
    })
   
  }

}
