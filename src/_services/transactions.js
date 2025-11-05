import { API } from "../_api";

// Ambil semua transaksi (khusus admin)
export const getTransactions = async () => {
  try {
    const { data } = await API.get("/admin/transactions", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return data.data;
  } catch (error) {
    console.log("Error fetching transactions:", error.response?.data || error);
    throw error;
  }
};

// Buat transaksi baru (otomatis cek role)
export const createTransactions = async (payload) => {
  try {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const role = userInfo?.role || "customer"; // default ke customer

    const endpoint =
      role === "admin"
        ? "/admin/transactions"
        : "/customer/transactions";

    const response = await API.post(endpoint, payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log("Error creating transaction:", error.response?.data || error);
    throw error;
  }
};
