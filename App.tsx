
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BrowseByVehicle from './components/BrowseByVehicle';
import ProductRange from './components/ProductRange';
import ShopByApplication from './components/ShopByApplication';
import BusinessSolutions from './components/BusinessSolutions';
import DealerNetwork from './components/DealerNetwork';
import Support from './components/Support';
import ExperienceTheDifference from './components/ExperienceTheDifference';
import OemPartners from './components/OemPartners';
import Quality from './components/Quality';
import News from './components/News';
import Stats from './components/Stats';
import Footer from './components/Footer';
import DealerLocatorModal from './components/DealerLocatorModal';

const App: React.FC = () => {
  const [isDealerLocatorOpen, setIsDealerLocatorOpen] = useState(false);

  return (
    <div className="bg-white text-gray-800 antialiased">
      <Header onOpenDealerLocator={() => setIsDealerLocatorOpen(true)} />
      <main>
        <Hero />
        <BrowseByVehicle />
        <ProductRange />
        <ShopByApplication />
        <BusinessSolutions />
        <DealerNetwork onOpenDealerLocator={() => setIsDealerLocatorOpen(true)} />
        <Support />
        <ExperienceTheDifference />
        <OemPartners />
        <Quality />
        <News />
        <Stats />
      </main>
      <Footer />
      {isDealerLocatorOpen && <DealerLocatorModal onClose={() => setIsDealerLocatorOpen(false)} />}
    </div>
  );
};

export default App;
