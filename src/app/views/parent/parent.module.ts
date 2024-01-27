import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { ParentPageComponent } from './parent-page/parent-page.component';
import { ParentFormComponent } from './parent-form/parent-form.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ParentPageComponent,
    ParentFormComponent,
  ],
  imports: [
    CommonModule,
    ParentRoutingModule,
    ReactiveFormsModule
  ]
})
export class ParentModule { }
