import API from "../_api";

export const createUser = async (data) => {
  const response = await API.post("/register", data);
  return response.data;
};

export const loginUser = async (data) => {
  const response = await API.post("/login", data);
  return response.data;
};
