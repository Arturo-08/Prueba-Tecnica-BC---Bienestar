import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Currency } from '../../models/currency.model';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CountryDetails } from '../../models/countryDetails.models';
import { UserInfo } from '../../models/userInfo.model';
import { getCurrenciesByCountry } from '../../state/app.actions';
import { StateApp } from '../../state/app.state';
import {
  selectCountryDetails,
  selectUserInfo
} from '../../state/selectors/app.selectors';

@Component({
  selector: 'app-currency-table',
  standalone: true,
  imports: [MatTableModule, MatButton, CurrencyPipe],
  templateUrl: './currency-table.component.html',
  styleUrl: './currency-table.component.scss',
})
export class CurrencyTableComponent {
  userCurrencies: Currency[] = [];
  countryUser: String = '';
  currenciesDetails$: Observable<CountryDetails> = new Observable();
  userCurrencyInfo$: Observable<UserInfo> = new Observable();
  displayedColumns: string[] = ['index', 'symbol', 'name', 'exchange_rate'];
  avaliableCurrenciesToAdd: Currency[] = [];
  currenciesByCountries: Currency[] = [];

  ngOnInit(): void {
    this.userCurrencyInfo$.subscribe((value) => {
        this.countryUser = value.countryName;
        this.userCurrencies = value.currencies;
      });
    this.getCurrenciesByCountry();

    this.currenciesDetails$.subscribe((value) => {
      if (value.currencies.length > 0) {
        this.currenciesByCountries = value.currencies;
        this.fillModalNewCurrencies();
      }
    });
  }

  constructor(private store: Store<StateApp>) {
    this.currenciesDetails$ = this.store.select(selectCountryDetails);
    this.userCurrencyInfo$ = this.store.select(selectUserInfo);
  }

  

  fillModalNewCurrencies(): void {
    if (this.userCurrencies.length > 0) {
      const existingCurrencyIds = new Set(
        this.userCurrencies.map((element) => element.id)
      );
      this.avaliableCurrenciesToAdd = this.currenciesByCountries.filter(
        (item) => !existingCurrencyIds.has(item.id)
      );
    } else {
      this.avaliableCurrenciesToAdd = this.currenciesByCountries;
    }
  }

  getCurrenciesByCountry(): void {
    this.store.dispatch(
      getCurrenciesByCountry({
        countryRequest: {
          country: this.countryUser,
        },
      })
    );
  }

  addCurrenciesEventClick():void{
    console.log("modal:",this.avaliableCurrenciesToAdd);
  }
}
