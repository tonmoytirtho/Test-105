import React from 'react';

interface SolutionCardProps {
    title: string;
    description: string;
    imageUrl: string;
    imageConcept: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, imageUrl, imageConcept }) => (
    <div className="bg-white rounded-lg shadow-soft group overflow-hidden transition-shadow duration-300 hover:shadow-xl">
        <div className="overflow-hidden">
          <img src={imageUrl} alt={imageConcept} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm mb-6 h-16">{description}</p>
            <button className="bg-transparent border-2 border-black text-black px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-black hover:text-white transition-colors">
              Learn More
            </button>
        </div>
    </div>
);


const BusinessSolutions: React.FC = () => {
    const solutions = [
        { title: "Fleets & Commercial", description: "Cost-effective and reliable tyre solutions for commercial fleets of all sizes.", imageUrl: "https://picsum.photos/400/350?random=18", imageConcept: "tire warehouse stacks" },
        { title: "Dealers", description: "Partner with us to offer high-quality tyres and grow your business.", imageUrl: "https://picsum.photos/400/350?random=19", imageConcept: "tire workshop" },
        { title: "Distributors & Export", description: "Expand your portfolio with our comprehensive range of products for distribution.", imageUrl: "https://picsum.photos/400/350?random=20", imageConcept: "tire warehouse stacks" },
        { title: "OEM Partnerships", description: "Collaborate with us as an Original Equipment Manufacturer for superior tyre fitments.", imageUrl: "https://picsum.photos/400/350?random=21", imageConcept: "tire production line" },
    ];
    
    return (
        <section className="bg-white py-24">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">Solutions for Business Partners</h2>
                  <div className="w-24 h-1 bg-zess-orange mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {solutions.map((solution) => (
                        <SolutionCard key={solution.title} {...solution} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BusinessSolutions;