import { LoginFormValues, LoginResponse } from "@/interfaces";
import api from "./index";

export const login = async (body: LoginFormValues) => {
  return await api.post<LoginResponse>("/auth/admin/login", body);
};
