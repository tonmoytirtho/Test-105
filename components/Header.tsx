
import React from 'react';

const ZessLogo: React.FC = () => (
  <span className="text-2xl font-bold text-black tracking-wider">
    ZESS <span className="text-zess-orange">TYRE</span>
  </span>
);

const SearchIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const PhoneIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

interface HeaderProps {
  onOpenDealerLocator: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenDealerLocator }) => {
  const navItems = ["Home", "Find Your Tyre", "Products", "Solutions", "Quality & Manufacturing", "Dealer Network", "Support", "Company"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top Utility Bar */}
      <div className="bg-zess-dark text-white text-xs">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-10">
          <div className="flex space-x-6">
            <a href="#" className="hover:text-zess-orange transition-colors">For Business</a>
            <a href="#" className="hover:text-zess-orange transition-colors">Support</a>
            <a href="#" className="hover:text-zess-orange transition-colors">Dealer Portal</a>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-zess-orange transition-colors">Contact Us</a>
            <div className="flex items-center">
              <PhoneIcon />
              <span>+880-123-456789</span>
            </div>
            <div>
              <a href="#" className="font-bold">EN</a> / <a href="#" className="text-gray-400">BN</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="#" aria-label="ZESS TYRE Home">
              <ZessLogo />
            </a>
          </div>
          <nav className="hidden lg:flex lg:space-x-8">
            {navItems.map(item => (
              <a key={item} href="#" className="text-sm font-medium text-gray-700 hover:text-zess-orange transition-colors">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <SearchIcon />
            </button>
            <button className="hidden sm:block bg-zess-orange text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-orange-500 transition-colors shadow-sm">
              Enquire Now
            </button>
            <button 
              onClick={onOpenDealerLocator}
              className="hidden sm:block bg-transparent border-2 border-black text-black px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-black hover:text-white transition-colors">
              Find a Dealer
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
