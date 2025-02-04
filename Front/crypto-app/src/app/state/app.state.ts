import { initialMainStates, MainStates } from "../models/mainStates.model";
import { initialUserInfo, UserInfo } from "../models/userInfo.model";


export interface StateApp {
   mainStates: MainStates,
   userInfo: UserInfo,
}

export const initialStateApp:StateApp = {
   mainStates: initialMainStates,
   userInfo: initialUserInfo,
 }