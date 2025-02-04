import { useInView } from '../hooks/useInView';

const About = () => {
  const [containerRef, isInView] = useInView();
  const stats = [
    { number: "10+", label: "Years of Excellence" },
    { number: "12+", label: "Projects Completed" },
    { number: "20+", label: "Mn. Sq. Ft. Delivered" },
    { number: "25+", label: "Ongoing Projects" },
  ];

  return (
    <section className="py-20 bg-white">
      <div 
        ref={containerRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">About <span className="text-gray-500">Our Brand</span></h2>
          <p className="mt-4 text-gray-600">
            Passionate About Properties, Dedicated to Your Vision
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`relative transition-all duration-1000 delay-300 transform ${
            isInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
                alt="Modern building"
                className="object-cover"
              />
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-500 transform ${
            isInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="grid grid-cols-2 gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600">{stat.number}</div>
                  <div className="text-gray-600 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <p className="text-gray-600">
            JakEstate stands as a pioneer in Jakarta's premium property market, backed by over 10 years of experience. 
            We understand that finding the perfect home amidst the city's dynamic landscape can be challenging. 
            Through a personalized and professional approach, our team is dedicated to helping you discover a property that perfectly complements your modern lifestyle.
            </p>
            
            <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;