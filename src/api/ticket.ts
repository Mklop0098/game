import axios from "axios";
import { LoginInputType, RegisterInputType } from "../type";
import { loginRoute, registerRoute, updateTicketRoute } from "./api";

export const updateTicket = async (code: number, id: number) => {
  const res = await axios.post(updateTicketRoute, {
    code,
    seller: id
  });
  return res;
};