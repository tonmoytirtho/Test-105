import React from 'react';

interface SupportCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageConcept: string;
}

const SupportCard: React.FC<SupportCardProps> = ({ title, description, imageUrl, imageConcept }) => (
    <div className="bg-white rounded-lg shadow-soft group overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="overflow-hidden">
           <img src={imageUrl} alt={imageConcept} className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-105" />
        </div>
        <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm mb-4 h-10">{description}</p>
            <a href="#" className="font-semibold text-sm text-zess-orange group-hover:text-orange-500 transition-colors">
                View →
            </a>
        </div>
    </div>
);

const Support: React.FC = () => {
    const supportItems = [
        { title: "Tyre Care & Safety", description: "Learn how to maintain your tyres for maximum safety.", imageUrl: "https://picsum.photos/400/200?random=23", imageConcept: "tire inspection" },
        { title: "Fitment & Rotation", description: "Expert guidance on proper tyre fitment and rotation.", imageUrl: "https://picsum.photos/400/200?random=24", imageConcept: "tire fitting mechanic" },
        { title: "FAQs", description: "Find answers to frequently asked questions about our products.", imageUrl: "https://picsum.photos/400/200?random=25", imageConcept: "motorcycle tire closeup" },
        { title: "Warranty & Claims", description: "Understand our warranty policy and how to make a claim.", imageUrl: "https://picsum.photos/400/200?random=26", imageConcept: "tire testing lab" },
        { title: "Download Centre", description: "Access product catalogues, brochures, and other resources.", imageUrl: "https://picsum.photos/400/200?random=27", imageConcept: "tire warehouse stacks" },
    ];

    return (
        <section className="bg-white py-24">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">Support & Resources</h2>
                    <div className="w-24 h-1 bg-zess-orange mx-auto"></div>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We are committed to providing you with the information and support you need to get the most out of your ZESS tyres.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12">
                    {supportItems.map((item) => (
                        <SupportCard key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Support;