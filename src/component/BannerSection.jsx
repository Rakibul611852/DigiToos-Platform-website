const BannerSection = () => {
  return (

  <div className="bg-purple-700 py-10">
    
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center text-white">
      
  
      <div className="border-b md:border-b-0 md:border-r border-white/30 py-6">
        <h2 className="text-3xl font-bold">50K+</h2>
        <p className="opacity-80">Active Users</p>
      </div>


      <div className="border-b md:border-b-0 md:border-r border-white/30 py-6">
        <h2 className="text-3xl font-bold">200+</h2>
        <p className="opacity-80">Premium Tools</p>
      </div>

   
      <div className="py-6">
        <h2 className="text-3xl font-bold">4.9</h2>
        <p className="opacity-80">Rating</p>
      </div>

    </div>

  </div>

  );
};

export default BannerSection;
