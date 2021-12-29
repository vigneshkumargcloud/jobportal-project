import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { edumodel } from 'src/app/models/edumodel';
import { ProfileService } from 'src/app/service/profile.service';
import { expere } from 'src/app/models/exper';
import { ToastrService } from 'ngx-toastr';
import { skills } from 'src/app/models/skills';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-educationdetails',
  templateUrl: './educationdetails.component.html',
  styleUrls: ['./educationdetails.component.css']
})
export class EducationdetailsComponent implements OnInit {
  edu:edumodel;
  ex:expere;
  skl:skills;
  detailsarray=[];
  experlist=[];
  skillset=[];
  proid:any;
  edudetail:any;
  edudemsg:any;
  experience:any;
  skill:any
  edlength:any;
  editedu:boolean;
  eduid:boolean=true;
  userid=localStorage.getItem('userid');
  constructor(private profile:ProfileService,private tsrt:ToastrService, private _Activatedroute: ActivatedRoute) { 
this.edu=new edumodel();
this.ex=new expere();
this.skl=new skills();
this._Activatedroute.paramMap.subscribe(params => { 
  this.proid = params.get('id'); 
       
});

  }

  ngOnInit(): void {
    this.edu=new edumodel();
    this.detailsarray.push(this.edu);
    this.ex=new expere();
    this.experlist.push(this.ex);
    this.skl=new skills();
    this.skillset.push(this.skl);
  
    if(this.proid){
      this.edu=new edumodel();
      this.detailsarray.push(this.edu);
      this.ex=new expere();
      this.experlist.push(this.ex);
      this.skl=new skills();
      this.skillset.push(this.skl);
      this.getEducation();
      this.getExperience();
      this.getSkills();
     
     
    }
    else{
      if(this.proid && this.eduid){
        this.edu=new edumodel();
        this.detailsarray.push(this.edu);
        this.ex=new expere();
        this.experlist.push(this.ex);
        this.skl=new skills();
        this.skillset.push(this.skl);
      }
    
    }
  }
  addfrm(){
    this.edu=new edumodel();
    this.detailsarray.push(this.edu);
  }
  addedit(){
    alert(this.editedu);
    this.edu=new edumodel();
    this.detailsarray.push(this.edu);
    this.editedu=true;
  
  }
  addexpe(){
    this.ex=new expere();
    this.experlist.push(this.ex);
  }
  addskills(){
    this.skl=new skills();
    this.skillset.push(this.skl);
  }
  rem(index){
    this.detailsarray.splice(index);
  }
  edufordelete(index){
    this.detailsarray.splice(index);
  }
  removeexper(index){
    this.experlist.splice(index);
  }
  removeSkills(index){
    this.skillset.splice(index);
  }
  addEdu(form:NgForm){
    console.log(this.detailsarray);
    if(!this.proid){
      alert("post");
      for(var i=0;i<this.detailsarray.length;i++){
        this.detailsarray[i].user_account_id=Number(this.userid);
        
        this.profile.Education(this.detailsarray[i]).subscribe(data=>{
          console.log(data);
          
          })
      }
      this.tsrt.success('Education Details added successfully','message');
      form.reset();

    }
    else{
     
      alert("update");
      for(var i=0;i<this.detailsarray.length;i++){
        this.detailsarray[i].user_account_id=Number(this.userid);
         alert(this.detailsarray[i].id)
        this.profile.educationput(this.detailsarray[i].id,this.detailsarray[i]).subscribe(data=>{
          console.log(data);
          console.log(this.detailsarray[i]);
          })
         

        }
        this.tsrt.success('Education Details updated successfully','message');
        this.ngOnInit();
    }

   

  }
  expe(form:NgForm){
    alert("add");
    if(!this.proid){
      for(var i=0;i<this.experlist.length;i++){
        this.experlist[i].user_account_id=Number(this.userid);
       
        this.profile.experience(this.experlist[i]).subscribe(data=>{
          console.log(data);
         
          })
      }
      this.tsrt.success('Work Experience added successfully','message');
      form.reset(); 
    }
    else{
      alert("update");
      for(var i=0;i<this.experlist.length;i++){
        this.experlist[i].user_account_id=Number(this.userid);
       
        this.profile.workupdate(this.experlist[i].id,this.experlist[i]).subscribe(data=>{
          console.log(data);
         
          })
      }
      this.tsrt.success('Work Experience updated successfully','message');
      this.ngOnInit();
    }
   
  }
  skills(form:NgForm){
    if(!this.proid){
      for(var i=0;i<this.skillset.length;i++){
        this.skillset[i].user_account_id=Number(this.userid);
       
        this.profile.skills(this.skillset[i]).subscribe(data=>{
          console.log(data);
         
          })
      }
      this.tsrt.success('skills added successfully','message');
      form.reset();
    }
    else{
      for(var i=0;i<this.skillset.length;i++){
        this.skillset[i].user_account_id=Number(this.userid);
       
        this.profile.skillsupdate(this.skillset[i].id,this.skillset[i]).subscribe(data=>{
          console.log(data);
         
          })
      }
      this.tsrt.success('skills updated successfully','message');
      this.ngOnInit();
    }
    

  }
  getEducation(){
    this.edu=new edumodel();
    this.detailsarray.push(this.edu);
    // for(var i=0;i<this.skillset.length;i++){
    // }
   this.profile.Educationdetails(this.userid).subscribe(data=>{
     console.log('this users details',data);
     this.edudetail=data;
     console.log('details',this.detailsarray.length);
     console.log( this.edudetail.message.length);
     var len=this.edudetail.message.length
     this.detailsarray.length=len;
     for(var i=0;i<this.detailsarray.length;i++){
    
       console.log('degree name',this.edudetail.message[i].degreename);
       this.detailsarray[i].instutename=this.edudetail.message[i].instutename;
       this.detailsarray[i].degreename=this.edudetail.message[i].degreename;
       this.detailsarray[i].percentage=this.edudetail.message[i].percentage;
       this.detailsarray[i].id=this.edudetail.message[i].id;
     console.log(this.edudetail.message[i].length);
     alert(this.edudetail.message.length);
     this.edlength=this.edudetail.message.length;
     }
  
   })
  
   
  }
  getExperience(){
    this.edu=new edumodel();
    this.experlist.push(this.edu);
  
   this.profile.Experience(this.userid).subscribe(data=>{
     console.log('this users details',data);
     this.experience=data;
    
     var len=this.experience.message.length
     this.experlist.length=len;
     for(var i=0;i<this.experlist.length;i++){
    
       console.log('degree name',this.experience.message[i].Companyname);
       this.experlist[i].Companyname=this.experience.message[i].Companyname;
       this.experlist[i].designation=this.experience.message[i].designation;
       this.experlist[i].yearsworked=this.experience.message[i].yearsworked;
       this.experlist[i].current_salary=this.experience.message[i].current_salary;
       this.experlist[i].id=this.experience.message[i].id;

     alert(this.experlist[i]);
     }
  
   })
  }
  getSkills(){
    this.skl=new skills();
    this.skillset.push(this.skl);
  
   this.profile.skillsbyid(this.userid).subscribe(data=>{
     console.log('this skills',data);
     this.skill=data;
    
     var len=this.skill.message.length;
     this.skillset.length=len;
     for(var i=0;i<this.skillset.length;i++){
    
       console.log('degree name',this.skill.message[i].skillname);
       this.skillset[i].skillname=this.skill.message[i].skillname;
       this.skillset[i].id=this.skill.message[i].id;

    
     }
  
   })
  }
  deleteskills(b){
   this.profile.deleteskills(b).subscribe((data)=>{
      this.tsrt.success('Skills deleted SuccessFully','message');
    });
    this.ngOnInit();
  }
  deletework(b){
    this.profile.deletework(b).subscribe((data)=>{
       this.tsrt.success('Work Experience deleted SuccessFully','message');
     });
     this.ngOnInit();
   }
   delete(b){
    this.profile.deleteeducationdetails(b).subscribe((data)=>{
       this.tsrt.success('Education details deleted SuccessFully','message');
     });
     this.ngOnInit();
   }
   addedudetails(row:any){
    alert(row.percentage);
    row.user_account_id=Number(this.userid);
    var ob={user_account_id:row.user_account_id,percentage:row.percentage,degreename:row.degreename,instutename:row.instutename}
 
      
      this.profile.Education(ob).subscribe(data=>{
        console.log(data);
        
        })

    this.tsrt.success('New Education Details added successfully','message');
    this.ngOnInit();
   }
  
}
