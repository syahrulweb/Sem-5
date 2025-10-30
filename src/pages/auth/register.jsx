import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");

  const handleRegister = (e) => {
    e.preventDefault();

    // Ambil data users lama dari localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Cek kalau email sudah terdaftar
    const isRegistered = existingUsers.some((u) => u.email === email);
    if (isRegistered) {
      alert("Email sudah terdaftar! Silakan login.");
      navigate("/login");
      return;
    }

    // Buat user baru
    const newUser = { email, password, role };

    // Simpan ke daftar users
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Simpan user yang sedang login
    localStorage.setItem("user", JSON.stringify(newUser));

    alert(`Registrasi berhasil sebagai ${role}`);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded-xl shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
          required
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
        >
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>

        <button
          type="submit"
          className="bg-green-600 text-white py-2 w-full rounded hover:bg-green-700"
        >
          Register
        </button>

        <p className="text-sm text-center mt-3">
          Sudah punya akun?{" "}
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login di sini
          </span>
        </p>
      </form>
    </div>
  );
}
