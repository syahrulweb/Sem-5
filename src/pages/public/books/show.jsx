import { useEffect, useState } from "react";
import { showBook } from "../../../_services/books";
import { useNavigate, useParams } from "react-router-dom";
import { bookImageStorage } from "../../../_api";
import { createTransactions } from "../../../_services/transactions";

export default function ShowBook() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchData = async () => {
      const [bookData] = await Promise.all([showBook(id)]);
      setBook(bookData);
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!accessToken) {
      navigate("/login");
      return;
    }

    try {
      const payload = {
        book_id: id,
        quantity: quantity,
      };

      await createTransactions(payload);
      alert("✅ Transaction successful!");
    } catch (error) {
      console.log("Error processing transaction:", error.response?.data || error);
      alert("❌ Gagal membuat transaksi. Pastikan stok tersedia & role sudah benar!");
    }
  };

  if (!book) {
    return (
      <div className="text-center py-10 text-gray-500 dark:text-gray-400">
        Loading...
      </div>
    );
  }

  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          {/* Gambar buku */}
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img
              className="w-full rounded-lg shadow-md"
              src={`${bookImageStorage}/${book.cover_photo}`}
              alt={book.title}
            />
          </div>

          {/* Detail buku */}
          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {book.title}
            </h1>

            <div className="mt-4 sm:flex sm:items-center sm:gap-4">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                Rp {book.price}
              </p>
            </div>

            <div className="mt-6 sm:mt-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Jumlah
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={quantity}
                    min={1}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="mt-1 block w-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:outline-none focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800 flex items-center justify-center"
                >
                  Beli
                </button>
              </form>
            </div>

            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

            <p className="text-gray-600 dark:text-gray-400">{book.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
