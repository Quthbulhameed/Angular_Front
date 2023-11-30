
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../../../services/student/student.service';
import { Student } from '../../../models/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  public studentForm: FormGroup;

  @Output() studentAdded: EventEmitter<void> = new EventEmitter<void>();

  constructor(public formBuilder: FormBuilder, public studentService: StudentService) {

    this.studentForm = this.formBuilder.group({
      nom: [''],
      prenom: ['']
    });
  }

  ngOnInit() {
  }

  addStudent() {
    const studentToCreate: Student = this.studentForm.getRawValue() as Student;
    this.studentService.addStudent(studentToCreate);
    
    this.studentAdded.emit();
  }
}
