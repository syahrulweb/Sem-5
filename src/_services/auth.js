import { useJwt } from "react-jwt";
import { API } from "../_api";

// Fungsi login
export const login = async ({ email, password }) => {
  try {
    const { data } = await API.post("/login", { email, password });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//  Fungsi register
export const register = async ({ name, email, password }) => {
  try {
    const { data } = await API.post("/register", { name, email, password });
    return data;
  } catch (error) {
    console.log("Register error:", error.response?.data);
    throw error;
  }
};

// Fungsi logout
export const logout = async () => {
  try {
    const { data } = await API.post("/logout", null, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userInfo");
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Hook untuk decode token JWT
export const useDecodeToken = (token) => {
  const { decodedToken, isExpired } = useJwt(token);

  try {
    if (isExpired) {
      return {
        success: false,
        message: "Token expired",
        data: null,
      };
    }

    return {
      success: true,
      message: "Token valid",
      data: decodedToken,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
      data: null,
    };
  }
};
