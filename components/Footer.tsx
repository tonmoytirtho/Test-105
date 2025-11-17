
import React from 'react';

interface FooterColumnProps {
    title: string;
    links: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
    <div>
        <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">{title}</h4>
        <ul className="space-y-3">
            {links.map(link => (
                <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">{link}</a>
                </li>
            ))}
        </ul>
    </div>
);

const Footer: React.FC = () => {
    const columns = {
        tyre: {
            title: "Find Your Tyre",
            links: ["Motorcycle Tyres", "3-Wheeler & EV Tyres", "LCV Tyres", "Farm/Tiller Tyres", "Inner Tubes", "Allied Products"]
        },
        support: {
            title: "Support",
            links: ["Tyre Care & Safety", "Fitment & Rotation", "Warranty & Claims", "FAQs", "Download Centre"]
        },
        business: {
            title: "Business",
            links: ["For Fleets", "Become a Dealer", "Distributors & Export", "OEMs", "B2B Portal"]
        },
        company: {
            title: "Company",
            links: ["About", "Quality & Manufacturing", "News & Blog", "Careers", "Contact Us"]
        }
    };

    return (
        <footer className="bg-[#0A0A0A]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-sm">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <FooterColumn {...columns.tyre} />
                    <FooterColumn {...columns.support} />
                    <FooterColumn {...columns.business} />
                    <FooterColumn {...columns.company} />
                </div>
            </div>
            <div className="bg-black py-5">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-400 flex flex-col sm:flex-row justify-between items-center">
                    <p>&copy; {new Date().getFullYear()} ZESS TYRE. All Rights Reserved.</p>
                    <div className="space-x-4 mt-2 sm:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Use</a>
                        <a href="#" className="hover:text-white">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
