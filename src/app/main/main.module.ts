import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';

import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchComponent } from './search/search.component';
import { InfocardComponent } from './infocard/infocard.component';


@NgModule({
  declarations: [
    SidebarComponent,
    SearchComponent,
    InfocardComponent
  ],
  exports:[
    SidebarComponent,
    SearchComponent,
    InfocardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatRadioModule,
    Ng2SearchPipeModule,
    MatIconModule,
    HttpClientModule,
    
  ]
})
export class MainModule { }
