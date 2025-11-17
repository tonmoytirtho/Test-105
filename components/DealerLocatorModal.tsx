
import React, { useState, useMemo } from 'react';

const dealers = [
  // Dhaka Division
  { name: "ZESS Tyre Point - Gulshan", address: "123 Gulshan Ave, Dhaka 1212", phone: "+8801712345678", division: "Dhaka", district: "Dhaka" },
  { name: "ZESS Tyre Hub - Dhanmondi", address: "45 Satmasjid Road, Dhaka 1209", phone: "+8801812345679", division: "Dhaka", district: "Dhaka" },
  { name: "Gazipur Tyre Centre", address: "Chourasta, Gazipur", phone: "+8801733333333", division: "Dhaka", district: "Gazipur" },
  { name: "Narayanganj Wheels", address: "2 Chasara, Narayanganj", phone: "+8801711223344", division: "Dhaka", district: "Narayanganj" },
  { name: "Tangail Tyre Mart", address: "Main Road, Tangail Sadar", phone: "+8801987654321", division: "Dhaka", district: "Tangail" },
  { name: "Kishoreganj Auto", address: "Gaital, Kishoreganj", phone: "+8801555667788", division: "Dhaka", district: "Kishoreganj" },

  // Chattogram Division
  { name: "Chattogram Tyre Palace", address: "67 Agrabad C/A, Chattogram 4100", phone: "+8801912345680", division: "Chattogram", district: "Chattogram" },
  { name: "Cox's Bazar Auto", address: "13 Laboni Beach Road, Cox's Bazar 4700", phone: "+8801723456789", division: "Chattogram", district: "Cox's Bazar" },
  { name: "Cumilla Tyre House", address: "Kandirpar, Cumilla", phone: "+8801744444444", division: "Chattogram", district: "Cumilla" },
  { name: "Feni Tyre Solutions", address: "Trunk Road, Feni", phone: "+8801812341234", division: "Chattogram", district: "Feni" },
  { name: "Brahmanbaria Motors", address: "Station Road, Brahmanbaria", phone: "+8801654321987", division: "Chattogram", district: "Brahmanbaria" },

  // Khulna Division
  { name: "Reliable Tyre Center - Khulna", address: "89 Khan Jahan Ali Road, Khulna 9100", phone: "+8801612345681", division: "Khulna", district: "Khulna" },
  { name: "Jashore Tyre World", address: "MK Road, Jashore", phone: "+8801998877665", division: "Khulna", district: "Jashore" },
  { name: "Kushtia Tyre Emporium", address: "NS Road, Kushtia", phone: "+8801777888999", division: "Khulna", district: "Kushtia" },
  { name: "Satkhira Auto Care", address: "Jessore Road, Satkhira", phone: "+8801311223344", division: "Khulna", district: "Satkhira" },
  
  // Sylhet Division
  { name: "Sylhet Speed Tyres", address: "10 Zindabazar, Sylhet 3100", phone: "+8801512345682", division: "Sylhet", district: "Sylhet" },
  { name: "Moulvibazar Tyre Point", address: "Chowmohana, Moulvibazar", phone: "+8801765432109", division: "Sylhet", district: "Moulvibazar" },
  { name: "Habiganj Tyre Planet", address: "Shaistanagar, Habiganj", phone: "+8801919191919", division: "Sylhet", district: "Habiganj" },
  
  // Rajshahi Division
  { name: "Rajshahi Tyre House", address: "11 Shaheb Bazar, Rajshahi 6000", phone: "+8801312345683", division: "Rajshahi", district: "Rajshahi" },
  { name: "Bogura Tyre Corporation", address: "Sherpur Road, Bogura", phone: "+8801888777666", division: "Rajshahi", district: "Bogura" },
  { name: "Pabna Tyre Gallery", address: "Rupkotha Road, Pabna", phone: "+8801515151515", division: "Rajshahi", district: "Pabna" },
  { name: "Sirajganj ZESS Center", address: "SS Road, Sirajganj", phone: "+8801616161616", division: "Rajshahi", district: "Sirajganj" },
  
  // Barishal Division
  { name: "Barishal Tyre Solutions", address: "12 Sadar Road, Barishal 8200", phone: "+8801412345684", division: "Barishal", district: "Barishal" },
  { name: "Patuakhali Tyre World", address: "New Market, Patuakhali", phone: "+880192837465", division: "Barishal", district: "Patuakhali" },
  { name: "Bhola Tyre Mart", address: "Sadar Road, Bhola", phone: "+8801727374757", division: "Barishal", district: "Bhola" },

  // Rangpur Division
  { name: "Rangpur Tyre Mart", address: "Station Road, Rangpur", phone: "+8801711111111", division: "Rangpur", district: "Rangpur" },
  { name: "Dinajpur Tyre Land", address: "Paharpur, Dinajpur", phone: "+8801829304152", division: "Rangpur", district: "Dinajpur" },
  { name: "Gaibandha Tyre Shop", address: "DB Road, Gaibandha", phone: "+8801534567890", division: "Rangpur", district: "Gaibandha" },

  // Mymensingh Division
  { name: "Mymensingh Wheels", address: "Town Hall, Mymensingh", phone: "+8801722222222", division: "Mymensingh", district: "Mymensingh" },
  { name: "Jamalpur Tyre Corner", address: "Dayamoye Mor, Jamalpur", phone: "+8801945678901", division: "Mymensingh", district: "Jamalpur" },
  { name: "Sherpur Auto Tyres", address: "Thana Mor, Sherpur", phone: "+8801312312312", division: "Mymensingh", district: "Sherpur" },
];


