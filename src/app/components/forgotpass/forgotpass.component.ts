import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { forgotPass } from 'src/app/models/forgotpassmodel';
import { ForgotService } from 'src/app/service/forgot.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {
forgte:forgotPass;
userid=localStorage.getItem('userid');
user;
  constructor(private forge:ForgotService,private tos:ToastrService,private router:Router) { 
    this.forgte=new forgotPass();
  }

  ngOnInit(): void {
    this.user=Number(this.userid);
  }
  forgot(form:NgForm){
this.forge.forgotpass(this.user,this.forgte).subscribe(data=>{
  console.log(data);
  this.tos.success("password changed successfully");
   this.router.navigate(['/','signin']);
})
  }

}
