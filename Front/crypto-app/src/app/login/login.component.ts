import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServiceApiService } from '../service-api.service';
import { CurrencyTableComponent } from '../currency-table/currency-table.component';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,CurrencyTableComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoggedIn: boolean = true;
  dataCurrencyListByUser: any = null;

  constructor(private fb: FormBuilder,private apiService: ServiceApiService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  signInEventClick(): void {
    if (this.loginForm.valid) {
      
      const { username, password } = this.loginForm.value;

      this.apiService.postData("list-users",{ "email":username, password }).subscribe({
        next: (response) =>{
          this.dataCurrencyListByUser = response;
          console.log('Data:', this.dataCurrencyListByUser);
          this.isLoggedIn=false;
        },
        error: (error)=>{console.error('Error getting data:',error);}
      });
      console.log('Logging in with', { username, password });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
