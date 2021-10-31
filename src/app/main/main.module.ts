import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';

import { SidebarComponent } from './sidebar/sidebar.component';
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
    FormsModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
  ]
})
export class MainModule { }