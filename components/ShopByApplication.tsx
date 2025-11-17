import React from 'react';

interface ApplicationCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageConcept: string;
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({ title, description, imageUrl, imageConcept }) => (
    <div className="bg-zess-charcoal rounded-lg p-6 group transition-all duration-300 hover:bg-black/20">
        <img src={imageUrl} alt={imageConcept} className="w-full h-40 object-cover rounded-md mb-5" />
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 h-12">{description}</p>
        <a href="#" className="font-semibold text-zess-orange group-hover:text-orange-500 transition-colors">
            Explore →
        </a>
    </div>
);

const ShopByApplication: React.FC = () => {
    const applications = [
        { title: "Daily Commute", description: "Reliable and safe tyres for everyday city and highway travel.", imageUrl: "https://picsum.photos/400/240?random=14", imageConcept: "motorcycle tire closeup" },
        { title: "Commercial Load", description: "Built to carry heavy loads with maximum stability and longevity.", imageUrl: "https://picsum.photos/400/240?random=15", imageConcept: "tire warehouse stacks" },
        { title: "Rough Terrain", description: "Tough tyres with superior grip for unpaved and challenging roads.", imageUrl: "https://picsum.photos/400/240?random=16", imageConcept: "agriculture tiller tire" },
        { title: "High Mileage", description: "Engineered for long life, delivering exceptional value and performance.", imageUrl: "https://picsum.photos/400/240?random=17", imageConcept: "tire inspection" },
    ];

    return (
        <section className="bg-zess-dark py-24">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-2">Shop by Application</h2>
                    <div className="w-24 h-1 bg-zess-orange mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {applications.map((app) => (
                        <ApplicationCard key={app.title} {...app} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShopByApplication;