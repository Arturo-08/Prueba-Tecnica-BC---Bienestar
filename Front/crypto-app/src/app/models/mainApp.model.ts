import { userInfo } from "os"
import { initialUserInfo, UserInfo } from "./userInfo.model"
import { CountryDetails, initialCountryDetails } from "./countryDetails.models"

export interface MainApp {
    loading: Boolean,
    success: Boolean,
    error: Boolean,
    message: String,
    userInfo: UserInfo,
    countryDetails: CountryDetails,
} 

export const initialMainApp:MainApp = {
    loading: false,
    success: false,
    error: false,
    message: "",
    userInfo: initialUserInfo,
    countryDetails: initialCountryDetails
} 