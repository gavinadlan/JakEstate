import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    id: 1,
    name: "Donald Jackman",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    rating: 5,
    text: "JakEstate helped me find the perfect house in SCBD. The process was highly professional and transparent."
  },
  {
    id: 2,
    name: "Richard Nelson",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    rating: 4,
    text: "The JakEstate team truly understood my needs. They don’t just sell properties—they provide housing solutions."
  },
  {
    id: 3,
    name: "James Washington",
    role: "Professional",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    rating: 5,
    text: "Exceptional service from start to handover. I highly recommend JakEstate."
  }
];

const Testimonials = () => {
  const [containerRef, isInView] = useInView();

  return (
    <section className="py-20 bg-white">
      <div 
        ref={containerRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Customer <span className="text-gray-500">Testimonials</span></h2>
          <p className="mt-4 text-gray-600">
            Real Stories from Those Who Found Home with Us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`bg-white p-6 rounded-lg shadow-md transition-all duration-700 transform ${
                isInView 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
                <div className="flex justify-center my-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;