import { create } from "zustand";
import axios, { AxiosInstance } from "axios";

interface IAxiosState {
  loginStatus: string;
  instance: AxiosInstance | null;
  init: () => void;
}

export const useAxios = create<IAxiosState>()((set) => ({
  loginStatus: "authenticated",
  instance: null,
  init: () => {
    const instance = axios.create({
      baseURL: process.env.APP_ORIGIN_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    instance.interceptors.request.use(
      async (config) => {
        set({
          loginStatus: "pendingVerification",
        });

        const bearerToken = localStorage.getItem("token");

        config.headers.Authorization = `Bearer ${bearerToken}`;

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    instance.interceptors.response.use(
      (response) => {
        if (response.request.responseURL.includes("/auth/profile")) {
          localStorage.setItem("userInfo", JSON.stringify(response.data));
        }
        if (response.data.access_token) {
          localStorage.setItem("token", response.data.access_token);
          set({
            loginStatus: "authenticated",
          });
        }
        return response;
      },
      (error) => {
        if (error.code === "ERR_NETWORK") {
          return Promise.reject(error);
        }

        if (error?.response?.status === 401) {
          // handle 401 error
          set({
            loginStatus: "unauthenticated",
          });
        } else {
          return Promise.reject(error);
        }
      }
    );

    set({ instance });
  },
}));
