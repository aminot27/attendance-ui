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
    end_time: '',
    early_tolerance_until: '',
    late_tolerance_until: '',
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
    // Validación básica para asegurarse de que todos los campos requeridos están presentes
    if (this.newShift.name && this.newShift.start_time && this.newShift.end_time && this.newShift.early_tolerance_until && this.newShift.late_tolerance_until) {
      this.shiftService.addShift(this.newShift).subscribe({
        next: (shift) => {
          // Si el turno se agrega exitosamente, lo añadimos a la lista de turnos en la UI
          this.shifts.push(shift);
          // Reseteamos el formulario para permitir la entrada de un nuevo turno
          this.newShift = {
            name: '',
            start_time: '',
            end_time: '',
            early_tolerance_until: '',
            late_tolerance_until: '',
          };
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
}