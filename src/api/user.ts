import axios from "axios";
import { LoginInputType, RegisterInputType } from "../type";
import { loginRoute, registerRoute } from "./api";

export const register = async (input: RegisterInputType) => {
  const res = await axios.post(registerRoute, {
    name: input.name,
    phone: input.phone
  });
  return res;
};

export const login = async (input: LoginInputType) => {
    const res = await axios.post(loginRoute, {
      phone: input.phone
    });
    return res;
};