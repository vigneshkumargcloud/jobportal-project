import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { PostjobComponent } from 'src/app/components/postjob/postjob.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { SavedjobsComponent } from 'src/app/components/savedjobs/savedjobs.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { UserLogComponent } from 'src/app/components/user-log/user-log.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule} from '@angular/material/form-field';
import { SearchforjobsComponent } from 'src/app/components/searchforjobs/searchforjobs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobslistComponent } from 'src/app/components/jobslist/jobslist.component';

import { JobdescriptionComponent } from 'src/app/components/jobdescription/jobdescription.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { JobcategoryComponent } from 'src/app/components/jobcategory/jobcategory.component';
import { JobtypeComponent } from 'src/app/components/jobtype/jobtype.component';
import { JoobseekerComponent } from 'src/app/components/joobseeker/joobseeker.component';
import { EmployeersComponent } from 'src/app/components/employeers/employeers.component';
import { BusinessstreamComponent } from 'src/app/components/businessstream/businessstream.component';
import { CreatecompanyComponent } from 'src/app/components/createcompany/createcompany.component';
import { CompanylistComponent } from 'src/app/components/companylist/companylist.component';
import { JobpostComponent } from 'src/app/components/jobpost/jobpost.component';
import { DpDatePickerModule } from 'ng2-date-picker';
import { AddmessagesComponent } from 'src/app/components/addmessages/addmessages.component';
import { MessageslistComponent } from 'src/app/components/messageslist/messageslist.component';
import { JobseekerprofileComponent } from 'src/app/components/jobseekerprofile/jobseekerprofile.component';
import { EducationdetailsComponent } from 'src/app/components/educationdetails/educationdetails.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ResumeComponent } from 'src/app/components/resume/resume.component';

import { DatePipe } from '@angular/common';
import { AppliedjobsComponent } from 'src/app/components/appliedjobs/appliedjobs.component';
import { JobstatusComponent } from 'src/app/components/jobstatus/jobstatus.component';
import {ResumebyComponent} from 'src/app/components/resumeby/resumeby.component';






@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    PostjobComponent,
    SavedjobsComponent,
    UserLogComponent,
    SearchforjobsComponent,
    JobslistComponent,
    JobdescriptionComponent,
    ContactComponent,
    JobcategoryComponent,
    JobtypeComponent,
    JoobseekerComponent,
    EmployeersComponent,BusinessstreamComponent,
    CreatecompanyComponent,
    CompanylistComponent,
    JobpostComponent,
    AddmessagesComponent,
    MessageslistComponent,
    JobseekerprofileComponent,
    EducationdetailsComponent,
    ResumeComponent,
 AppliedjobsComponent,
 JobstatusComponent,
 ResumebyComponent
   
    
  
 
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    DpDatePickerModule,
    MatTabsModule,
   
 
    

  ],
  providers: [
    DatePipe
    
  ]
})
export class DefaultModule { }
