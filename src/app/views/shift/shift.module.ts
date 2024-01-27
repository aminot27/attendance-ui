import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShiftRoutingModule } from './shift-routing.module';
import { ShiftPageComponent } from './shift-page/shift-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShiftPageComponent
  ],
  imports: [
    CommonModule,
    ShiftRoutingModule,
    FormsModule
  ]
})
export class ShiftModule { }
