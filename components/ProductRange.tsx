import React from 'react';

// A more visually pleasing product card for individual tyre types
const ProductCard: React.FC<{ title: string; description: string; imageUrl: string; imageConcept: string; }> = ({ title, description, imageUrl, imageConcept }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-zess-orange/30">
    <div className="h-56 overflow-hidden">
        <img src={imageUrl} alt={imageConcept} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"/>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 min-h-[40px]">{description}</p>
      <a href="#" className="inline-flex items-center font-semibold text-zess-orange group-hover:text-orange-500 transition-colors">
        Explore Products
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </div>
);

// A distinct, full-width card for the "Allied Products" category
const AlliedProductCard: React.FC<{ title: string; description: string; imageUrl: string; imageConcept: string; }> = ({ title, description, imageUrl, imageConcept }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-shadow duration-300 hover:shadow-2xl flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 h-48 md:h-full">
            <img src={imageUrl} alt={imageConcept} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
        </div>
        <div className="w-full md:w-2/3 p-8 md:p-12 text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 mb-6 max-w-lg">{description}</p>
            <a href="#" className="inline-flex items-center bg-zess-orange text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-orange-500 transition-colors shadow-md">
                View Allied Products
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </a>
        </div>
    </div>
);


const ProductRange: React.FC = () => {
  const products = [
    { title: "Motorcycle Tyres", description: "High-grip and durable tyres for all motorcycle segments.", imageUrl: "https://picsum.photos/400/300?random=7", imageConcept: "motorcycle tire closeup" },
    { title: "3-Wheeler Tyres", description: "Robust tyres designed for passenger and cargo three-wheelers.", imageUrl: "https://picsum.photos/400/300?random=8", imageConcept: "three wheeler tire" },
    { title: "EV Tyres (E-Rickshaw)", description: "Low rolling resistance tyres to maximize battery range.", imageUrl: "https://picsum.photos/400/300?random=9", imageConcept: "e rickshaw tire" },
    { title: "LCV Tyres", description: "Heavy-duty tyres for light commercial vehicles and pickups.", imageUrl: "https://picsum.photos/400/300?random=10", imageConcept: "light truck tire closeup" },
    { title: "Farm/Tiller Tyres", description: "Specialized tyres for agricultural machinery and tillers.", imageUrl: "https://picsum.photos/400/300?random=11", imageConcept: "agriculture tiller tire" },
    { title: "Inner Tubes", description: "High-quality butyl tubes for various vehicle types.", imageUrl: "https://picsum.photos/400/300?random=12", imageConcept: "inner tube rubber" },
    { title: "Allied Products", description: "Explore our range of complementary products, including Precured Tread Rubber (PCT), Bonding Gum, Tyre Flaps, and Industrial Sole Sheets.", imageUrl: "https://picsum.photos/600/400?random=13", imageConcept: "rubber processing machinery" },
  ];

  const mainProducts = products.slice(0, 6);
  const alliedProduct = products[6];

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Product Range</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Engineered for durability and performance across every category.</p>
          <div className="w-24 h-1 bg-zess-orange mx-auto mt-4"></div>
        </div>
        
        {/* Row 1 & 2: Main Tyre Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainProducts.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>

        {/* Row 3: Allied Products (Full Width) */}
        <div className="mt-12">
           {alliedProduct && <AlliedProductCard key={alliedProduct.title} {...alliedProduct} />}
        </div>
      </div>
    </section>
  );
};

export default ProductRange;
