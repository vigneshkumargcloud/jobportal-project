import { Component, OnInit } from '@angular/core';
import { register } from 'src/app/models/registermodel';
import { UsersService } from 'src/app/service/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employeers',
  templateUrl: './employeers.component.html',
  styleUrls: ['./employeers.component.css']
})
export class EmployeersComponent implements OnInit {
reges:register;
emparray;
  constructor(private user:UsersService,private toastr:ToastrService) { 
    this.reges=new register();
  }

  ngOnInit(): void {
    this.getEmployeers();
  }
  getEmployeers(){
   this.user.getEmployeer().subscribe(data=>{
     console.log(data);
     this.emparray=data;
   })
  }
  deleteJobtype(i){
   
    this.user.deleteEmployeer(i).subscribe((data)=>{
      this.getEmployeers();
      console.log("data's dele",data);
      this.toastr.success('JobType deleted SuccessFully','message');
    })
  }

}
