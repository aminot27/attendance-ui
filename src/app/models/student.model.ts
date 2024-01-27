export interface IStudent {
  student_id: Number;
  name: string;
  last_name: string;
  gender: 'M' | 'F'; 
  dni: string; 
  phone_number: string; 
  parent: number;
  shift: number;
}