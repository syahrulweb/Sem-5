const LoginForm = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 rounded-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4 text-primary">Login</h2>
        <form>
          {/* Username */}
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Masukkan username"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Masukkan email"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Masukkan password"
              required
            />
          </div>

          {/* Button */}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg shadow-sm">
              <i className="bi bi-box-arrow-in-right me-2"></i> Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
