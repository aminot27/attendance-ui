import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendancePageComponent } from './attendance-page/attendance-page.component';

const routes: Routes = [
  {
    path: '',
    component: AttendancePageComponent,
    data: {
      title: 'attendance'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
