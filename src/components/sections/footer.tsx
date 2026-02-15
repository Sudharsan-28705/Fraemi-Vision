import React from "react";
import Logo from "@/components/logo";


const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.2 11.2h-2.4v6h-3.2v-6H8v-2.8h1.6V8.9c0-1.62 0.82-2.5 2.5-2.5h2.1v2.8h-1.3c-.55 0-.6.25-.6.6v1.3h1.9l-.3 2.8z" />
    </svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.6 12.8c0 .99-.81 1.8-1.8 1.8H9.2c-.99 0-1.8-.81-1.8-1.8V9.2c0-.99.81-1.8 1.8-1.8h5.6c.99 0 1.8.81 1.8 1.8v5.6zM12 10.8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm3.8-2.6c-.44 0-.8.36-.8.8s.36.8.8.8.8-.36.8-.8-.36-.8-.8-.8z" />
    </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.003 5.884L10 11.884l7.997-6M2 18h16V5l-8 5-8-5v13z" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
);


export default function Foot() {
    return (
        <footer className="text-gray-400 font-sans">
            <div className="container mx-auto px-6 lg:px-8 py-12">

                <div className="mb-12 flex flex-col md:flex-row items-start justify-between gap-10">
                    
                    <div>
                        <a className="flex items-center">
                            <Logo />
                            <span className="text-white text-3xl font-bold ml-3">Fraemi Vision</span>
                        </a>
                        <p className="mt-4 max-w-md text-gray-400">
                            We don't just capture vision; we build its legacy in every frame.
                        </p>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <nav className="flex flex-wrap gap-x-6 gap-y-2 text-gray-300">
                        <a href="/about" className="hover:text-white transition-colors">About Us</a>
                        <span className="text-gray-600">|</span>
                        <a href="/portfolio" className="hover:text-white transition-colors">Portfolio</a>
                        <span className="text-gray-600">|</span>
                        <a href="/contact" className="hover:text-white transition-colors">Contact</a>
                    </nav>
                </div>

                <hr className="border-gray-800" />

                <div className="flex flex-col md:flex-row justify-between items-center text-sm pt-8">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <div className="flex space-x-3 text-gray-400">
                            <a href="https://www.facebook.com/share/19Yz4zcK7g/" className="hover:text-white transition-colors"><FacebookIcon /></a>
                            <a href="https://www.instagram.com/fraemivision" className="hover:text-white transition-colors"><InstagramIcon /></a>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        <div className="flex items-center">
                            <MailIcon />
                            <span className="hover:text-white transition-colors">fraemivision@gmail.com</span>
                        </div>
                        <div className="flex items-center">
                            <PhoneIcon />
                            <span className="hover:text-white transition-colors">+91 90959 08303</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};