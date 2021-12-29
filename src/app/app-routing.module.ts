import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';
import { AddmessagesComponent } from './components/addmessages/addmessages.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AppliedjobsComponent } from './components/appliedjobs/appliedjobs.component';
import { BusinessstreamComponent } from './components/businessstream/businessstream.component';
import { CompanylistComponent } from './components/companylist/companylist.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreatecompanyComponent } from './components/createcompany/createcompany.component';
import { EducationdetailsComponent } from './components/educationdetails/educationdetails.component';
import { EmployeedashboardComponent } from './components/employeedashboard/employeedashboard.component';
import { EmployeersComponent } from './components/employeers/employeers.component';
import { ForgotemailComponent } from './components/forgotemail/forgotemail.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
import { HomeComponent } from './components/home/home.component';
import { HomesearchComponent } from './components/homesearch/homesearch.component';
import { JobcategoryComponent } from './components/jobcategory/jobcategory.component';
import { JobdescriptionComponent } from './components/jobdescription/jobdescription.component';
import { JobpostComponent } from './components/jobpost/jobpost.component';
import { JobseekerprofileComponent } from './components/jobseekerprofile/jobseekerprofile.component';
import { JobslistComponent } from './components/jobslist/jobslist.component';
import { JobstatusComponent } from './components/jobstatus/jobstatus.component';
import { JobtypeComponent } from './components/jobtype/jobtype.component';
import { JoobseekerComponent } from './components/joobseeker/joobseeker.component';
import { LoginComponent } from './components/login/login.component';
import { MessageslistComponent } from './components/messageslist/messageslist.component';
import { PostjobComponent } from './components/postjob/postjob.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ResumebyComponent } from './components/resumeby/resumeby.component';


import { SavedjobsComponent } from './components/savedjobs/savedjobs.component';
import { SearchforjobsComponent } from './components/searchforjobs/searchforjobs.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserLogComponent } from './components/user-log/user-log.component';
import { DefaultComponent } from './layouts/default/default.component';
import { WithousidebarComponent } from './layouts/withousidebar/withousidebar.component';

const routes: Routes = [{
  'path':'',component:DefaultComponent,
  children:[{
    'path':'postjob',
    component:PostjobComponent,

    canActivate:[AuthGuard]

  },
  {
    'path':'CandidateDash',
    component:HomeComponent,
    canActivate:[AuthGuard]

  },
  {
    'path':'EmployeeDash',
    component:EmployeedashboardComponent,
    
    canActivate:[AuthGuard]
  },
  {
    'path':'SavedJobs',
    component:SavedjobsComponent,
    canActivate:[AuthGuard]

  },
  {
    'path':'userslog',
    component:UserLogComponent,
    canActivate:[AuthGuard]

  },
  {
    'path':'searchforjobs',
    component:SearchforjobsComponent,
    canActivate:[AuthGuard]
  },
  {
    'path':'jobslist',
    component:JobslistComponent,
    canActivate:[AuthGuard]
  },
  {
    'path':'jobdesc/:id/:userid',
    component:JobdescriptionComponent,
    canActivate:[AuthGuard]
  },
  
  {
    'path':'contact',
    component:ContactComponent,
    canActivate:[AuthGuard]
  },
  {
    'path':'jobcategory',
    component:JobcategoryComponent,
    canActivate:[AuthGuard]
  },
  {
    'path':'jobtype',
    component:JobtypeComponent,
    canActivate:[AuthGuard]
  },
  {
    'path':'appliedjob',
    component:AppliedjobsComponent,
    canActivate:[AuthGuard]
  },
  {
    'path':'emp',
    component:EmployeersComponent,
    canActivate:[AuthGuard]
  },
  {
    'path':'jobstatus',
    component:JobstatusComponent,
    canActivate:[AuthGuard]
  },
  {
    'path':'jsker',
    component:JoobseekerComponent,
    canActivate:[AuthGuard]
  },

  {
    'path':'bst',
    component:BusinessstreamComponent,
    canActivate:[AuthGuard]
  },
  {
    'path':'company',
    component:CreatecompanyComponent,
    canActivate:[AuthGuard]
  },
  {
    'path':'comapnylist',
    component:CompanylistComponent,
    canActivate:[AuthGuard]
  },
  {
    'path':'jobpost',
    component:JobpostComponent,
    canActivate:[AuthGuard]
  },
  {
    'path':'jobpost/:id',
    component:PostjobComponent,
    canActivate:[AuthGuard]
  },
  {
    'path':'addmesg',
    component:AddmessagesComponent,
    canActivate:[AuthGuard]
  },
  {
    'path':'mesglist',
    component:MessageslistComponent,
    canActivate:[AuthGuard]
  },
  {
    'path':'addmesg/:id',
    component:AddmessagesComponent,
    canActivate:[AuthGuard]
  },
  {
    'path':'seeker',
    component:JobseekerprofileComponent,
    canActivate:[AuthGuard]
  },
  {
    'path':'seeker/:id',
    component:JobseekerprofileComponent,
    canActivate:[AuthGuard]
  },
  {
    'path':'education',
    component:EducationdetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    'path':'education/:id',
    component:EducationdetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    'path':'resume',
    component:ResumeComponent,
    canActivate:[AuthGuard]
  },
  {
    'path':'resumeb/:id/:reid',
    component:ResumebyComponent,
    canActivate:[AuthGuard]
  },





 
 
  
]
},{
  'path':'',
  component:WithousidebarComponent,
  children:[
    {
    'path':'signin',
    component: LoginComponent
  },
  {
    'path':'homewithsearch',
    component: HomesearchComponent
  },

  {
    'path':'signup',
    component:SignupComponent
  },
  {
    'path':'forgotpass',
    component:ForgotemailComponent,
    
  },
  {
    'path':'forgot',
    component:ForgotpassComponent,
    
  },
  {
    'path':'adminlogin$5599',
    component:AdminloginComponent,
    
  },

]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
