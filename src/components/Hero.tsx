const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Explore homes that<br />fit your dreams
          </h1>
          <div className="flex justify-center gap-4">
          <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-gray-800 transition-all duration-300">
             Projects
          </button>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero