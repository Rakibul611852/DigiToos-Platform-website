const TransparentSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 border border-gray-100 rounded-xl shadow-xl mt-30">


      <div className="text-center mb-16">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="max-w-xl mx-auto text-gray-500">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
          <div className="card-body rounded-2xl ">

            <h2 className="card-title text-2xl font-bold">Starter</h2>
            <p className="text-sm text-gray-500">Perfect for getting started</p>

            <div className="mt-4">
              <span className="text-3xl font-bold">$0</span>
              <span className="text-gray-400"> /month</span>
            </div>

            <ul className="mt-4 space-y-2 text-sm">
              <li>✅ Access to 10 free tools</li>
              <li>✅ Basic templates</li>
              <li>✅ Community support</li>
              <li>✅ 1 project per month</li>
            </ul>

            <div className="card-actions mt-6">
              <button className="text-white btn  from-indigo-600 via-purple-600 to-pink-500 w-full rounded-full ">
                Get Started Free
              </button>
            </div>

          </div>
        </div>

        <div className="card bg-primary text-primary-content shadow-2xl scale-105 relative">

          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="bg-orange-200 text-purple-800  text-xs font-semibold px-4 py-1 rounded-full shadow-lg h-3 w-40 shadow-zink-300">
              Most Popular
            </span>
          </div>

          <div className="card-body from-indigo-600 via-purple-600 to-pink-500 rounded-2xl">

            <h2 className="card-title text-2xl font-bold">Pro</h2>
            <p className="text-sm opacity-80">Best for professionals</p>

            <div className="mt-4">
              <span className="text-3xl font-bold">$99</span>
              <span> /month</span>
            </div>

            <ul className="mt-4 space-y-2 text-sm">
              <li>✅ Access to all premium tools</li>
              <li>✅ Unlimited templates</li>
              <li>✅ Priority support</li>
              <li>✅ Unlimited projects</li>
              <li>✅ Cloud sync</li>
              <li>✅ Advanced analytics</li>
            </ul>

            <div className="card-actions mt-6">
              <button className="btn btn-white w-full rounded-full">
                Start Pro Trial
              </button>
            </div>

          </div>
        </div>

        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
          <div className="card-body rounded-2xl ">

            <h2 className="card-title text-2xl font-bold">Enterprise</h2>
            <p className="text-sm text-gray-500">
              For teams and businesses
            </p>

            <div className="mt-4">
              <span className="text-3xl font-bold">$29</span>
              <span className="text-gray-400"> /month</span>
            </div>

            <ul className="mt-4 space-y-2 text-sm">
              <li>✅ Everything in Pro</li>
              <li>✅ Team collaboration</li>
              <li>✅ Custom integrations</li>
              <li>✅ Dedicated support</li>
              <li>✅ SLA guarantee</li>
              <li>✅ Custom branding</li>
            </ul>

            <div className="card-actions mt-6">
              <button className="text-white btn  from-indigo-600 via-purple-600 to-pink-500 w-full rounded-full ">
                Contact Sales
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default TransparentSection;