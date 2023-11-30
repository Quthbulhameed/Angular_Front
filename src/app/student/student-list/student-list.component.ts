
import { Component, OnInit } from '@angular/core';
import { Student } from '../../../models/student';
import { StudentService } from '../../../services/student/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public studentList: Student[] = [];

  students: Student[];

  constructor(public studentService: StudentService,private router: Router) {
    this.studentService.students$.subscribe((student) => this.studentList = student);
  }

  ngOnInit() {
   
    this.getmystudent()
  }

  
  getmystudent() {
    this.studentService.getStudents().subscribe(students => {
      this.students = students;
    });
  }

  onStudentAdded() {
    // this.studentService.getStudents().subscribe(students => {
    //   this.students = students;
    // });
    this.getmystudent()
  }

  

  onDeleteStudent(studentId: number): void {
    this.studentService.deleteStudent(studentId);
    this.getmystudent();

    
  }

navigateToTicketPage(): void {
  this.router.navigate(['/ticket']); 

}
  
}
