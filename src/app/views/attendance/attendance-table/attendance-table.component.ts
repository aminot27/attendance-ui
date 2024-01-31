import { Component, OnInit } from '@angular/core';
import { IAttendanceRecord } from '../../../models/attendance_record.model'; // Asegúrate de que la ruta sea correcta
import { AttendanceService } from '../../../services/api/attendance.service'; // Asegúrate de que la ruta sea correcta
import { GlobalKeyListenerService } from 'src/app/services/global-key-listener.service';

@Component({
  selector: 'app-attendance-table',
  templateUrl: './attendance-table.component.html',
  styleUrls: ['./attendance-table.component.scss']
})
export class AttendanceTableComponent implements OnInit {
  attendanceRecords: IAttendanceRecord[] = [];
  scannedDni: string = '';

  constructor(private attendanceService: AttendanceService,
    private globalKeyListenerService: GlobalKeyListenerService 
    ) {}

  ngOnInit(): void {
    this.loadAttendanceRecords();
    this.listenToDniScans();
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

  listenToDniScans(): void {
    
  }
}