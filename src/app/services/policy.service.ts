import { Injectable } from '@angular/core';
import { policy } from '../Model/policy.model';
import { BehaviorSubject } from 'rxjs';   
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private apiUrl = 'https://policyapp20251231203733-bkcch0hhbgdyfge8.canadacentral-01.azurewebsites.net/api/policy';
  
  // private mockPolicies: policy[]=[
  //   { id: 101, Name: 'Life Insurance', Status: 'Active', Premium: 500 },
  //   { id: 102, Name: 'Health Insurance', Status: 'Expired', Premium: 300 },
  //   { id: 103, Name: 'Car Insurance', Status: 'Active', Premium: 150 },
  //   { id:104, Name:'bike insurance', Status:'Active', Premium:100 }    
  // ];
  constructor(private http: HttpClient) { };
  getPolicies ():Observable<policy[]>{
    return this.http.get<policy[]>(this.apiUrl);
  }

  savePolicy (policy:policy):Observable<policy>{
    return this.http.post<policy>(this.apiUrl,policy);
  }
deletePolicy(id: number): Observable<any> {
  // REMOVE the <void> part here
  return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
}
  updatePolicy(id:number,policy:policy):Observable<void>{
    return this.http.put<void>(`${this.apiUrl}/${id}`,policy)
  }
  private messagesServ=new BehaviorSubject<string>('');
  currentMessage=this.messagesServ.asObservable();
  
  changeMessage(message :string){
    this.messagesServ.next(message);
  }
  // getPoliciesData (): policy[]{
  //   return this.mockPolicies
  // };
}
