import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showAuthor, updateAuthor } from "../../../_services/authors";

export default function AuthorEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    _method: "PUT",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await showAuthor(id);
      setFormData({ name: data.name, _method: "PUT" });
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateAuthor(id, formData);
      alert("Author berhasil diperbarui!");
      navigate("/admin/authors");
    } catch (error) {
      console.error("Gagal update author:", error);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-2xl px-4 py-8 mx-auto">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Edit Author
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nama Author
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Simpan Perubahan
          </button>
        </form>
      </div>
    </section>
  );
}
