import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControlName, NgForm } from '@angular/forms';
import { company } from 'src/app/models/compnay';
import { CompanyService } from 'src/app/service/company.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-createcompany',
  templateUrl: './createcompany.component.html',
  styleUrls: ['./createcompany.component.css']
})
export class CreatecompanyComponent implements OnInit {
  @ViewChild('fileInput',{static:false}) fileInput:ElementRef;
 
  imageurl="/assets/images/companydefault.jpg";
  fiileupload:File=null;
  CompanyForm
  imageSrc: string;
  companyid:any;
  constructor(private cmps:CompanyService,private tos:ToastrService) { }

  cmpn:company;
  userid=localStorage.getItem('userid');
  company:any;

  ngOnInit(): void {
    this.cmpn=new company();
    this.CompanyForm = new FormGroup({
      id:new FormControl(),
      company_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      profile_desc: new FormControl('', [Validators.required]),
      establishment_date: new FormControl('', [Validators.required]),
      company_website: new FormControl('', [Validators.required]),
      business_sid: new FormControl('', [Validators.required]),
      companyimage: new FormControl('', [Validators.required]),
      uid: new FormControl(this.userid, [Validators.required]),
    });
    
     
  }
  // onFileChange(event) {
  //   const reader = new FileReader();
     
  //   if(event.target.files && event.target.files.length) {
  //     const [file] = event.target.files;
  //     reader.readAsDataURL(file);
     
  //     reader.onload = () => {
    
  //       this.imageSrc = reader.result as string;
      
  //       this.CompanyForm.patchValue({
  //         fileSource: reader.result
  //       });
    
  //     };
    
  //   }
  // }
 

  
  onupload(){
const imageblob=this.fileInput.nativeElement.files[0];

const file= new FormData();
// file.set('id',this.CompanyForm.get('id').value);
file.set('companyimage',imageblob);
file.append('company_name',this.CompanyForm.get('company_name').value);
file.append('profile_desc',this.CompanyForm.get('profile_desc').value);
file.append('establishment_date',this.CompanyForm.get('establishment_date').value);

file.append('company_website',this.CompanyForm.get('company_website').value);
file.append('business_sid',this.CompanyForm.get('business_sid').value);
file.append('uid',this.CompanyForm.get('uid').value);


this.cmps.PostCompanyDetails(file).subscribe((data:company)=>{
  console.log(data);
  this.companyid=data;
 this.company=this.companyid.rows.insertId;
 console.log(this.companyid)
  console.log(file);
    this.tos.success('Company  added SuccessFully','message');
    localStorage.setItem('companyid',this.company);
    this.ngOnInit();
})
  }

}
