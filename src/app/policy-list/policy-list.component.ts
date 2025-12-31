import { Component } from '@angular/core';
import { policy } from '../Model/policy.model';
import { PolicyService } from '../services/policy.service';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent {
  constructor (private policyService :PolicyService){}
  successMessage: string = '';
   polices:policy[]=[];
  //  ngOnInit(): void {
  //      this.polices=this.policyService.getPoliciesData();
  //      this.policyService.currentMessage.subscribe(msg=>{
  //      this.successMessage = msg;
  //       setTimeout(() => this.successMessage = '', 3000);
  //      })
  //    }
  ngOnInit():void{
    this.loadPolicies();
  }
  loadPolicies(){
    this.policyService.getPolicies().subscribe({
      next:(data)=> {
        this.polices=data;
        console.log(this.polices);
      },
      error:(err)=> console.log("Error for Policies "+err)
    })
  }  // renewpolicy(id:number){
  //   const policy=this.polices.find(s => s.id===id);
  //   if(policy){
  //     policy.status="Active";
  //     console.log(`policy ${id} updated status`);
  //   }
  // }
  trackPolicies(index:number , policy:policy){
      return policy.id
  }
  removePolicy(id:number){
    if(confirm("Are you sure you want to delete this policy?")){
      this.policyService.deletePolicy(id).subscribe({
        next:()=>{
            this.polices=this.polices.filter(p=>p.id!==id);
            this.policyService.changeMessage("Policy Deleted Successfully!");
        },
        error:(err)=>console.log("Error Failed ",err)
      });
    }
  }
  renewpolicy(polices:policy){
    const updated={...polices,status:'Active'};
    this.policyService.updatePolicy(polices.id,updated).subscribe({
      next:()=>{
        this.loadPolicies();
        this.policyService.changeMessage('Policy updated successfully');
      }
    })
  }
}
