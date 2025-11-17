
import React from 'react';

const OemPartners: React.FC = () => {
    const partners = [
        "J", "BENLING", "BEML INDIA", "BHARATBENZ", "BOBCAT", "COSBIKE", "CAP", 
        "EICHER", "FORCE MOTORS", "HMT TRACTORS", "HYUNDAI", "ISUZU", "JCB"
    ];

    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 tracking-widest">OUR OEM PARTNERS</h2>
                </div>
                <div
                  className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                >
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
                        {partners.map((partner, index) => (
                           <li key={index} className="text-gray-500 font-bold text-lg whitespace-nowrap">{partner}</li>
                        ))}
                    </ul>
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll" aria-hidden="true">
                        {partners.map((partner, index) => (
                           <li key={index} className="text-gray-500 font-bold text-lg whitespace-nowrap">{partner}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default OemPartners;
