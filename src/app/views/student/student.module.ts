import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentPageComponent } from './student-page/student-page.component';
import { StudentFormComponent } from './student-form/student-form.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StudentPageComponent,
    StudentFormComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
