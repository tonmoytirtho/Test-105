
import React from 'react';

interface StatItemProps {
    value: string;
    label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
    <div className="text-center">
        <p className="text-4xl lg:text-5xl font-bold text-white">{value}</p>
        <p className="text-sm text-gray-400 mt-1">{label}</p>
    </div>
);


const Stats: React.FC = () => {
    return (
        <section className="bg-zess-dark text-white py-20">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">ZESS at a Glance</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <StatItem value="5000+" label="Dealers" />
                    <StatItem value="1000+" label="Distributors" />
                    <StatItem value="30+" label="Years of Experience" />
                    <StatItem value="Millions" label="of Tyres Produced Annually" />
                </div>
                <div className="text-center mt-12 space-x-6 text-gray-300">
                    <a href="#" className="hover:text-zess-orange transition-colors">About Us</a>
                    <span className="text-gray-600">|</span>
                    <a href="#" className="hover:text-zess-orange transition-colors">Quality & Manufacturing</a>
                    <span className="text-gray-600">|</span>
                    <a href="#" className="hover:text-zess-orange transition-colors">Careers</a>
                </div>
            </div>
        </section>
    );
};

export default Stats;
