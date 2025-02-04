import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { BackApiService } from '../../services/back.api.service';
import { Currency } from '../../models/currency.model';
import { merge, mergeAll, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { StateApp } from '../../state/app.state';
import { selectUserInfo } from '../../state/selectors/app.selectors';
import { UserInfo } from '../../models/userInfo.model';
import { selectUserCurrencies } from '../../state/selectors/userInfo.selector';



@Component({
  selector: 'app-currency-table',
  standalone: true,
  imports: [MatTableModule, MatButton, CurrencyPipe],
  templateUrl: './currency-table.component.html',
  styleUrl: './currency-table.component.scss',
})
export class CurrencyTableComponent {
  userCurrencies:Currency[]=[]

  ngOnInit(): void {
    this.store.select(selectUserCurrencies).subscribe((userCurrenciesStore) => 
      this.userCurrencies = userCurrenciesStore);
    console.log(this.userCurrencies);
    //this.getCurrenciesByCountry();
  }
  constructor(private apiService: BackApiService, private store: Store<StateApp> ) {}
  displayedColumns: string[] = ['index', 'symbol', 'name', 'exchange_rate'];
  dataSourceCurrencies: { index: number; id:number; symbol: string; name: string; rate: number }[] =
    [];
  avaliableCurrenciesToAdd :Currency[]=[]
  currenciesByCountries:Currency[]=[]

  fillModalNewCurrencies():void{
    if(this.userCurrencies.length!=0){
      const existingCurrencyIds = new Set(this.userCurrencies.map((element) => element.id));
      this.avaliableCurrenciesToAdd = this.currenciesByCountries.filter((item) => 
        !existingCurrencyIds.has(item.id)
      );
    }else{
      this.avaliableCurrenciesToAdd = this.currenciesByCountries;
    }
    console.log("modal:",this.avaliableCurrenciesToAdd);
  }

  // getCurrenciesByCountry():void{
  //   this.apiService
  //       .postData('list-currencies-by-country', {country: this.userData.countryName})
  //       .subscribe({
  //         next: (response) => {
  //           this.currenciesByCountries = response;
  //           console.log('Currencies from back:', this.currenciesByCountries);
  //           this.fillModalNewCurrencies();
  //         },
  //         error: (error) => {
  //           console.error('Error getting data:', error);
  //         },
  //       });
  // }
}
