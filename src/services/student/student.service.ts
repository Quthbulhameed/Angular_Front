
import { Injectable } from '@angular/core';
import { Student } from '../../models/student';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url = 'http://localhost:3000/students';
  private studentList: Student[] = [];
  public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);

  

  constructor(private http: HttpClient) {}

  

   getStudents(): Observable<Student[]> {
     return this.http.get<Student[]>(this.url);
   }


   getStudents2(): void {
     this.http.get<Student[]>(this.url).subscribe(
       (students) => {
         this.studentList = students;
        this.students$.next(this.studentList);
       },
     );
   }


  
  addStudent(student: Student): void {
    this.http.post<Student>(this.url, student).subscribe(
      (addedStudent) => {
        this.studentList.push(addedStudent);
        this.students$.next(this.studentList);
      },
    );
  }


  // student.service.ts

// deleteStudent2(studentId: number): void {
//   this.http.delete(`${this.url}/${studentId}`).subscribe(
//     () => {
//       // Filtrer les étudiants pour exclure celui supprimé
//       this.studentList.pop(studentId);

//       this.students$.next(this.studentList);
//     },
//     (error) => {
//       console.error(`Erreur lors de la suppression de l'étudiant avec l'ID ${studentId}`, error);
//     }
//   );
// }

deleteStudent(studentId: number): void {
  this.http.delete<Student>(`${this.url}/${studentId}`).subscribe(
    () => {
      const index = this.studentList.findIndex(student => student.id === studentId);

      if (index !== -1) {
        this.studentList.splice(index, 1);
      }

      this.students$.next(this.studentList);
    },
    (error) => {
      console.error('Erreur lors de la suppression de l\'étudiant', error);
    }
  );
}






  
}
