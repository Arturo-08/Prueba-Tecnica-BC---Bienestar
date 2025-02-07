import { Currency } from "./currency.model"
import { UserInfo } from "./userInfo.model"

export interface CountryDetails{
    name: string,
    currencies: Currency[],
} 

export const initialCountryDetails:CountryDetails = {
    name: "",
    currencies: []
}