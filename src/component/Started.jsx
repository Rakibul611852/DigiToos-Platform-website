const Started = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      
      {/* Header */}
      <div>
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          Get Started in 3 Steps
        </h2>
        <p className="text-gray-500 text-center mt-4">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {/* Card 1 */}
        <div className="relative text-center py-15 px-5 rounded-xl shadow-xl border border-gray-100">
          
          <span className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full text-white font-bold 
            bg-purple-600 ">
            01
          </span>

          <div className="bg-blue-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 p-2">
            <img src="/products/Account.png" alt="Create Account" />
          </div>

          <h3 className="text-xl font-bold">Create Account</h3>
          <p className="text-gray-500 mt-2">
            Sign up for free in seconds. No credit card required.
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative text-center py-15 px-5 rounded-xl shadow-xl border border-gray-100">
          
         <span className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full text-white font-bold 
          bg-purple-600 ">
            02
          </span>

          <div className="bg-blue-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 p-2">
            <img src="/products/products.png" alt="Choose Products" />
          </div>

          <h3 className="text-xl font-bold">Choose Products</h3>
          <p className="text-gray-500 mt-2">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        {/* Card 3 */}
        <div className="relative text-center py-15 px-5 rounded-xl shadow-xl border border-gray-100">
          
         <span className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full text-white font-bold 
            bg-purple-600 ">
            03
          </span>

          <div className="bg-blue-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 p-2">
            <img src="/products/creating.png" alt="Start Using" />
          </div>

          <h3 className="text-xl font-bold">Start Using</h3>
          <p className="text-gray-500 mt-2">
           Enjoy premium tools instantly after setup.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Started;