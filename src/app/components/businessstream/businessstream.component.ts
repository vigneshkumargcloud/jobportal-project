import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { businesStream } from 'src/app/models/bst model';
import { BstService } from 'src/app/service/bst.service';


@Component({
  selector: 'app-businessstream',
  templateUrl: './businessstream.component.html',
  styleUrls: ['./businessstream.component.css']
})
export class BusinessstreamComponent implements OnInit {
  bst:businesStream;
  stream;
  constructor(private bsts:BstService,private tos:ToastrService) {
    this.bst=new businesStream();
   }

  ngOnInit(): void {
    this.getBusinessType();
  }
  getBusinessType(){
    this.bsts.getBusinessType().subscribe(data=>{
      console.log(data);
      this.stream=data;
    })
  }
  BusinessTypePosted(form:NgForm){
    // console.log(this.jobcateg.id);
    // console.log(this.jobcateg);
    this.bsts.PostBusinessType(this.bst).subscribe((data:businesStream)=>{
      console.log(data);
     
      this.tos.success('Business stream added SuccessFully','message');
      form.reset();
      this.getBusinessType();

    })
  }
  EditBusinesstype(row:any){
    this.bst.id=row.id;
    alert(this.bst.id);
this.bst.business_stream_name=row.business_stream_name;
  }
  updateJobType(form:NgForm){

    this.bsts.updateBusinessStream(this.bst.id,this.bst).subscribe(res=>{
      console.log(res);
      this.tos.success('Business Stream updated SuccessFully','message');
      this.getBusinessType();
      form.reset();

    })
  }


}
