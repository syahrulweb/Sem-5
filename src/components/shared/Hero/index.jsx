export default function Hero() {
  return (
    <>
      <section className="hero-section container py-5">
        <div className="row align-items-center shadow-lg rounded-4 overflow-hidden bg-light">
          {/* Text Section */}
          <div className="col-lg-7 p-5">
            <h1 className="display-4 fw-bold text-primary mb-3">
              Atomic Habits 📘
            </h1>
            <h2 className="h4 text-muted fw-semibold mb-4">
              Perubahan Kecil yang Memberikan Hasil Luar Biasa
            </h2>
            <p className="lead mb-4">
              Cara mudah dan terbukti untuk membentuk kebiasaan baik
              serta menghilangkan kebiasaan buruk secara konsisten.
            </p>

            <div className="d-flex gap-3">
              <button className="btn btn-primary btn-lg px-4 fw-bold shadow-sm">
                <i className="bi bi-cart-fill me-2"></i> Buy Now
              </button>
              <button className="btn btn-outline-dark btn-lg px-4 shadow-sm">
                <i className="bi bi-info-circle me-2"></i> Detail
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-5 d-none d-lg-block">
            <img
              src="https://picsum.photos/720/600"
              alt="Atomic Habits"
              className="img-fluid rounded-start"
            />
          </div>
        </div>
      </section>
    </>
  );
}
