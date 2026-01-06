import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

import { API_URL } from "@/utils/url";

// 1. Define a custom interface to override the default Axios methods
// Because your interceptor returns 'res.data' directly instead of the full AxiosResponse
interface CustomAxiosInstance extends AxiosInstance {
  get<T = any, R = T, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<R>;
  post<T = any, R = T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R>;
  put<T = any, R = T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R>;
  patch<T = any, R = T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R>;
  delete<T = any, R = T, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<R>;
}

const instances = axios.create({
  baseURL: API_URL,
  timeout: 0,
  headers: {
    "Content-Type": "application/json",
  },
}) as CustomAxiosInstance; // Cast to our custom interface

instances.interceptors.request.use(
  async (config) => {
    let token: string | undefined | null = null;

    if (typeof window !== "undefined") {
      // Client-side: Get token from localStorage
      token = localStorage.getItem("token");
    } else {
      // Server-side: Get token from cookies
      try {
        const { cookies } = await import("next/headers");
        const cookieStore = await cookies();
        token = cookieStore.get("token")?.value;
      } catch (error) {
        console.error("Error fetching cookie on server:", error);
      }
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err),
);

instances.interceptors.response.use(
  (res) => {
    // This is why we need the CustomAxiosInstance interface.
    // You are unwrapping the data here.
    return res.data;
  },
  async (err) => {
    // Standardize error return
    return Promise.reject(
      err.response?.data || { message: "Unknown Error", statusCode: 500 },
    );
  },
);

export default instances;

// Re-export for backward compatibility
export type { ApiResponseError } from "@/interfaces/general";
