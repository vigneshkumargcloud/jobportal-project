import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { register } from 'src/app/models/registermodel';
import { RegisterService } from 'src/app/service/register.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
reg:register;
res:register;
  constructor(private regse:RegisterService, private router:Router,private tos:ToastrService) {
    this.reg=new register();

   }

  ngOnInit(): void {

    
   
  }
  onRegister(form:NgForm){
    alert("OnRegister");
    this.reg.user_type_id=2;
    let s = "2005-07-08T11:22:33+0000";
    this.reg.date_of_birth="37839";




    console.log(this.reg.date_of_birth);
   
  
    

    this.reg.reg_date="890009";
         console.log(this.reg);
         this.regse.register(this.reg).subscribe((data:register)=>{
           console.log(data);
           this.tos.success('New Employeer Added SuccessFully','message');
           this.router.navigate(['/','signin']);
           
         });

  }

  onJobseekerRegister(form:NgForm){
    alert("OnJobSeekerRegister");
    this.reg.user_type_id=3;
    this.reg.date_of_birth="37839";
     console.log(this.reg.date_of_birth);
          // this.reg.reg_date="890009";
         console.log(this.reg);
         this.regse.register(this.reg).subscribe((data:register)=>{
           console.log(data);
             this.res=data;
           this.tos.success('New JobSeeker Added SuccessFully','message');
           this.router.navigate(['/','signin']);
           
         });

  }

}
