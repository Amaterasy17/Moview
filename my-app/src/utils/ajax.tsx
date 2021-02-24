import axios from "axios";
import { ApiRes } from "@utils/apiTypes";

export {};

export type Ajax = {
  method: any;
  url: string;
};

export const ajax = async (body: Ajax) => {
  try {
    const response = await axios(body);
    return {
      isError: false,
      data: response.data,
    };
  } catch (err) {
    console.log(err);
    return {
      isError: true,
      data: null,
    };
  }
};
