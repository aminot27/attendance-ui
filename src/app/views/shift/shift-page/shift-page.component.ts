import { IShift } from '../../../models/shift.model'
import { ShiftService } from '../../../services/api/shift.service'
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
    end_time: ''
  };
  shifts: IShift[] = [];

  constructor(private shiftService: ShiftService) {}

  ngOnInit() {
    //this.loadShifts();
  }

  // loadShifts() {
  //   this.shiftService.getShifts().subscribe({
  //     next: (shifts) => {
  //       this.shifts = shifts;
  //     },
  //     error: (error) => {
  //       console.error('Error al cargar los turnos', error);
  //     }
  //   });
  // }

  addShift() {
    if (this.newShift.name && this.newShift.start_time && this.newShift.end_time) {
      this.shiftService.addShift(this.newShift).subscribe({
        next: (shift) => {
          this.shifts.push(shift);
          
          this.newShift = { name: '', start_time: '', end_time: '' };
          console.log('Turno agregado con éxito');
        },
        error: (error) => {
          console.error('Error al agregar el horario', error);
          
        }
      });
    } else {
      console.error('Todos los campos son obligatorios');
    }
  }
}