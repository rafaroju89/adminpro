import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations:[
    BreadcrumsComponent,
    HeaderComponent,
    SidebarComponent,
    NopagefoundComponent
  ],
  exports:[
    BreadcrumsComponent,
    HeaderComponent,
    SidebarComponent,
    NopagefoundComponent
  ]
})

export class SharedModule{}
