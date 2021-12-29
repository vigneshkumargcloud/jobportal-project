import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { WithousidebarModule } from './layouts/withousidebar/withousidebar.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeedashboardComponent } from './components/employeedashboard/employeedashboard.component';































@NgModule({
  declarations: [
    AppComponent,
    EmployeedashboardComponent,
    
    
    

    
   
  
    
   
 
    
    
    
   
    
   
   
    
    
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    WithousidebarModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
