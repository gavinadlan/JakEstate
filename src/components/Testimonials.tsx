import { useInView } from '../hooks/useInView';
import { User } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Donald Jackman",
    role: "Marketing Manager",
    rating: 5,
    text: "JakEstate helped me find the perfect house in SCBD. The process was highly professional and transparent."
  },
  {
    id: 2,
    name: "Richard Nelson",
    role: "Entrepreneur",
    rating: 5,
    text: "The JakEstate team truly understood my needs. They don't just sell properties—they provide housing solutions."
  },
  {
    id: 3,
    name: "James Washington",
    role: "Professional",
    rating: 5,
    text: "Exceptional service from start to handover. I highly recommend JakEstate."
  },
  {
    id: 4,
    name: "Sarah Chen",
    role: "Business Owner",
    rating: 5,
    text: "Found my dream office space through JakEstate. Their market knowledge is impressive and service is outstanding."
  },
  {
    id: 5,
    name: "Michael Rodriguez",
    role: "Investment Consultant",
    rating: 4,
    text: "Great investment advice and property selection. JakEstate helped me build a solid real estate portfolio."
  },
  {
    id: 6,
    name: "Emily Thompson",
    role: "Architect",
    rating: 5,
    text: "As an architect, I appreciate quality properties. JakEstate consistently delivers exceptional properties."
  },
  {
    id: 7,
    name: "David Kim",
    role: "Tech Executive",
    rating: 5,
    text: "Relocated to Jakarta and JakEstate made the transition smooth. Found the perfect home in Kemang."
  },
  {
    id: 8,
    name: "Lisa Anderson",
    role: "Property Investor",
    rating: 5,
    text: "Invested in multiple properties through JakEstate. Their expertise in Jakarta's market is unmatched."
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

        {/* Horizontal Scrollable Container */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`flex-shrink-0 w-80 bg-white p-6 rounded-lg shadow-md transition-all duration-700 transform ${
                  isInView 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
                    <User className="w-10 h-10 text-gray-400" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <div className="flex justify-center my-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center mt-6">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 bg-gray-300 rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;