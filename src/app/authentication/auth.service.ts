import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private msg:ToastrService) { }
  isloggedin(){
    // this.msg.warning("your are not logged in");
    return !!localStorage.getItem('id_token');
   

  }
 
}
