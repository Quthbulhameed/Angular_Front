import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket, specialite  } from '../../../models/ticket';
import { Student } from '../../../models/student';
import { StudentService } from '../../../services/student/student.service';
import { STUDENTS_MOCKED } from '../../../mocks/students.mock';



@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {

 public IngredientsList: string[] = [specialite.spe1,specialite.spe2,specialite.spe3,specialite.spe4,specialite.spe5];
 STUDENT_LIST: Student[] = STUDENTS_MOCKED;
 SeleEtu: Student;
 


  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)
  /**
   * TicketForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms
   */
  public ticketForm: FormGroup;
  

  constructor(public formBuilder: FormBuilder, public ticketService: TicketService,public studentService: StudentService) {
    // Form creation
    this.ticketForm = this.formBuilder.group({
      
      title: [''],
      description: [''],
      major: [''],
      studentId: ['']
    });
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  ngOnInit() {
    this.getStudents();
    
  }

  getStudents() {
    this.studentService.getStudents().subscribe(students => {
      this.STUDENT_LIST = students;
    });
  }




  // test2selec(Index: number) {
  //   const studentIndex = Index + 1;
  //   this.SeleEtu = this.STUDENT_LIST.find(student => student.id === studentIndex);
  // }

  test2selec(Index: number) {
    if (Index === 0) {

      this.SeleEtu = null;

       this.ticketForm.get('studentId').setValue('');
    } else {
      const studentIndex = Index;
      this.SeleEtu = this.STUDENT_LIST.find(student => student.id === studentIndex);

      this.ticketForm.get('studentId').setValue(this.SeleEtu.id);
    }
  }
  

  addTicket() {
    const ticketToCreate: Ticket = this.ticketForm.getRawValue() as Ticket;
    ticketToCreate.date = new Date();
    ticketToCreate.student = this.SeleEtu;
    this.ticketService.addTicket(ticketToCreate);
  }

}
