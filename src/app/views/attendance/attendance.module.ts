import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendancePageComponent } from './attendance-page/attendance-page.component';
import { AttendanceTableComponent } from './attendance-table/attendance-table.component';
import { AttendanceScannerComponent } from './attendance-scanner/attendance-scanner.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AttendancePageComponent,
    AttendanceTableComponent,
    AttendanceScannerComponent
  ],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class AttendanceModule { }
