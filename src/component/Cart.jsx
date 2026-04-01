import { toast } from "react-toastify";

const Cart = ({ carts = [], setCarts }) => {

  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCarts([]);
    toast.success("Payment Successful!")
  };

  const handleClick = (item) => {
   const filteredArray = carts.filter(c => c.id !== item.id);
   setCarts(filteredArray);
   toast.success(`${item.name} "Removed from cart !"`)
  }

  return (
    <div>
      <div className="space-y-5 mt-10 max-w-5xl mx-auto border border-gray-100 p-10 rounded-xl shadow-lg">

        <h3 className="text-3xl font-bold mt-7">Your Cart</h3>

        {
        carts.length === 0 ? (
           <div className="p-10 rounded-xl">
               <img className=" mx-auto border border-gray-200 rounded-full p-5  bg-purple-100 h-20 w-20 shadow-2xl" src="/products/shopping-cart.png" alt="" />
               <p className="text-center text-2xl p-5 text-gray-400">
                Your cart is empty.
          </p>
           </div>
        ) : (
          <>
            {carts.map(item => (
              <div
                key={item.id}
                className="flex max-w-5xl mx-auto border p-7 rounded-2xl border-gray-100 shadow-2xl items-center justify-between"
              >
                <div className="flex gap-12">
                  
                  <img
                    className="rounded-full border border-gray-200 p-4 h-20 w-20 object-contain"
                    src={item.icon}
                    alt={item.name}
                  />

                  <div>
                    <h3 className="text-3xl font-bold">{item.name}</h3>
                    <div className="">
                      <span className="text-2xl font-bold">
                        ${item.price}
                      </span>
                      <span className="text-gray-500 text-xl font-bold">
                        /{item.period}
                      </span>
                    </div>
                  </div>
                </div>

                <span onClick={()=> handleClick(item)} className=" btn text-lg font-bold text-red-700 cursor-pointer">
                  Remove
                </span>
              </div>
            ))}

            <div className="flex justify-between border border-gray-200 shadow-2xl p-5 rounded-xl  ">
              <span className="text-3xl font-extrabold">Total</span>
              <span className="text-3xl font-extrabold">${totalPrice}</span>
            </div>

            <button
              onClick={handlePayment}
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-4 px-4 rounded-xl w-full text-2xl"
            >
              Proceed to Checkout
            </button>
          </>
        )}

      </div>
    </div>
  );
};

export default Cart;