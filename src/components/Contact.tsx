import { useInView } from '../hooks/useInView';

const Contact = () => {
  const [containerRef, isInView] = useInView();

  return (
    <section className="py-20 bg-gray-50">
      <div 
        ref={containerRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Contact <span className="text-gray-500">With Us</span></h2>
          <p className="mt-4 text-gray-600">
            Ready to Make a Move? Let's Build Your Future Together
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`transition-all duration-700 delay-200 transform ${
                isInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white shadow-sm"
                  placeholder="John Doe"
                />
              </div>
              <div className={`transition-all duration-700 delay-400 transform ${
                isInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white shadow-sm"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className={`transition-all duration-700 delay-600 transform ${
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white shadow-sm"
                placeholder="Tell us about your requirements..."
              ></textarea>
            </div>
            <div className={`text-center transition-all duration-700 delay-800 transform ${
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;