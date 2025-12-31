import { Injectable } from '@angular/core';
import { student } from '../Model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }
  private StudentList :student[]=[
    { id:111,name:'Mike',standard:8,schoolName:'st.rita high school'},
    { id:112,name:'Jack',standard:9,schoolName:'st.rita high school'},
    { id:113,name:'Willey',standard:9,schoolName:'st.rita high school'},
    { id:114,name:'Milley',standard:8,schoolName:'st.rita high school'}
  ]
  getStudentData ():student[]{
      return this.StudentList
  }
}
