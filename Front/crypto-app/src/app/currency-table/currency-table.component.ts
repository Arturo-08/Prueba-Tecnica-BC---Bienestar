import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

export interface currencies {
  position: number;
  symbol: string;
  name: string;
  rate: number;
}

const ELEMENT_DATA: currencies[] = [
  {position: 1, symbol:'BIT', name: 'BIT', rate: 1.0079},
  {position: 2, symbol:'BIT', name: 'Helium', rate: 4.0026 },
  {position: 3, symbol:'BIT', name: 'Lithium', rate: 6.941 },
  {position: 4, symbol:'BIT', name: 'Beryllium', rate: 9.0122 },
];

@Component({
  selector: 'app-currency-table',
  standalone: true,
  imports: [MatTableModule,MatButton],
  templateUrl: './currency-table.component.html',
  styleUrl: './currency-table.component.scss'
})

export class CurrencyTableComponent {
  displayedColumns: string[] = ['position', 'symbol', 'name', 'rate'];
  dataSource = ELEMENT_DATA;
}
