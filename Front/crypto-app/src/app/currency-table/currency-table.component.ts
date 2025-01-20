import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

export interface Currency {
  id: number;
  name: string;
  symbol: string;
  exchange_rate: number;
}

export interface UserWithCurrencies {
  userName: string;
  userEmail: string;
  countryName: string;
  currencies: Currency[];
}

@Component({
  selector: 'app-currency-table',
  standalone: true,
  imports: [MatTableModule, MatButton, CurrencyPipe],
  templateUrl: './currency-table.component.html',
  styleUrl: './currency-table.component.scss',
})
export class CurrencyTableComponent {
  @Input() childMessage: any;
  ngOnInit(): void {
    console.log('Data', this.childMessage);
    this.fillTable();
  }
  constructor() {}
  displayedColumns: string[] = ['index', 'symbol', 'name', 'rate'];
  dataSource: any;
  tableData: { index: number; symbol: string; name: string; rate: number }[] =
    [];

  fillTable(): void {
    this.dataSource = [];
    for (let i = 0; i < this.childMessage.currencies.length; i++) {
      const currency = this.childMessage.currencies[i];
      this.dataSource.push({
        index: i + 1,
        symbol: currency.symbol,
        name: currency.name,
        rate: currency.exchange_rate,
      });
    }
  }
}
