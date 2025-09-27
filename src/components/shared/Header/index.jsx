import { Link } from "react-router";

export default function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        {/* Brand */}
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center fw-bold text-primary"
        >
          <i className="fa-solid fa-book fa-xl me-2"></i> BookStore
        </Link>

        {/* Toggle for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link fw-semibold">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/books" className="nav-link fw-semibold">
                Books
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/team" className="nav-link fw-semibold">
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link fw-semibold">
                Contact
              </Link>
            </li>
          </ul>

          {/* Buttons */}
          <div className="d-flex">
            <Link to="/login">
              <button className="btn btn-outline-primary me-2 px-4">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="btn btn-primary px-4 shadow-sm">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
