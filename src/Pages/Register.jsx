export default function Register() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">
              <h3 className="text-center mb-4 fw-bold text-primary">
                Create an Account
              </h3>
              <form>
                {/* Username */}
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your username"
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                {/* Confirm Password */}
                <div className="mb-4">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Re-enter your password"
                    required
                  />
                </div>

                {/* Button */}
                <button type="submit" className="btn btn-primary w-100">
                  Register
                </button>
              </form>

              <p className="text-center mt-3 text-muted">
                Already have an account?{" "}
                <a href="/login" className="text-decoration-none text-primary">
                  Login here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
