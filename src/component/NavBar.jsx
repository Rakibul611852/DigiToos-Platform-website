const NavBar = ({ carts, setActiveTab }) => {
  return (
    <div className="navbar justify-around max-w-7xl mx-auto">

      <div className="flex items-center gap-1 font-bold text-xl">
        <span className="text-purple-700 text-4xl">DigiTools</span>
      </div>


      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-5 px-1 text-xl">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>

      <div
        className="relative flex items-center cursor-pointer"
        onClick={() => setActiveTab("cart")}
      >
        <img className="w-6 h-6" src="/products/shopping-cart.png" alt="cart" />
        {carts.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {carts.length}
          </span>
        )}
      </div>

      <div className="flex text-3xl gap-5">
        <a href="" className="btn btn-ghost">Login</a>
        <a className="btn rounded-full  bg-indigo-600  text-white">
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default NavBar;