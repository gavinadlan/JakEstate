import { useInView } from '../hooks/useInView';

const projects = [
  {
    id: 1,
    name: "Lyndon",
    location: "BSD City",
    price: "Rp5.500.000,00",
    image: "https://asset.kompas.com/crops/twg7kdddEA9KJXCoD8Ee1wkocWk=/0x41:1152x809/1200x800/data/photo/2020/11/24/5fbca07f54a2e.jpeg"
  },
  {
    id: 2,
    name: "Pondok Indah House",
    location: "Jakarta Selatan",
    price: "Rp52.000.000,00",
    image: "https://blog.gethome.id/wp-content/uploads/2023/06/rumah-h.-m.-fitno.jpg"
  },
  {
    id: 3,
    name: "Green Garden",
    location: "Jakarta Barat",
    price: "Rp6.800.000,00",
    image: "https://picture.rumah123.com/r123-images/720x420-crop/customer/792064/2024-07-05-08-22-54-b3840491-78cf-4da4-a3b4-a37f7b006e08.jpg"
  },
  {
    id: 4,
    name: "PIK 2",
    location: "Jakarta Utara",
    price: "Rp9,900,000",
    image: "https://shila.co.id/wp-content/uploads/2024/11/Keuntungan-Membangun-Rumah-Mewah-scaled.webp"
  }
];

const Projects = () => {
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
          <h2 className="text-3xl font-bold">Projects <span className="text-gray-500">Completed</span></h2>
          <p className="mt-4 text-gray-600">
            Crafting Spaces, Building Legacies—Explore Our Portfolio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform ${
                isInView 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <div className="mt-2 flex justify-between items-center text-gray-600">
                  <span>{project.price}</span>
                  <span>| {project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;