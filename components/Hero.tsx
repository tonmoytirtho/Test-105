import React, { useState } from 'react';

const TyreFinderCard: React.FC = () => {
    const [activeTab, setActiveTab] = useState('vehicle');

    const rimSizes = ["10\"", "12\"", "13\"", "14\"", "16\"", "17\"", "18\""];
    const sizePages = ["3.00-18", "2.75-17", "4.50-10", "6.00-12"];

    return (
        <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md transform lg:translate-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tyre Finder</h3>
            <div className="flex border-b mb-6">
                <button 
                    onClick={() => setActiveTab('vehicle')}
                    className={`flex-1 py-2 text-sm font-semibold transition-colors ${
                        activeTab === 'vehicle' 
                        ? 'text-zess-orange border-b-2 border-zess-orange' 
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                >
                    By Vehicle
                </button>
                <button 
                    onClick={() => setActiveTab('size')}
                    className={`flex-1 py-2 text-sm font-semibold transition-colors ${
                        activeTab === 'size' 
                        ? 'text-zess-orange border-b-2 border-zess-orange' 
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                >
                    By Size
                </button>
            </div>
            
            {activeTab === 'vehicle' && (
                <form className="space-y-5">
                    <div>
                        <label htmlFor="vehicle-type" className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
                        <select id="vehicle-type" className="w-full p-3 border border-gray-300 rounded-md focus:ring-zess-orange focus:border-zess-orange">
                            <option>Motorcycle</option>
                            <option>3-Wheeler</option>
                            <option>EV (E-Rickshaw)</option>
                            <option>LCV</option>
                            <option>Farm/Tiller</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="tyre-position" className="block text-sm font-medium text-gray-700 mb-1">Tyre Position</label>
                        <select id="tyre-position" className="w-full p-3 border border-gray-300 rounded-md focus:ring-zess-orange focus:border-zess-orange">
                            <option>Front</option>
                            <option>Rear</option>
                            <option>All</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="tyre-size" className="block text-sm font-medium text-gray-700 mb-1">Tyre Size</label>
                        <select id="tyre-size" className="w-full p-3 border border-gray-300 rounded-md focus:ring-zess-orange focus:border-zess-orange">
                            <option>Select Size</option>
                            <option>100/90-17</option>
                            <option>80/100-18</option>
                        </select>
                    </div>
                    <button type="submit" className="w-full bg-zess-orange text-white font-bold py-3.5 px-4 rounded-lg hover:bg-orange-500 transition-colors shadow-md">
                        Search Tyres
                    </button>
                </form>
            )}

            {activeTab === 'size' && (
                <form className="space-y-5">
                    <div>
                        <label htmlFor="rim-groups" className="block text-sm font-medium text-gray-700 mb-1">Rim Groups</label>
                        <select id="rim-groups" className="w-full p-3 border border-gray-300 rounded-md focus:ring-zess-orange focus:border-zess-orange">
                            <option>Select Rim Size</option>
                            {rimSizes.map(size => <option key={size}>{size}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="size-pages" className="block text-sm font-medium text-gray-700 mb-1">Size Pages</label>
                        <select id="size-pages" className="w-full p-3 border border-gray-300 rounded-md focus:ring-zess-orange focus:border-zess-orange">
                            <option>Select Tyre Size</option>
                             {sizePages.map(size => <option key={size}>{size}</option>)}
                        </select>
                    </div>
                    {/* Empty div to roughly match the height of the 'By Vehicle' form */}
                    <div className="h-[76px]"></div>
                    <button type="submit" className="w-full bg-zess-orange text-white font-bold py-3.5 px-4 rounded-lg hover:bg-orange-500 transition-colors shadow-md">
                        Search Tyres
                    </button>
                </form>
            )}
        </div>
    );
};


const Hero: React.FC = () => {
  const vehicleTags = ["Motorcycle", "3-Wheeler & EV", "LCV", "Farm/Tiller", "Inner Tubes", "Allied Products"];
  return (
    <section 
        className="relative bg-black text-white pt-28 min-h-[880px] flex items-center"
        style={{paddingTop: '120px'}}
    >
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{backgroundImage: "url('https://picsum.photos/2560/880?grayscale&blur=2')", /* Stable placeholder image */}}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-4">
                        Tyres Engineered for Bangladesh Roads.
                    </h1>
                    <p className="text-lg text-gray-300 max-w-xl mb-8">
                        Specializing in high-durability tyres for Motorcycle, 3-Wheeler, EV, Light Commercial, and Farm/Tiller applications, ensuring reliability and performance on every journey.
                    </p>
                    <div className="flex space-x-4 mb-10">
                        <button className="bg-zess-orange text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-orange-500 transition-colors shadow-lg">
                            Enquire Now
                        </button>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-white hover:text-black transition-colors">
                            Explore Products
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {vehicleTags.map(tag => (
                            <span key={tag} className="bg-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-6 flex justify-center lg:justify-end">
                    <TyreFinderCard />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;