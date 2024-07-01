import { LoginFormData } from "../Pages/Auth/Login";
import { RegisterFormData } from "../Pages/Auth/Register";
import { baseUrl } from "./baseUrl";

export const register = async (data: RegisterFormData) => {
  try {
    const response = await baseUrl.post("/api/v1/auth/register", data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.msg || "An error occurred");
  }
};

export const validateToken = async () => {
  try {
    const response = await baseUrl.get("/api/v1/auth/validate-token", {
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.msg || "An error occurred");
  }
};

export const login = async (data: LoginFormData) => {
  try {
    const response = await baseUrl.post("/api/v1/auth/login", data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.msg || "An error occurred");
  }
};

export const logout = async () => {
  try {
    const response = await baseUrl.post(
      "/api/v1/auth/logout",
      {},
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.msg || "An error occurred");
  }
};

export const addHotel = async (hotelFormData: FormData) => {
  try {
    console.log({ hotelFormData: hotelFormData.getAll("facilities") });
    const response = await baseUrl.post("/api/v1/hotel", hotelFormData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.msg || "An error occurred");
  }
};
