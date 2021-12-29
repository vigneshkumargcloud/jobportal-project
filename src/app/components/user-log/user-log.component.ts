import { Component, OnInit } from '@angular/core';
import { gettable } from 'src/app/models/gettables'; 
import { CandidateService } from 'src/app/service/candidate.service';

@Component({
  selector: 'app-user-log',
  templateUrl: './user-log.component.html',
  styleUrls: ['./user-log.component.css']
})
export class UserLogComponent implements OnInit {
  getdataarray;
  dataSource;
  displayedColumns:string[]=[];

  constructor(private ser:CandidateService) { }

  ngOnInit(): void {
    this.getdatas();
  }
  getdatas(){
    this.ser.getAlumbs().subscribe(data=>{
      this.getdataarray=data;
      console.log(this.getdataarray);
      this.displayedColumns = ['userId', 'id', 'title', 'completed'];
      this.dataSource =  this.getdataarray;
    })
     }
}
