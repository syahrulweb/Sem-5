import { BrowserRouter, Route, Routes } from "react-router-dom";

// ===================== PUBLIC =====================
import Home from "./pages/public";
import PublicLayout from "./layouts/public";
import Books from "./pages/public/books";
import ShowBooks from "./pages/public/books/show";

// ===================== AUTH =====================
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

// ===================== ADMIN =====================
import AdminLayout from "./layouts/admin";
import Dashboard from "./pages/admin";
import AdminBooks from "./pages/admin/books";
import BooksCreate from "./pages/admin/books/create";
import BooksEdit from "./pages/admin/books/edit";
import AdminGenres from "./pages/admin/genres";
import GenresCreate from "./pages/admin/genres/create";
import GenresEdit from "./pages/admin/genres/edit";
import AdminAuthors from "./pages/admin/authors";
import AuthorsCreate from "./pages/admin/authors/create";
import AuthorsEdit from "./pages/admin/authors/edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ===================== PUBLIC ROUTES ===================== */}
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />

          {/* Books */}
          <Route path="books">
            <Route index element={<Books />} />
            <Route path="show/:id" element={<ShowBooks />} />
          </Route>
        </Route>

        {/* ===================== AUTH ROUTES ===================== */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* ===================== ADMIN ROUTES ===================== */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />

          {/* Books Management */}
          <Route path="books">
            <Route index element={<AdminBooks />} />
            <Route path="create" element={<BooksCreate />} />
            <Route path="edit/:id" element={<BooksEdit />} />
          </Route>

          {/* Authors Management */}
          <Route path="authors">
            <Route index element={<AdminAuthors />} />
            <Route path="create" element={<AuthorsCreate />} />
            <Route path="edit/:id" element={<AuthorsEdit />} />
          </Route>

          {/* Genres Management */}
          <Route path="genres">
            <Route index element={<AdminGenres />} />
            <Route path="create" element={<GenresCreate />} />
            <Route path="edit/:id" element={<GenresEdit />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
