import { MatTableDataSource } from '@angular/material/table';
import { IShift } from '../../../models/shift.model';
import { ShiftService } from '../../../services/api/shift.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shift-page',
  templateUrl: './shift-page.component.html',
  styleUrls: ['./shift-page.component.scss']
})
export class ShiftPageComponent implements OnInit {
  newShift: IShift = {
    name: '',
    start_time: '',
    end_time: '',
    entry_start: '', // Actualizado para coincidir con el modelo de Django
    entry_end: '', // Actualizado para coincidir con el modelo de Django
    early_until: '', // Nuevo campo agregado
    late_until: '', // Nuevo campo agregado
    leave_start: '', // Actualizado para coincidir con el modelo de Django
    leave_end: '', // Actualizado para coincidir con el modelo de Django
  };
 


  shifts: IShift[] = [];
  dataSource = new MatTableDataSource<IShift>(this.shifts);

  constructor(private shiftService: ShiftService) {}

  ngOnInit() {
    this.loadShifts();
  }

  loadShifts() {
    this.shiftService.getShifts().subscribe({
      next: (shifts) => {
        this.dataSource.data = shifts;
      },
      error: (error) => {
        console.error('Error al cargar los turnos', error);
      }
    });
  }

  addShift() {
    if (this.newShift.name && this.newShift.start_time && this.newShift.end_time) {
      this.shiftService.addShift(this.newShift).subscribe({
        next: (shift) => {
          const data = this.dataSource.data;
          data.push(shift);
          this.dataSource.data = data; // Esto notifica a MatTableDataSource del cambio
          this.resetNewShift();
          console.log('Turno agregado con éxito');
          
        },
        error: (error) => {
          console.error('Error al agregar el turno', error);
        }
      });
    } else {
      console.error('Todos los campos son obligatorios');
    }
  }

  resetNewShift() {
    this.newShift = {
      name: '',
      start_time: '',
      end_time: '',
      entry_start: '',
      entry_end: '',
      early_until: '',
      late_until: '',
      leave_start: '',
      leave_end: '',
    };
  }


  
}