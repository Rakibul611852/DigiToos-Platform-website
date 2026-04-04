const NavBar = ({ carts, setActiveTab }) => {
  return (
    <div className="navbar max-w-7xl mx-auto px-4">


      <div className="navbar-start">
        <span className="text-purple-700 text-2xl md:text-4xl font-bold ml-2">
          DigiTools
        </span>

        <div className="dropdown">
          <button tabIndex={0} className="btn btn-square btn-ghost md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              className="h-5 w-5 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>

      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-5 px-1 text-lg">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>

      <div className="md:navbar-end flex items-center gap-4">

        <div
          className="relative cursor-pointer"
          onClick={() => setActiveTab("cart")}
        >
          <img
            className="w-6 h-6"
            src="/products/shopping-cart.png"
            alt="cart"
          />
          {carts.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {carts.length}
            </span>
          )}
        </div>

        <a className="btn btn-ghost">Login</a>
        <a className="btn bg-indigo-600 text-white rounded-full">
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default NavBar;