export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-5">
        <div className="row">
          {/* Brand & Deskripsi */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-uppercase">📚 NF Academy</h5>
            <p className="small text-muted">
              Platform belajar dan koleksi buku terbaik untuk mendukung
              perkembangan ilmu pengetahuan Anda.
            </p>
          </div>

          {/* Navigasi */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-semibold text-uppercase mb-3">Menu</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light opacity-75 hover-opacity">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light opacity-75 hover-opacity">
                  Book
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light opacity-75 hover-opacity">
                  Team
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light opacity-75 hover-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Sosial Media */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-semibold text-uppercase mb-3">Follow Us</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light fs-4">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-light fs-4">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="text-light fs-4">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-top border-secondary pt-3 mt-4 text-center">
          <p className="mb-0 small">
            &copy; 2025 NF Academy — All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
