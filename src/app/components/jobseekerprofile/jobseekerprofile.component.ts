import { Component, ElementRef, OnInit } from '@angular/core';
import { CandidateProfile } from '../../models/profile';
import { RegisterService } from 'src/app/service/register.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-jobseekerprofile',
  templateUrl: './jobseekerprofile.component.html',
  styleUrls: ['./jobseekerprofile.component.css']
})
export class JobseekerprofileComponent implements OnInit {
  skills: any;
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

  cities: any;
  CandidatePro: CandidateProfile;
  keySkills: CandidateProfile[] = [];
  userid = localStorage.getItem('userid');
  useraccount = localStorage.getItem('userprofile');
  usermessage;
  username;
  user;
  profileform:FormGroup;
  paramid: any;
  email:any;
  userprofile:any;
  profilebyid:any;
  profileid:any;
  proid:any;
  resmessage:any;
  responsefrom:any;
  edudetails:any;
  eduiner:any;
  bflag:boolean=true;
  constructor(private Reg: RegisterService, private profile: ProfileService, private router: Router, private _Activatedroute: ActivatedRoute, private route: Router,private tos:ToastrService) {
    this.CandidatePro = new CandidateProfile();
    this._Activatedroute.paramMap.subscribe(params => { 
      this.proid = params.get('id'); 
      
  });
   
  }

  ngOnInit(): void {


    
    this.getEducationByUserid();
    this.getCity();
    this.getSkills();
   
    this.keySkills.push(this.CandidatePro);
    this.user = Number(this.userid);
    console.log(this.user);
    this.profileform = new FormGroup({
      // id:new FormControl(),
      user_account_id: new FormControl(this.userid, [Validators.required, Validators.minLength(3)]),
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      current_salary: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      contactNumber: new FormControl('', [Validators.required]),
      profileimg: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),

    });
    this.getUser();
    this.getEducationByUserid();
   
    // if(this.userid) {

    //   this._Activatedroute.paramMap.subscribe(params => { 
    //     this.userid = params.get('id'); 
        
        
    // });
    
   
    // }
    if(this.proid){
      this.getProfile();
    }
    
  }
  getCity() {
    this.cities = [{ "name": "delhi" }, { "name": "pune" }, { "name": "coimbatore", }];
    console.log(this.cities);
  }
 
  
  getSkills() {

    this.skills = [
      { "name": "angular" },
      { "name": "node" },
      { "name": "html" }
      , { "name": "java" },
      { "name": "mongodb" }
    ]

  }
  getskilremoved(index: number) {
    this.keySkills.splice(index);
  }
  submit() {
    console.log(this.CandidatePro);
  }
  addfrm() {
    this.CandidatePro = new CandidateProfile();
    this.keySkills.push(this.CandidatePro);
  }
  getUser() {
    this.Reg.getUserById(this.userid).subscribe(data => {
      console.log('data', data);
      this.usermessage = data;
      console.log("usermessae",this.usermessage.message[0].username);
      this.username = this.usermessage.message[0].username;
      console.log('this.username',this.username);
      this.CandidatePro.email = this.usermessage.message[0].email;
      this.CandidatePro.contactNumber = this.usermessage.message[0].contactNumber;
      this.email=this.usermessage.message[0].email;
      var firstname=this.usermessage.message[0].email;
      var last_name=this.usermessage.message[0].last_name;
      var current_salary=this.usermessage.message[0].current_salary;
      console.log(this.email);
      console.log(this.CandidatePro.username);
      console.log(this.usermessage.message.length);
      this.userprofile=this.usermessage.message.length;
      console.log(this.email);

    })
  }
 

  onupload() {
    if(!this.proid){
    
      const imageblob = this.fileInput.nativeElement.files[0];
  
      const file = new FormData();
      // file.set('id',this.CompanyForm.get('id').value);
      file.set('profileimg', imageblob);
      file.append('user_account_id', this.profileform.get('user_account_id').value);
      file.append('first_name', this.profileform.get('first_name').value);
      file.append('last_name', this.profileform.get('last_name').value);
      file.append('username', this.profileform.get('username').value);
      file.append('current_salary', this.profileform.get('current_salary').value);
      file.append('email', this.profileform.get('email').value);
      file.append('contactNumber', this.profileform.get('contactNumber').value);
      file.append('address', this.profileform.get('address').value);
      this.profile.PostCandidateProfile(file).subscribe(res => {
        console.log(res);
        this.responsefrom=res;
        this.resmessage= this.responsefrom.message;
        this.tos.success(this.resmessage,'message');
        localStorage.setItem('userprofile', 'true');
        this.ngOnInit();
        location.reload();
      })
    }
    else{
  
      const imageblob = this.fileInput.nativeElement.files[0];
  
      const file = new FormData();
      // file.set('id',this.CompanyForm.get('id').value);
      file.set('profileimg', imageblob);
      file.append('user_account_id', this.profileform.get('user_account_id').value);
      file.append('first_name', this.profileform.get('first_name').value);
      file.append('last_name', this.profileform.get('last_name').value);
      file.append('username', this.profileform.get('username').value);
      file.append('current_salary', this.profileform.get('current_salary').value);
      file.append('email', this.profileform.get('email').value);
      file.append('contactNumber', this.profileform.get('contactNumber').value);
      file.append('address', this.profileform.get('address').value);
      console.log(this.profileform);
      this.profile.updateCandidateProfile(Number(this.userid),file).subscribe(res => {
        console.log(res);
        this.responsefrom=res;
        this.resmessage= this.responsefrom.message;
        this.tos.success(this.resmessage,'message');
        // localStorage.setItem('userprofile', 'true');
        this.ngOnInit();
        location.reload();
      })
      
    }
  
  }
  getEducationByUserid(){
    this.profile.Educationdetails(this.userid).subscribe(edu=>{
      console.log(edu);
      this.edudetails=edu;
      this.eduiner=this.edudetails.message;
      console.log('edumessage',this.edudetails.message);
      console.log(this.eduiner);
      for(var i=0;i<this.eduiner.length;i++){
        if(this.eduiner[i].user_account_id!=Number(this.userid)){
       
          this.bflag=true;
        }
        else{
          this.bflag=false;
        }
      }
      
    })
  }

  edu() {
 
    if(this.bflag===true){
      this.route.navigate(['/', 'education']);
    }
    else{
      this.route.navigate(['education/',this.userid]);
      this.bflag===false;
     
    }
  }
  resume() {
    this.router.navigate(['/', 'resume']);
  }
  getProfile(){
    this.profile.getprofile(this.userid).subscribe(data=>{
      console.log("data",data);
      this.profilebyid=data;
      this.profileid=this.profilebyid.message;
      console.log(this.profileid);
      
      this.profileform.patchValue({
        email:this.profileid[0].email,
        first_name:this.profileid[0].first_name,
       
        last_name:this.profileid[0].last_name,
        username:this.profileid[0].username,
        current_salary:this.profileid[0].current_salary,
        address:this.profileid[0].address,
        // profileimg:this.profileid[0].profileimg
      });
      console.log(this.profileform);
    })
  }


}
