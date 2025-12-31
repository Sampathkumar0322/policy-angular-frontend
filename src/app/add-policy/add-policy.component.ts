import { Component, EventEmitter, Output } from '@angular/core';
import { policy } from '../Model/policy.model';
import { NgClass } from '@angular/common';
import { FormGroup,Validator,FormControl, Validators } from '@angular/forms';
import { PolicyService } from '../services/policy.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.css']
})
export class AddPolicyComponent {
  newPolicy:policy={id:0,name:'',status:'Active',premium:0};
  constructor(private policyser: PolicyService,private route:Router){}
  policyForm=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    premium: new FormControl(0,[Validators.required,Validators.minLength(1)]),
    status: new FormControl('Active')
  });
  @Output() policyAdded=new EventEmitter<policy>();
    savePolicy (){
      this.newPolicy.id=Math.floor(Math.random()*1000);
      if(this.policyForm.valid){
        // this.policyAdded.emit(this.policyForm.value as policy);
        this.policyser.savePolicy(this.policyForm.value as policy).subscribe({
          next:()=>{
            this.policyForm.reset({status:'Active',premium:0,name:''});
            this.policyser.changeMessage('Policy Added Succesfully!');
            this.route.navigate(['/list']); 
          },error:(err)=>console.log(err)
        });
      }
      else{
        alert('Please fill all the details correctly');
      }
      //this.policyAdded.emit({...this.newPolicy});
      //this.newPolicy={id:0,name:'',status:'Active',premium:0};
    }
    // onNewPolicyCreated(newPolicy:policy){
    //     this.push(newPolicy);
    //   }
}
