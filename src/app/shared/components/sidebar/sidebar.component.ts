import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userrole=localStorage.getItem('usertype');
  isExpan:boolean=false;
  constructor(private ro:Router) { }

  ngOnInit(): void {
    console.log(this.userrole);
  }

}
