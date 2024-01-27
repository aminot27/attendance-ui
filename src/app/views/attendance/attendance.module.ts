import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendancePageComponent } from './attendance-page/attendance-page.component';
import { AttendanceReportComponent } from './attendance-report/attendance-report.component';
import { AttendanceTableComponent } from './attendance-table/attendance-table.component';


@NgModule({
  declarations: [
    AttendancePageComponent,
    AttendanceReportComponent,
    AttendanceTableComponent
  ],
  imports: [
    CommonModule,
    AttendanceRoutingModule
  ]
})
export class AttendanceModule { }
