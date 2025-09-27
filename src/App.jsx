import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/shared/Header/index.jsx";
import Footer from "./components/shared/Footer/index.jsx";

import Home from "./Pages/index.jsx";
import Books from "./Pages/Books";
import Contact from "./Pages/Contact";
import Team from "./Pages/Team";
import Register from "./Pages/Register.jsx";
import LoginForm from "./components/shared/LoginForm/index.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* Header cuma sekali */}
      <Header />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

      {/* Footer juga cuma sekali */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
