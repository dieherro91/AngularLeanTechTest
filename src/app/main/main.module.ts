import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import {MatCardModule} from '@angular/material/card';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    SidebarComponent,
    SearchComponent
  ],
  exports:[
    SidebarComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ]
})
export class MainModule { }
