import { RegisterFormData } from "../Pages/Auth/Register";
import { baseUrl } from "./baseUrl";

export const register = async (data: RegisterFormData) => {
  try {
    const response = await baseUrl.post("/api/v1/auth/register", data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "An error occurred");
  }
};
