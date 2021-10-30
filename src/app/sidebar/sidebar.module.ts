import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';

import { BodyComponent } from './body/body.component';


@NgModule({
  declarations: [BodyComponent],
  exports:[BodyComponent],
  imports: [
    CommonModule,
    MatCardModule,
  ]
})
export class SidebarModule { }
