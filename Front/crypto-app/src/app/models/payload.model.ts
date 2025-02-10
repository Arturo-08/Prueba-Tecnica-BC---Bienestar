import internal from "stream";

export interface Payload<T>{
    statusCode: number,
    data:T,
    message:String,
}