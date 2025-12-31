import { Component, EventEmitter, Output } from '@angular/core';
import { student } from '../Model/student.model';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  newstudent:student={id:0, name:'',standard:0,schoolName:''}
  @Output() studentAdded = new EventEmitter<student>;
  saveDetails(){
    this.newstudent.id=Math.floor(Math.random()*1000);  // update the id
    this.studentAdded.emit({...this.newstudent}); // assign the values
    this.newstudent={id:0, name:'',standard:0,schoolName:''};  // clearing the values
  }
}
