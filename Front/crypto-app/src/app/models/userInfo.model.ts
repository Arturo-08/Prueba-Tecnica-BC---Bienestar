import { Currency } from './currency.model';

export interface UserInfo {
  isAuthenticated: boolean,
  userName: String;
  userEmail: String;
  countryName: String;
  currencies: Currency[];
}

export const initialUserInfo: UserInfo = {
  userName: '',
  userEmail: '',
  countryName: '',
  currencies: [],
  isAuthenticated: false,
};
