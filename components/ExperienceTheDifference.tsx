
import React, { useState } from 'react';

const newsItems = [
    {
        title: "DR. RAGHUPATI SINGHANIA CONFERRED WITH “MEXICAN ORDER OF THE AZTEC...",
        excerpt: "Presented by Mexican Ambassador H.E. Melba Pria on behalf of President of Mexico.",
        imageUrl: "https://picsum.photos/400/300?random=32",
        imageConcept: "Dr. Raghupati Singhania receiving award"
    },
    {
        title: "JK TYRE ROLLS OUT INDIA’S FIRST PASSENGER CAR TYRE WITH ISCC PLU...",
        excerpt: "Production began at the company’s Chennai facility, reinforcing its commitment to green innovation and a circular economy...",
        imageUrl: "https://picsum.photos/400/300?random=33",
        imageConcept: "Man holding a sustainable tyre"
    },
    {
        title: "JK TYRE TIES UP WITH IFC",
        excerpt: "India’s First Tyre Industry Sustainability-Linked Loan",
        imageUrl: "https://picsum.photos/400/300?random=34",
        imageConcept: "Two men shaking hands"
    },
    {
        title: "ANOTHER PRESTIGIOUS AWARD",
        excerpt: "Another achievement for our company in the field of innovation.",
        imageUrl: "https://picsum.photos/400/300?random=35",
        imageConcept: "Award trophy"
    },
];

const NewsHighlightCard: React.FC<{ title: string; excerpt: string; imageUrl: string; imageConcept: string; }> = ({ title, excerpt, imageUrl, imageConcept }) => (
    <div className="flex-shrink-0 w-full sm:w-1/3 px-3">
        <div className="bg-white p-6 h-full flex flex-col justify-between shadow-soft">
            <div>
                <h3 className="text-base font-bold text-gray-900 mb-2 h-12">{title}</h3>
                <p className="text-sm text-gray-600 mb-4 h-16">{excerpt}</p>
                 <a href="#" className="font-semibold text-sm text-gray-700 hover:text-zess-orange transition-colors flex items-center">
                    <span className="mr-2">&gt;</span> Know More
                </a>
            </div>
            <img src={imageUrl} alt={imageConcept} className="w-full h-48 object-cover mt-4" />
        </div>
    </div>
);

const ExperienceTheDifference: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const maxIndex = newsItems.length > 3 ? newsItems.length - 3 : 0;

    const goToNext = () => {
        setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }
    const goToPrev = () => {
        setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
    }

    const tireTreadSvg = `<svg width="100" height="100" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M10 0 L20 10 L10 20 L0 10 Z M30 20 L40 30 L30 40 L20 30 Z" fill="rgba(0,0,0,0.03)"/></svg>`;
    const tireTreadUrl = `url("data:image/svg+xml,${encodeURIComponent(tireTreadSvg)}")`;

    return (
        <section className="py-24 bg-[#F5F3ED]" style={{ backgroundImage: tireTreadUrl }}>
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-zess-dark tracking-wider">EXPERIENCE THE DIFFERENCE</h2>
                    <p className="mt-2 text-sm font-semibold text-gray-600 tracking-[0.2em]">LEADING TECHNOLOGY, UNMATCHED PERFORMANCE</p>
                </div>

                <div className="relative">
                    <div className="overflow-hidden">
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
                            {newsItems.map((item, index) => (
                                <NewsHighlightCard key={index} {...item} />
                            ))}
                        </div>
                    </div>
                    
                    <button onClick={goToPrev} className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full shadow-md z-10 transition-colors hidden md:block">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button onClick={goToNext} className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full shadow-md z-10 transition-colors hidden md:block">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ExperienceTheDifference;
