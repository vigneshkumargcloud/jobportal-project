import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { admin } from 'src/app/models/login_model';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
adm:admin;
userid:any;
userlogid:any;
  constructor(private logged:LoginService,private router:Router,private tos:ToastrService) { 
    this.adm=new admin();
  }

  ngOnInit(): void {
  }
adminlogin(form:NgForm){
    this.adm.user_type_id=1;
    console.log(this.adm.user_type_id);
   this.logged.JObseekerLogin(this.adm).subscribe((data:admin)=>{
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
        localStorage.setItem('userid',this.userlogid);
        console.log(this.userlogid);
      }
  
    
     this.tos.success('JobSeeker Loggedin SuccessFully','message');
     this.router.navigate(['/','CandidateDash']);
  
   })
  }

}
