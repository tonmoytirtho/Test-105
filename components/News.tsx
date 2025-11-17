import React from 'react';

interface NewsCardProps {
    title: string;
    excerpt: string;
    date: string;
    imageUrl: string;
    imageConcept: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, excerpt, date, imageUrl, imageConcept }) => (
    <div className="bg-white rounded-lg shadow-soft overflow-hidden group transition-shadow duration-300 hover:shadow-xl">
        <div className="h-52 overflow-hidden">
            <img src={imageUrl} alt={imageConcept} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        </div>
        <div className="p-6">
            <p className="text-xs text-gray-500 mb-2">{date}</p>
            <h3 className="text-lg font-bold text-gray-900 mb-3 h-14">{title}</h3>
            <p className="text-sm text-gray-600 mb-5 h-10">{excerpt}</p>
            <a href="#" className="font-semibold text-zess-orange group-hover:text-orange-500 transition-colors">
                Read More →
            </a>
        </div>
    </div>
);


const News: React.FC = () => {
    const newsItems = [
        { title: "ZESS TYRE Launches New EV-Specific Tyre Range", excerpt: "A new line of tyres designed to improve range and performance for electric vehicles.", date: "OCT 12, 2023", imageUrl: "https://picsum.photos/400/300?random=29", imageConcept: "rubber processing" },
        { title: "Our Commitment to Sustainable Manufacturing Practices", excerpt: "An inside look at our latest initiatives to reduce environmental impact.", date: "SEP 28, 2023", imageUrl: "https://picsum.photos/400/300?random=30", imageConcept: "tyre manufacturing factory" },
        { title: "ZESS Recognized with National Quality Award 2023", excerpt: "We are proud to be honored for our commitment to product excellence and innovation.", date: "AUG 15, 2023", imageUrl: "https://picsum.photos/400/300?random=31", imageConcept: "tire testing lab" },
    ];
    
    return (
        <section className="bg-gray-50 py-24">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">News & Highlights</h2>
                  <div className="w-24 h-1 bg-zess-orange mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item) => (
                        <NewsCard key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;