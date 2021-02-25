import axios from "axios";
import { ApiRes } from "@utils/apiTypes";

const apiKeys = [
  "&key=AIzaSyCe-eX18XkjaV3_ChgXqrShm2uRUE_jPfc",
  "&key=AIzaSyCnpNDwgqURJK3N3v4-hKJvt1CYRaltfYc",
  "&key=AIzaSyAh_RJxB4fmqZGXt660B-7mmY-lmE79_Vc",
  "&key=AIzaSyAoFn3cuM3MMBFPVpEirttb_OhcqFIfc_c",
];

export let ApiKey = apiKeys[0];

let numberKey = 0;

export type Ajax = {
  method: any;
  url: string;
};

export const ajax = async (body: Ajax) => {
  try {
    let response = await axios(body);

    if (response.status === 403) {
      ++numberKey;
      ApiKey = apiKeys[numberKey % 4];
      response = await axios(body);
    }

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
