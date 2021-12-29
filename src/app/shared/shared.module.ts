import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent

  ],
  imports: [
    CommonModule,RouterModule,FlexLayoutModule,
    MatIconModule,MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MatSidenavModule,
    MatMenuModule
   
    
  ]
})
export class SharedModule { }
