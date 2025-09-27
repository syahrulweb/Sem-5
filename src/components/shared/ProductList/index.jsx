export default function ProductList() {
  const products = Array(6).fill({
    title: "Judul Buku",
    desc: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    time: "9 mins",
  });

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
                <a href="#" className="btn btn-primary btn-lg px-4 me-3 shadow">
                  <i className="bi bi-eye-fill me-2"></i> View
                </a>
                <a
                  href="#"
                  className="btn btn-outline-secondary btn-lg px-4 shadow-sm"
                >
                  <i className="bi bi-book me-2"></i> Other Book
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Card Grid */}
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {products.map((product, index) => (
              <div className="col" key={index}>
                <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden hover-shadow">
                  <div className="position-relative">
                    <img
                      src={`https://picsum.photos/600/400?random=${index}`}
                      className="card-img-top img-fluid"
                      alt={product.title}
                      style={{ objectFit: "cover", height: "250px" }}
                    />
                    <span className="badge bg-primary position-absolute top-0 end-0 m-2 shadow-sm">
                      {product.time}
                    </span>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold text-dark">
                      {product.title}
                    </h5>
                    <p className="card-text text-muted flex-grow-1">
                      {product.desc}
                    </p>
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
                        <i className="bi bi-clock me-1"></i>
                        {product.time}
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
