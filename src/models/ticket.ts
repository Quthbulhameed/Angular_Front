
import { Student } from '../models/student';


export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: Student;
  major?: specialite ;
 /// flash: boolean;
   archived: boolean;



}


export enum specialite  {
  spe1 = 'Hypermedia',
  spe2 = 'IA',
  spe3 = 'CPI',
  spe4 = 'Bigdata',
  spe5 = 'Embarque',
  
 }


//  export interface Student {
//   id?: number;
//   nom?: string;
//   prenom?: string;
// }



 ///////