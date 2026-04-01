import { useState } from 'react';
import { toast } from 'react-toastify';

const ModelCard = ({ model, carts, setCarts }) => {
  const [clicked, setClicked] = useState(false); // button click state

  const handleSubscribe = () => {

    const isFound = carts.find(item => item.id === model.id);
    if (isFound) {
      toast.error(`${model.name} is already in Cart!`);
      return;
    }

    setCarts([...carts, model]);
    toast.success(`${model.name} Added to cart!`);

    setClicked(true);
  };

  return (
    <div className="">
      <div className="shadow-xl rounded-lg border border-gray-200">
        {/* Tag */}
        <div className="flex items-center justify-end pt-5 pr-5">
          {model?.tag && (
            <span
              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                model?.tagType === 'best seller'
                  ? 'bg-green-100 text-green-800'
                  : model?.tagType === 'popular'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-purple-100 text-purple-800'
              }`}
            >
              {model.tag}
            </span>
          )}
        </div>


        <div className="h-20 w-20 border border-gray-200 rounded-full flex items-center justify-center mt-5 ml-5 overflow-hidden p-3">
          <img src={model.icon} alt={model.name} />
        </div>


        <div className="p-5 space-y-3">
          <h3 className="text-2xl font-bold">{model.name}</h3>
          <p>{model.description}</p>
          <div>
            <span className="text-2xl font-bold">${model.price}</span>
            <span className="text-gray-500">/{model.period}</span>
          </div>


          <div className="space-y-2">
            {model.features.map((feature, index) => (
              <p key={index} className="text-gray-500 flex items-center gap-2">
                <span className="text-green-500">✔️</span>
                {feature}
              </p>
            ))}
          </div>


          <button
            onClick={handleSubscribe}
            className={`font-bold py-2 px-4 rounded-xl w-full mx-auto transition-colors duration-300
              ${clicked
                ? "bg-green-500 text-white hover:bg-green-600"   // clicked হলে success color
                : " bg-purple-700 text-white hover:bg-blue-700" // default
              }`}
          >
            {clicked ? "Add to Cart" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;