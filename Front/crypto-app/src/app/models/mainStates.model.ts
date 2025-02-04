export interface MainStates {
    loading: Boolean,
    success: Boolean,
    error: Boolean,
    message: String
} 

export const initialMainStates:MainStates = {
    loading: false,
    success: false,
    error: false,
    message: ""
} 