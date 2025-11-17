import React from 'react';

// A card component for each vehicle category
const VehicleCard: React.FC<{ title: string; imageUrl: string; imageConcept: string; }> = ({ title, imageUrl, imageConcept }) => (
  <a href="#" className="block relative rounded-xl overflow-hidden group shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(255,106,0,0.2)]">
    <img 
      src={imageUrl} 
      alt={imageConcept} 
      className="w-full h-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-6">
      <h3 className="text-2xl font-bold text-white tracking-wide">{title}</h3>
      <p className="mt-2 text-zess-orange font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Explore Products →
      </p>
    </div>
  </a>
);


const BrowseByVehicle: React.FC = () => {
  const vehicles = [
    { title: "Motorcycle", imageUrl: "https://picsum.photos/400/500?random=1", imageConcept: "motorcycle tire closeup" },
    { title: "3-Wheeler", imageUrl: "https://picsum.photos/400/500?random=2", imageConcept: "three wheeler tire" },
    { title: "EV (E-Rickshaw)", imageUrl: "https://picsum.photos/400/500?random=3", imageConcept: "e rickshaw tire" },
    { title: "LCV", imageUrl: "https://picsum.photos/400/500?random=4", imageConcept: "light truck tire closeup" },
    { title: "Farm/Tiller", imageUrl: "https://picsum.photos/400/500?random=5", imageConcept: "agriculture tiller tire" },
  ];

  const tireTreadSvg = `<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M10 0 L20 10 L10 20 L0 10 Z M30 20 L40 30 L30 40 L20 30 Z" fill="rgba(255,255,255,0.03)"/></svg>`;
  const tireTreadUrl = `url("data:image/svg+xml,${encodeURIComponent(tireTreadSvg)}")`;

  return (
    <section className="bg-zess-dark py-24 relative" style={{ backgroundImage: tireTreadUrl }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-2">Browse Tyre by Vehicle</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Find the perfect tyre designed for your specific vehicle and needs.</p>
          <div className="w-24 h-1 bg-zess-orange mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.title} {...vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByVehicle;