import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithousidebarComponent } from './withousidebar.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from 'src/app/components/login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { HomesearchComponent } from 'src/app/components/homesearch/homesearch.component';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { SignupComponent } from 'src/app/components/signup/signup.component';
import {MatTabsModule} from '@angular/material/tabs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ForgotemailComponent } from 'src/app/components/forgotemail/forgotemail.component';
import { ForgotpassComponent } from 'src/app/components/forgotpass/forgotpass.component';
import { AdminloginComponent } from 'src/app/components/adminlogin/adminlogin.component';





@NgModule({
  declarations: [
    WithousidebarComponent,
    LoginComponent,
    HomesearchComponent,
    SignupComponent,
    ForgotemailComponent,
    ForgotpassComponent,
    AdminloginComponent
    
   
    
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUsefulSwiperModule,
    IvyCarouselModule,
    MatTabsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  
  ]
})
export class WithousidebarModule { }
