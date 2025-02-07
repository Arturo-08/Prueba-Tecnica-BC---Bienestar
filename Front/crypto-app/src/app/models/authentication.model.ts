import { UserInfo } from "./userInfo.model"

export interface Authentication{
    message: string,
    userInfo: UserInfo,
    authenticated: boolean
} 