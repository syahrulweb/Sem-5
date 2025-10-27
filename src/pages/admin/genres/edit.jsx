import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { showGenre, updateGenre } from "../../../_services/genres";

export default function GenresEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", _method: "PUT" });

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const data = await showGenre(id);
        setFormData({ name: data.name, _method: "PUT" });
      } catch (error) {
        console.error("Gagal memuat genre:", error);
      }
    };
    fetchGenre();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateGenre(id, formData);
      alert("Genre berhasil diperbarui!");
      navigate("/admin/genres");
    } catch (error) {
      console.error("Gagal memperbarui genre:", error);
      alert("Terjadi kesalahan saat memperbarui genre.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-10">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg border border-gray-100">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-1">Edit Genre</h1>
          <p className="text-gray-500 text-sm">Ubah data genre yang sudah ada</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Nama Genre
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Masukkan nama genre..."
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <Link
              to="/admin/genres"
              className="text-gray-600 font-medium hover:text-indigo-600 transition"
            >
              Kembali ke Daftar
            </Link>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2.5 rounded-lg shadow transition-all"
            >
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
