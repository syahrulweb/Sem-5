import { Outlet, useNavigate } from "react-router-dom";

export default function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Anda telah logout!");
    navigate("/books");
  };

  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      {/* NAVBAR */}
      <nav className="bg-white border-b border-gray-200 px-4 py-2.5 fixed left-0 right-0 top-0 z-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <button
              data-drawer-target="drawer-navigation"
              data-drawer-toggle="drawer-navigation"
              aria-controls="drawer-navigation"
              className="p-2 mr-2 text-gray-600 rounded-lg md:hidden hover:text-gray-900 hover:bg-gray-100 
                         focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:text-white 
                         dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 
                  2H4A1 1 0 013 5zM3 10a1 1 0 011-1h6a1 1 0 
                  110 2H4a1 1 0 01-1-1zM3 15a1 1 0 
                  011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                />
              </svg>
            </button>
            <a href="/admin" className="flex items-center">
              <img
                src="https://flowbite.s3.amazonaws.com/logo.svg"
                alt="Logo"
                className="mr-3 h-8"
              />
              <span className="text-2xl font-semibold dark:text-white">
                Admin Panel
              </span>
            </a>
          </div>

          {/* User dropdown */}
          <div className="relative flex items-center">
            <button
              type="button"
              id="user-menu-button"
              data-dropdown-toggle="dropdown"
              aria-expanded="false"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 
                         focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                alt="user avatar"
              />
            </button>

            <div
              id="dropdown"
              className="hidden absolute right-0 top-10 z-50 w-56 text-base list-none 
                         bg-white rounded-xl divide-y divide-gray-100 shadow dark:bg-gray-700 
                         dark:divide-gray-600"
            >
              <div className="py-3 px-4">
                <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                  Admin User
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  admin@example.com
                </span>
              </div>
              <ul className="py-1 text-gray-700 dark:text-gray-300">
                <li>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-100 
                               dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* SIDEBAR */}
      <aside
        id="drawer-navigation"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform 
                   -translate-x-full md:translate-x-0 bg-white border-r border-gray-200 
                   dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto py-5 px-3 h-full">
          <ul className="space-y-2">
            <li>
              <a
                href="/admin"
                className="flex items-center p-2 text-base font-medium text-gray-900 
                           rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="/admin/authors"
                className="flex items-center p-2 text-base font-medium text-gray-900 
                           rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span className="ml-3">Authors</span>
              </a>
            </li>
            <li>
              <a
                href="/admin/genres"
                className="flex items-center p-2 text-base font-medium text-gray-900 
                           rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span className="ml-3">Genres</span>
              </a>
            </li>
            <li>
              <a
                href="/admin/books"
                className="flex items-center p-2 text-base font-medium text-gray-900 
                           rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span className="ml-3">Books</span>
              </a>
            </li>
            <li>
              <a
                href="/admin/transactions"
                className="flex items-center p-2 text-base font-medium text-gray-900 
                           rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span className="ml-3">Transactions</span>
              </a>
            </li>
            <li>
              <a
                href="/admin/users"
                className="flex items-center p-2 text-base font-medium text-gray-900 
                           rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span className="ml-3">Users</span>
              </a>
            </li>
            <li>
              <a
                href="/admin/settings"
                className="flex items-center p-2 text-base font-medium text-gray-900 
                           rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span className="ml-3">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="p-4 md:ml-64 pt-20">
        <div
          className="border-2 border-dashed rounded-lg border-gray-300 
                     dark:border-gray-600 px-4 pt-4 pb-6"
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
}
