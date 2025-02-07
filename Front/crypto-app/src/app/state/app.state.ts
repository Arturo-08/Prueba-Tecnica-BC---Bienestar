import { initialMainApp, MainApp } from "../models/mainApp.model";


export interface StateApp {
   mainApp: MainApp,
}

export const initialStateApp:StateApp = {
   mainApp:initialMainApp,
 }