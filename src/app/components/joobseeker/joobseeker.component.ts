import { Component, OnInit } from '@angular/core';
import { register } from 'src/app/models/registermodel';
import { UsersService } from 'src/app/service/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-joobseeker',
  templateUrl: './joobseeker.component.html',
  styleUrls: ['./joobseeker.component.css']
})
export class JoobseekerComponent implements OnInit {
  reges:register;
  emparray;
  constructor(private user:UsersService,private toastr:ToastrService) {
    this.reges=new register();
  }

  ngOnInit(): void {
    this.getJobSeeker();
  }
  getJobSeeker(){
    this.user.getJobseeker().subscribe(data=>{
      console.log(data);
      this.emparray=data;
    })
   }



 deleteJobSeeker(i){
   alert("jobseeker");
   
    this.user.deleteJobseeker(i).subscribe((data)=>{
      // this. getJobSeeker();
      console.log("data's dele",data);
      this.toastr.success('JobType deleted SuccessFully','message');
    })
  }

}
