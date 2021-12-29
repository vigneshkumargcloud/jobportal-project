import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
// import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/service/profile.service';
import { CandidateProfile } from 'src/app/models/profile';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userrole=localStorage.getItem('usertype');
  userid=localStorage.getItem('userid');
  useraccount=localStorage.getItem('userprofile');
userName:string='';
profilename:string;
dataarray:any;
userprofile:any;
userprofiledata:any;
profiledetail:any;
profilelist:any;
boolname:boolean=true;

filter:any;
profilelistMessage: CandidateProfile[] = [];


 
  constructor(private login:LoginService,private route:Router,private pfs:ProfileService) { }

  ngOnInit(): void {
    // this.getAllProfile();
    console.log('nouserrole',this.userrole);
   console.log(this.boolname);
   
    console.log(this.userid);
    console.log(this.userName);
    if(localStorage.getItem("user") === null){
   this.userName='';
   console.log("user not found");
  
    }
    else{
      this.userName=localStorage.getItem('user');
      console.log('usersname',this.userName);
       this.profilename=this.userName;
            console.log( this.profilename);
            this.getAllProfile();
            this.getProfile();
            console.log('boolname',this.boolname);
    }
  
   
    

  
  }
  isloggedin(){
    // this.msg.warning("your are not logged in");
    return !!localStorage.getItem('id_token');
   

  }
  logout(){
   this.login.logout();
  
   this.route.navigate(['signin']);
  }
  getProfile(){
    this.pfs.getprofile(this.userid).subscribe(data=>{
      console.log(data);
      this.userprofiledata=data;
      this.profiledetail=this.userprofiledata.message;
      console.log(this.profiledetail);
    })
  }
  getAllProfile(){
    this.pfs.getprofilelist().subscribe(data=>{
      console.log('profiles',data);
      this.profilelist=data;
      console.log(this.profilelist);
      this.profilelistMessage=this.profilelist.message;
      console.log('profilemessage',this.profilelistMessage);
    for(var k=0;k<this.profilelistMessage.length;k++){
      if(this.profilelistMessage[k].user_account_id!=Number(this.userid)){
     console.log("true");
  
     this.boolname=true;
      }
      else{
        this.boolname=false;
      }
      console.log('number',Number(this.userid));
      console.log(this.profilelistMessage[k].user_account_id);
    }
      this.profile();
    })
  }
  profile(){
    console.log('false',this.boolname);
    if(this.boolname===true){
     
      this.route.navigate(['seeker']);
    }
    else{
      
      this.route.navigate(['seeker/',this.userid]);
      this.boolname===false;
      this.getProfileimage();
    }

   
   
  }
  getProfileimage(){
    this.pfs.getprofile(Number(this.userid)).subscribe(data=>{
      console.log(data);
      this.dataarray=data;
      console.log(this.dataarray);
      this.userprofile=this.dataarray.message[0].profileimg;

    })
  }
   
 

}
