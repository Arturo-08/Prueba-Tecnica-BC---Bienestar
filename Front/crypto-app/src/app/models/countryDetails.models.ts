import { Currency } from "./currency.model"
import { UserInfo } from "./userInfo.model"

export interface CountryDetails{
    countryName: String,
    currencies: Currency[],
} 

export const initialCountryDetails:CountryDetails = {
    countryName: "",
    currencies: []
}