const divisions = ["All Divisions", "Barishal", "Chattogram", "Dhaka", "Khulna", "Mymensingh", "Rajshahi", "Rangpur", "Sylhet"];

const districtsByDivision: { [key: string]: string[] } = {
  Dhaka: ["Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj", "Narayanganj", "Narsingdi", "Rajbari", "Shariatpur", "Tangail"],
  Chattogram: ["Bandarban", "Brahmanbaria", "Chandpur", "Chattogram", "Cumilla", "Cox's Bazar", "Feni", "Khagrachhari", "Lakshmipur", "Noakhali", "Rangamati"],
  Rajshahi: ["Bogura", "Joypurhat", "Naogaon", "Natore", "Nawabganj", "Pabna", "Rajshahi", "Sirajganj"],
  Khulna: ["Bagerhat", "Chuadanga", "Jashore", "Jhenaidah", "Khulna", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira"],
  Barishal: ["Barguna", "Barishal", "Bhola", "Jhalokati", "Patuakhali", "Pirojpur"],
  Sylhet: ["Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"],
  Rangpur: ["Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Rangpur", "Thakurgaon"],
  Mymensingh: ["Jamalpur", "Mymensingh", "Netrokona", "Sherpur"],
};


interface DealerLocatorModalProps {
  onClose: () => void;
}

const SearchIcon: React.FC = () => (
  <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const PhoneIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const CloseIcon: React.FC = () => (
    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const DealerLocatorModal: React.FC<DealerLocatorModalProps> = ({ onClose }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDivision, setSelectedDivision] = useState('All Divisions');
    const [selectedJela, setSelectedJela] = useState('All Jela');

    const filteredDealers = useMemo(() => {
        return dealers.filter(dealer => {
            const matchesDivision = selectedDivision === 'All Divisions' || dealer.division === selectedDivision;
            const matchesJela = selectedDivision === 'All Divisions' || selectedJela === 'All Jela' || dealer.district === selectedJela;
            const matchesSearch = dealer.name.toLowerCase().includes(searchTerm.toLowerCase()) || dealer.address.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesDivision && matchesJela && matchesSearch;
        });
    }, [searchTerm, selectedDivision, selectedJela]);

    return (
        <div className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4 animate-fade-in-fast">
            <div className="bg-zess-charcoal rounded-xl shadow-2xl w-full max-w-6xl h-full max-h-[90vh] flex overflow-hidden">
                {/* Left Panel: Search and Results */}
                <div className="w-full lg:w-1/3 bg-zess-dark flex flex-col p-6">
                    <div className="flex-shrink-0">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-white">Dealer Locator</h2>
                            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                                <CloseIcon />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <SearchIcon />
                                </span>
                                <input 
                                    type="text"
                                    placeholder="Search by name or city..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full bg-zess-charcoal border border-gray-700 rounded-md py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-zess-orange"
                                />
                            </div>
                            <select 
                                value={selectedDivision}
                                onChange={(e) => {
                                    setSelectedDivision(e.target.value);
                                    setSelectedJela('All Jela');
                                }}
                                className="w-full bg-zess-charcoal border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-zess-orange"
                            >
                                {divisions.map(division => (
                                    <option key={division} value={division}>{division}</option>
                                ))}
                            </select>

                            {selectedDivision !== 'All Divisions' && (
                                <select 
                                    value={selectedJela}
                                    onChange={(e) => setSelectedJela(e.target.value)}
                                    className="w-full bg-zess-charcoal border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-zess-orange"
                                >
                                    <option value="All Jela">All Jela</option>
                                    {districtsByDivision[selectedDivision]?.sort().map(jela => (
                                        <option key={jela} value={jela}>{jela}</option>
                                    ))}
                                </select>
                            )}
                        </div>
                    </div>
                    <div className="flex-grow overflow-y-auto mt-6 pr-2">
                        {filteredDealers.length > 0 ? (
                            <ul className="space-y-3">
                                {filteredDealers.map(dealer => (
                                    <li key={dealer.name} className="bg-zess-charcoal p-4 rounded-lg border border-transparent hover:border-zess-orange/50 transition-colors">
                                        <h3 className="font-bold text-white">{dealer.name}</h3>
                                        <p className="text-sm text-gray-400 mt-1">{dealer.address}</p>
                                        <a href={`tel:${dealer.phone}`} className="flex items-center text-sm text-zess-orange mt-2 hover:underline">
                                           <PhoneIcon />
                                           <span>{dealer.phone}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="text-center text-gray-500 pt-10">
                                <p>No dealers found.</p>
                                <p className="text-sm">Try adjusting your search or filter.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Panel: Map */}
                <div className="hidden lg:block w-2/3 bg-cover bg-center" style={{backgroundImage: "url('https://i.imgur.com/9g2aDDW.png')"}}>
                    {/* This is a static image. A real implementation would use an interactive map library. */}
                </div>
            </div>
             <style>{`.animate-fade-in-fast { animation: fadeIn 0.2s ease-in-out; } @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }`}</style>
        </div>
    );
};

export default DealerLocatorModal;
