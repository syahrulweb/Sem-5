import { useState } from "react";
import booksData from "../../../utils/Books.js";

export default function ProductList() {
  const [books, setBooks] = useState(booksData);

  const handleAddBook = () => {
    const newBook = {
      id: books.length + 1,
      title: "Buku Baru",
      author: "Penulis Baru",
      year: 2025,
      description: "Buku tambahan yang baru ditambahkan.",
      image: `https://picsum.photos/600/400?random=${books.length + 10}`,
    };
    setBooks([...books, newBook]);
  };

  return (
    <>
      {/* Section Intro */}
      <section className="py-5 text-center bg-light position-relative overflow-hidden">
        <div className="container position-relative">
          <div className="row py-lg-5">
            <div className="col-lg-8 mx-auto">
              <h1 className="fw-bold display-4 mb-3 text-primary">
                📚 Best Seller Books
              </h1>
              <p className="lead text-muted">
                Koleksi buku terbaik pilihan pembaca, lengkap dengan rekomendasi
                khusus hanya untuk Anda.
              </p>
              <div className="mt-4">
                <button
                  onClick={handleAddBook}
                  className="btn btn-success btn-lg px-4 me-3 shadow"
                >
                  <i className="bi bi-plus-circle me-2"></i> Tambah Buku
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Card Grid */}
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {books.map((book) => (
              <div className="col" key={book.id}>
                <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden hover-shadow">
                  <div className="position-relative">
                    <img
                      src={book.image}
                      className="card-img-top img-fluid"
                      alt={book.title}
                      style={{ objectFit: "cover", height: "250px" }}
                    />
                    <span className="badge bg-primary position-absolute top-0 end-0 m-2 shadow-sm">
                      {book.year}
                    </span>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold text-dark">
                      {book.title}
                    </h5>
                    <p className="card-text text-muted flex-grow-1">
                      {book.description}
                    </p>
                    <small className="text-muted d-block mb-2">
                      ✍️ {book.author}
                    </small>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-primary shadow-sm"
                        >
                          <i className="bi bi-eye me-1"></i> View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <i className="bi bi-pencil me-1"></i> Edit
                        </button>
                      </div>
                      <small className="text-muted">
                        <i className="bi bi-calendar me-1"></i>
                        {book.year}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
