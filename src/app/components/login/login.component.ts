import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { login } from 'src/app/models/login_model';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employeer } from 'src/app/models/login_model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
log:login;
empe:Employeer;
userid:any;
userlogid:any;
  constructor(private logged:LoginService, private router:Router,private tos:ToastrService) { 
this.log=new login();
this.empe=new Employeer();

  }

  ngOnInit(): void {
  }
jobseekerlogin(form:NgForm){
  this.log.user_type_id=3;
  console.log(this.log.user_type_id);
 this.logged.JObseekerLogin(this.log).subscribe((data:login)=>{
  //  if(data){
  //    this.logged.JObseekerLogin(data)
  //  }
   console.log("token",data.token);
   console.log("token",data.username);
   console.log("token",data.user_type_id);
    if(data){
      this.logged.storetoken(data.token,data.username,data.user_type_id);
      console.log(data);
      this.userid=data;
      
      this.userlogid=this.userid.message[0].id;
      this.userlogid=this.userid.message[0].id;
      localStorage.setItem('userid',this.userlogid);
      console.log(this.userlogid);
    }

  
   this.tos.success('JobSeeker Loggedin SuccessFully','message');
   this.router.navigate(['/','jobpost']);

 })
}
Email(){
  alert("forgot");
  this.router.navigate(['/','forgotpass']);

}
EmployeerLogin(form:NgForm){
  this.log.user_type_id=2;
  this.logged.EmployeerLogin(this.empe).subscribe((data:Employeer)=>{
    if(data){
      this.logged.Employeertoken(data.token,data.companyname,data.user_type_id);
      console.log(data);
      this.userid=data;
      
      this.userlogid=this.userid.message[0].id;
      localStorage.setItem('userid',this.userlogid);
      console.log(this.userlogid);
    }

    console.log(data);
    this.tos.success('Employeer Loggedin SuccessFully','message');
    this.router.navigate(['/','EmployeeDash']);
 
  })
 }
}
