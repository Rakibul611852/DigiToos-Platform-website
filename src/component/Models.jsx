import {use} from 'react'

import ModelCard from './ModelCard';

 const Models = ({modelPromise, carts, setCarts}) => {
  const models = use(modelPromise)



  return (
     <div className="py-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {models.map(model =>(
          <ModelCard key={model.id} model={model} carts={carts} setCarts={setCarts}/>
        ))}
      </div>
    </div>
  );
};

export default Models;