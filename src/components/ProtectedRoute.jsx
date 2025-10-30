import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Anda harus login terlebih dahulu!");
    return <Navigate to="/login" replace />;
  }

  if (role && user.role !== role) {
    alert("Akses ditolak! Halaman ini hanya untuk admin.");
    return <Navigate to="/" replace />;
  }

  return children;
}
