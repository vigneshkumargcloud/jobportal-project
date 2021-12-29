import { Component, OnInit,ViewChild,AfterViewInit} from '@angular/core';
import { company } from 'src/app/models/compnay';
import { CompanyService } from 'src/app/service/company.service';
import { DomSanitizer } from '@angular/platform-browser';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.css']
})
export class CompanylistComponent implements OnInit,AfterViewInit {
  dataSource:any = new MatTableDataSource<company>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns:string[]=[];
  SERVER_UPLOAD_DIR="http://localhost:3000/images/";
  cmpn:company;
  cmparray:any;
  thumbnail:any;
  usercount:any;
  useraccountlist:any;
 
  constructor(private cmps:CompanyService,private sanitizer: DomSanitizer) { 
    this.cmpn=new company();
  }

  ngOnInit(): void {
    this.getcompanylist();
    // this.companylist();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getcompanylist(){
    this.cmps.getCompanyList().subscribe(data=>{
      this.dataSource.data=data;
    console.log( this.dataSource.data);
    this.displayedColumns = ['company_name', 'profile_desc', 'company_website','companyimage'];
    })
  }
  FilterFunction(event:Event){
    const filterData=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterData.trim().toLowerCase();
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
  // companylist(){
  //   this.cmps.getCompanyListid(49).subscribe(data=>{
  //     console.log(data);
  //     this.usercount=data;
  //     this.useraccountlist=this.usercount.url;


  //   });
  // }

}
