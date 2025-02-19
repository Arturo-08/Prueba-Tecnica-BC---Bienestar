import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CurrencyTableComponent } from './components/currency-table/currency-table.component';
import { ModalComponent } from './components/modal/modal.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path:  'modal', component: ModalComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'home', component: CurrencyTableComponent},
    {path: '**', component: PageNotFoundComponent},
];
