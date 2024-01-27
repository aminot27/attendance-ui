import { Component, OnInit } from '@angular/core';
import { IAttendanceRecord } from '../../../models/attendance_record.model'; // Asegúrate de que la ruta sea correcta
import { AttendanceService } from '../../../services/api/attendance.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-attendance-table',
  templateUrl: './attendance-table.component.html',
  styleUrls: ['./attendance-table.component.scss']
})
export class AttendanceTableComponent implements OnInit {
  attendanceRecords: IAttendanceRecord[] = [];

  constructor(private attendanceService: AttendanceService) {}

  ngOnInit(): void {
    this.loadAttendanceRecords();
  }

  loadAttendanceRecords(): void {
    this.attendanceService.getAttendanceRecords().subscribe(
      (records) => {
        this.attendanceRecords = records;
      },
      (error) => {
        console.error('Error al cargar los registros de asistencia', error);
      }
    );
  }
}