
import React from 'react';

interface DealerNetworkProps {
  onOpenDealerLocator: () => void;
}

const DealerNetwork: React.FC<DealerNetworkProps> = ({ onOpenDealerLocator }) => {
  return (
    <section className="bg-zess-dark py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-2">Dealer Network & Partnerships</h2>
            <div className="w-24 h-1 bg-zess-orange mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-center">
          {/* Dealer Locator */}
          <div className="lg:col-span-6">
            <div className="relative bg-zess-charcoal rounded-lg shadow-xl overflow-hidden p-10 min-h-[380px] flex flex-col justify-center">
                <img src="https://picsum.photos/800/400?random=22" alt="Tire workshop background" className="absolute inset-0 w-full h-full object-cover opacity-10" />
                <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-3">Find Your Nearest ZESS Dealer</h3>
                    <p className="text-gray-300 mb-8 max-w-md">Search from our extensive network of authorized dealers across Bangladesh to get genuine products and expert service.</p>
                    <button 
                      onClick={onOpenDealerLocator}
                      className="bg-zess-orange text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-orange-500 transition-colors shadow-md">
                        Open Dealer Locator
                    </button>
                </div>
            </div>
          </div>
          
          {/* Become a Dealer */}
          <div className="lg:col-span-4">
            <div className="bg-zess-charcoal rounded-lg p-10 h-full">
                <h3 className="text-2xl font-bold text-white mb-4">Become a Dealer</h3>
                <ul className="space-y-3 text-gray-300 list-disc list-inside">
                    <li>Access to a wide product range</li>
                    <li>Competitive pricing & margins</li>
                    <li>Marketing and brand support</li>
                    <li>Join a growing national network</li>
                </ul>
                <button className="mt-8 bg-transparent border-2 border-gray-500 text-white w-full py-3 rounded-lg text-sm font-semibold hover:bg-white hover:text-black transition-colors">
                    Become a Dealer
                </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 border-t border-gray-700 pt-10">
            <p className="text-lg text-gray-300 space-x-2 sm:space-x-8">
                <span className="font-bold text-white">5000+</span><span className="text-gray-400">Dealers</span>
                <span className="text-gray-600">|</span>
                <span className="font-bold text-white">1000+</span><span className="text-gray-400">Distributors</span>
                <span className="text-gray-600">|</span>
                <span className="font-bold text-white">Nationwide</span><span className="text-gray-400">Coverage</span>
            </p>
        </div>
      </div>
    </section>
  );
};

export default DealerNetwork;
