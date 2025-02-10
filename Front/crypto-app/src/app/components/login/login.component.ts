import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, startWith, take } from 'rxjs';
import { getInfoUser } from '../../state/app.actions';
import { StateApp } from '../../state/app.state';
import { selectApp, selectAuthentication, selectLoadingState, selectMainApp } from '../../state/selectors/app.selectors';
import { CurrencyTableComponent } from '../currency-table/currency-table.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CurrencyTableComponent, 
    MatProgressSpinnerModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn: boolean = true;
  loading$: Observable<Boolean> = new Observable();
  authenticationFlag$: Observable<Boolean> = new Observable(); 

  ngOnInit(): void {
    
    this.authenticationFlag$ = this.store.select(selectAuthentication).pipe(startWith(false));
    this.authenticationFlag$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.router.navigateByUrl("/home");
      }
    });
  }

  constructor(
    private fb: FormBuilder,
    private store: Store<StateApp>,
    private router: Router
  ) {
    this.loading$ = this.store.select(selectLoadingState);
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signInEventClick(): void {
    this.loginForm.valid?this.getInfoUserLogin():this.loginForm.markAllAsTouched();
  }

  getInfoUserLogin(): void {
    this.store.dispatch(
      getInfoUser({ loginCredentials: this.loginForm.value })
    );
  }
}
