import axios from "axios";

export {};

export type Ajax = {
    method: any,
    url: string,
}

export const ajax = async (body: Ajax) => {
    const response = await axios(body);
    console.log(response);
    return response;
}