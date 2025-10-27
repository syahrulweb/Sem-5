import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuthors, deleteAuthor } from "../../../_services/authors";

export default function AdminAuthors() {
  const [authors, setAuthors] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    try {
      const data = await getAuthors();
      setAuthors(data);
    } catch (error) {
      console.error("Gagal memuat data author:", error);
    }
  };

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus author ini?");
    if (confirmDelete) {
      try {
        await deleteAuthor(id);
        setAuthors(authors.filter((a) => a.id !== id));
        alert("Author berhasil dihapus!");
      } catch (error) {
        console.error("Gagal menghapus author:", error);
      }
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Manajemen Author</h1>
            <p className="text-gray-500 text-sm">Kelola daftar penulis buku di sini</p>
          </div>
          <Link
            to="/admin/authors/create"
            className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-medium shadow hover:bg-indigo-700 transition-all duration-200"
          >
            Tambah Author
          </Link>
        </div>

        <div className="overflow-hidden border border-gray-200 rounded-xl">
          <table className="min-w-full border-collapse bg-white text-left">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-3 text-sm font-semibold text-gray-700 w-16 text-center">
                  No
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-700">
                  Nama Author
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-700 text-center">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {authors.length > 0 ? (
                authors.map((author, index) => (
                  <tr
                    key={author.id}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-indigo-50 transition-all`}
                  >
                    <td className="px-6 py-3 text-center text-gray-700 font-medium">
                      {index + 1}
                    </td>
                    <td className="px-6 py-3 text-gray-800">{author.name}</td>
                    <td className="px-6 py-3 text-center relative">
                      <button
                        onClick={() => toggleDropdown(author.id)}
                        className="text-gray-500 hover:text-gray-800"
                      >
                        ⋮
                      </button>

                      {openDropdown === author.id && (
                        <div className="absolute right-6 mt-2 bg-white shadow-md border rounded-lg w-36 z-10">
                          <ul className="text-sm text-gray-700">
                            <li>
                              <Link
                                to={`/admin/authors/edit/${author.id}`}
                                className="block px-4 py-2 hover:bg-gray-100"
                              >
                                Edit
                              </Link>
                            </li>
                            <li>
                              <button
                                onClick={() => handleDelete(author.id)}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                              >
                                Hapus
                              </button>
                            </li>
                          </ul>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="px-6 py-6 text-center text-gray-500 italic"
                  >
                    Tidak ada data author untuk saat ini.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
