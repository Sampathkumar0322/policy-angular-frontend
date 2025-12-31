import { Component, OnInit } from '@angular/core';
import { PolicyService } from './services/policy.service';
import { StudentsService } from './services/students.service';
import { policy } from './Model/policy.model';
import { CommonModule } from '@angular/common';
import { student } from './Model/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  polices:policy[]=[];
  student:student[]=[];

  constructor(private policyService :PolicyService, private StudentService :StudentsService){}
  ngOnInit(): void {
    // this.polices=this.policyService.getPoliciesData();
    this.student=this.StudentService.getStudentData();
    console.log("Data loaded successfully:", this.polices);
  }

  title = 'insPortal';
  PolicyName:string ="Life Insurance";
  isAvailable: boolean=false;
   togglePolicy(){
    this.isAvailable =!this.isAvailable;
   }
  
  onNewStudentCreated(newstudent:student){
    this.student.push(newstudent);
  }
} 
