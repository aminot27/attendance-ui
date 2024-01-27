import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from '../../../services/api/student.service';
import { ParentService } from '../../../services/api/parent.service'; // Asumiendo que existe este servicio
import { ShiftService } from '../../../services/api/shift.service'; // Asumiendo que existe este servicio
import { IStudent } from '../../../models/student.model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  studentForm: FormGroup;
  parents: any[] = []; // Asumiendo que tienes un modelo o interfaz para Parents
  shifts: any[] = []; // Asumiendo que tienes un modelo o interfaz para Shifts

  constructor(private fb: FormBuilder,
              private studentService: StudentService,
              private parentService: ParentService, // Inyecta el ParentService
              private shiftService: ShiftService, // Inyecta el ShiftService
              private toastr: ToastrService) { }

  ngOnInit() {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      last_name: ['', Validators.required],
      gender: ['', Validators.required],
      dni: ['', [Validators.required, Validators.minLength(8)]],
      phone_number: ['', Validators.required],
      parent: [null, Validators.required],
      shift: [null, Validators.required],
    });

    this.loadParents();
    this.loadShifts();
  }

  loadParents() {
    this.parentService.getParents().subscribe(parents => {
      this.parents = parents;
    });
  }

  loadShifts() {
    this.shiftService.getShifts().subscribe(shifts => {
      this.shifts = shifts;
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      console.log('Sending POST with data:', JSON.stringify(this.studentForm.value));
      this.studentService.addStudent(this.studentForm.value).subscribe({
        next: (student) => {
          this.toastr.success('Student added successfully');
          this.studentForm.reset();
        },
        error: (error) => {
          this.toastr.error('Failed to add student');
          console.error('Error adding student:', error);
        }
      });
    } else {
      this.toastr.error('Please fill all required fields');
    }
  }
}