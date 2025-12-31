import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPolicyComponent } from './add-policy/add-policy.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Route,RouterModule, Routes } from '@angular/router';
import { PolicyService } from './services/policy.service';
import { PolicyListComponent } from './policy-list/policy-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const routes :Routes=[
  {path:'',redirectTo:'/list', pathMatch:'full' },
  {path: 'list', component:PolicyListComponent},
  {path: 'add', component:AddPolicyComponent},
  {path: '**', redirectTo:'/list'}
];


@NgModule({
  declarations: [
    AppComponent,
    AddPolicyComponent,
    StudentDetailsComponent,
    PolicyListComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent],

})  
export class AppModule { }
