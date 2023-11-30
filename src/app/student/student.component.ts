import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  @Input() student: Student;
  @Output() deleteStudent: EventEmitter<number> = new EventEmitter<number>();

  onDeleteClick(studentId: number): void {
    this.deleteStudent.emit(studentId);
  }
}
