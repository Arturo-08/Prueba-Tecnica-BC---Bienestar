import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CurrencyTableComponent } from '../currency-table/currency-table.component';
import { Store } from '@ngrx/store';
import { getInfoUser, successGetInfoUser } from '../../state/app.actions';
import { Observable } from 'rxjs';
import { selectMainStates } from '../../state/selectors/app.selectors';
import { selectLoadingState } from '../../state/selectors/mainStates.selector';
import { UserInfo } from '../../models/userInfo.model';
import { StateApp } from '../../state/app.state';
import { BackApiService } from '../../services/back.api.service';
import { get } from 'http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CurrencyTableComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn: boolean = true;
  loading$: Observable<Boolean> = new Observable();

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoadingState);
  }

  constructor(
    private fb: FormBuilder,
    private apiService: BackApiService,
    private store: Store<StateApp>
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signInEventClick(): void {
    if (this.loginForm.valid) {
      this.getInfoUserLogin();
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  getInfoUserLogin(): void {
    const { username, password } = this.loginForm.value;
    this.store.dispatch(
      getInfoUser({ loginCredentials: { email: username, password } })
    );
  }
}
