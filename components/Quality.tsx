import React from 'react';

const FeatureChip: React.FC<{ icon: React.ReactNode, text: string }> = ({ icon, text }) => (
    <div className="flex items-center bg-zess-orange/10 text-zess-orange rounded-full px-4 py-2 text-sm font-medium">
        {icon}
        <span>{text}</span>
    </div>
);

const Quality: React.FC = () => {
    return (
        <section className="bg-zess-dark py-24">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="w-full">
                        <img src="https://picsum.photos/600/600?random=28" alt="Tire production line" className="rounded-lg shadow-2xl object-cover w-full h-full max-h-[600px]" />
                    </div>
                    <div className="lg:pl-8">
                        <h2 className="text-4xl font-bold text-white mb-6">Quality & Manufacturing Excellence</h2>
                        <p className="text-gray-300 leading-relaxed mb-8">
                            At ZESS, quality is at the core of everything we do. Our state-of-the-art R&D facility and rigorous testing protocols ensure every tyre meets the highest standards of durability, safety, and performance. We utilize advanced rubber compounds and precision manufacturing processes to create tyres that are perfectly suited for the demanding road conditions of Bangladesh, backed by industry-leading certifications.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-10">
                            <FeatureChip icon={<CheckIcon />} text="Advanced R&D" />
                            <FeatureChip icon={<CheckIcon />} text="Rigorous Testing" />
                            <FeatureChip icon={<CheckIcon />} text="ISO Certified" />
                            <FeatureChip icon={<CheckIcon />} text="Comprehensive Warranty" />
                        </div>
                        <button className="bg-zess-orange text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-orange-500 transition-colors shadow-md">
                            Discover Our Process
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-zess-orange" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

export default Quality;