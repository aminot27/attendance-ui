import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { ParentPageComponent } from './parent-page/parent-page.component';
import { ParentFormComponent } from './parent-form/parent-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ParentListComponent } from './parent-list/parent-list.component';
import { ParentEditComponent } from './parent-edit/parent-edit.component';
import { ParentDeleteComponent } from './parent-delete/parent-delete.component';

@NgModule({
  declarations: [
    ParentPageComponent,
    ParentFormComponent,
    ParentListComponent,
    ParentEditComponent,
    ParentDeleteComponent,
  ],
  imports: [
    CommonModule,
    ParentRoutingModule,
    ReactiveFormsModule
  ]
})
export class ParentModule { }
