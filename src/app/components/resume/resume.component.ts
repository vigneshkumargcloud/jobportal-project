import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';
import {jsPDF} from "jspdf";
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  @ViewChild('content',{static:false}) el!:ElementRef;
  userid=localStorage.getItem('userid');
  proid:any;
  constructor(private pfs:ProfileService,private route:Router,private _Activatedroute: ActivatedRoute) {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.proid = params.get('id'); 
      
  });
   }
  dataarray:any;
  userprofile:any;
  userprofilename:any;
  currentsalary:any;
  educationdetails:any;
  edudetails:any;
  explist:any;
  exp:any;
  useraccount=localStorage.getItem('userprofile');
  ngOnInit(): void {
    if(this.useraccount){
      this.getProfileimage();
    }
    this.Educationdetails();
    this.Experiencedetails();
     this.userprofilename=localStorage.getItem('user');
  }
  getProfileimage(){
    this.pfs.getprofile(Number(this.userid)).subscribe(data=>{
      console.log(data);
      this.dataarray=data;
      console.log(this.dataarray);
      this.userprofile=this.dataarray.message[0].profileimg;
      this.currentsalary=this.dataarray.message[0].current_salary;
      

    })
  }
  Educationdetails(){
    this.pfs.Educationdetails(Number(this.userid)).subscribe(data=>{
      console.log(data);
      this.educationdetails=data;
      console.log(this.educationdetails.message);
      this.edudetails=this.educationdetails.message;
      // this.userprofile=this.dataarray.message[0].profileimg;
      // this.currentsalary=this.dataarray.message[0].current_salary;
      

    })
  }
  Experiencedetails(){
    this.pfs.Experience(Number(this.userid)).subscribe(data=>{
      console.log(data);
      this.explist=data;
      console.log(this.explist.message);
      this.exp=this.explist.message;
      // this.userprofile=this.dataarray.message[0].profileimg;
      // this.currentsalary=this.dataarray.message[0].current_salary;
      

    })
  }

  // downloadPdf(){
  //   alert("pdf");
  //   let pdf = new jsPDF('p','pt','a4');
  //   pdf.html(this.el.nativeElement,{
  //     callback:(pdf)=>{
  //       pdf.save(this.userprofilename+'resume.pdf');
  //     }
  //   })
  // }
  downloadPdf(){
    var data = document.getElementById('content');
    html2canvas(data).then(canvas => {
        var imgWidth = 400;
        // var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;

        const contentDataURL = canvas.toDataURL('image/png')
        let pdf = new jsPDF('p', 'mm', 'a2'); 
        var position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        
        pdf.save("Wallet.pdf");
    });
  }
  Editresume(row:any){
    this.route.navigate(['/education/',row.user_account_id]);
  }


}
