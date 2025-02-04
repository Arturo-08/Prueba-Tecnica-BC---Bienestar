import { Currency } from './currency.model';

export interface UserInfo {
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
};
