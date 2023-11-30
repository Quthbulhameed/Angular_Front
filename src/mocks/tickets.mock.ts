import { Ticket, specialite } from '../models/ticket';
import { Student } from '../models/student';
import { STUDENTS_MOCKED } from '../mocks/students.mock';



const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Madrid',
    description: 'Description de ma ville',
    date: dateToday,
    student: STUDENTS_MOCKED[0],
    major:specialite.spe1,
    archived: false

  },
  {
    title: 'SI5 in Parisddd',
    description: 'Description du voyage',
    date: dateToday,
    student: STUDENTS_MOCKED[1],
    major:specialite.spe2,
    archived: false
  },




  // {
  //   title: 'SI5 in Delhi',
  //   description: 'Description du voyage',
  //   date: dateToday,
  //   author: 'Anakin'
  // },
];
