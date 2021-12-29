import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { forgot } from 'src/app/models/forgotmodel';
import { ForgotService } from 'src/app/service/forgot.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotemail',
  templateUrl: './forgotemail.component.html',
  styleUrls: ['./forgotemail.component.css']
})
export class ForgotemailComponent implements OnInit {
  for:forgot;
  userid=localStorage.getItem('userid');
  res:any;
 
  constructor(private forgo:ForgotService,private toste:ToastrService,private router:Router) {
    this.for=new forgot();
   }

  ngOnInit(): void {
   
  }
  PostEmail(form:NgForm){
   
    this.forgo.forgotpassword(this.for).subscribe(email=>{
      console.log(email);
      this.res=email;
      // console.log(this.res.message);
      var msg=this.res.message;
      var user=this.res.result;
      console.log(user[0].id);
      localStorage.setItem('userid',user[0].id);
      this.toste.success(msg,'message');
      // this.router.navigate(['/','EmployeeDash']);

      
      

    });

  }
 

}
