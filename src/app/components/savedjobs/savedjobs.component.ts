import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { jobs } from 'src/app/models/jobs';
import { JobsService } from 'src/app/service/jobs.service';
import {MatPaginator} from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-savedjobs',
  templateUrl: './savedjobs.component.html',
  styleUrls: ['./savedjobs.component.css']
})
export class SavedjobsComponent implements OnInit,AfterViewInit{
  dataSource:any = new MatTableDataSource<jobs>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  jobz:jobs; 
  myjobs:any;
  displayedColumns: string[] = [];
  userid=localStorage.getItem('userid');
  user:any;
  jobsekerfav:any;
  constructor(private jobsser:JobsService,private route:Router,private to:ToastrService) { }

  ngOnInit(): void {
    this.getjobsforjobseekser();
    this.user=Number(this.userid);
  }
  getJobs(){
    this.jobsser.getjobs().subscribe(data=>{
      console.log(data);
      this.displayedColumns = ['companyName', 'joblocation', 'is_active'];
      this.dataSource.data = data;
    })
  }
  getjobsforjobseekser(){
  this.jobsser.getFavjobs(Number(this.userid)).subscribe((favjob=>{
    this.displayedColumns = ['jobtitle', 'city', 'maxsalary'];
    this.jobsekerfav=favjob;
    this.myjobs=this.jobsekerfav.rows;
    console.log(this.myjobs);
    
  }))
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
   
  }
  FilterFunction(event:Event){
 
    const filterData=(event.target as HTMLInputElement).value;
    
    this.dataSource.filter=filterData.trim().toLowerCase();
    console.log(this.dataSource.filter);
    // if(this.dataSource.paginator){
    //   this.dataSource.paginator.firstPage();
    // }
  }
  jobdes(row:any){
    this.route.navigate(['/jobdesc/',row.id,this.user]);
      }
      deleteSavedjobs(i){
        alert(i);
   
        this.jobsser.deletesavedjobs(i).subscribe((data)=>{
          console.log(data);
      
          this.to.success('SavedJobs deleted SuccessFully','message');
          this.getjobsforjobseekser();
        })
      }


}
