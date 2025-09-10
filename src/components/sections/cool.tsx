import React from 'react';
import { FiMail, FiArrowRight } from 'react-icons/fi';

export default function Cool() {
    return (
        <footer className="bg-[#111111] text-gray-400 font-sans py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="space-y-5">
                    <h3 className="text-xs font-bold text-white tracking-widest uppercase">Sign up for our newsletter</h3>
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                        <div className="relative flex items-center">
                            <FiMail className="absolute left-4 text-gray-500" size={18} />
                            <input
                                type="email"
                                placeholder="Enter Your Email Address"
                                className="w-full bg-transparent border border-gray-700 text-white text-sm pl-12 pr-10 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
                                aria-label="Email Address"
                            />
                            <button type="submit" aria-label="Submit" className="absolute right-4 text-gray-400 hover:text-white transition-colors duration-300">
                                <FiArrowRight size={20} />
                            </button>
                        </div>
                        <div className="flex items-center space-x-3">
                            <input
                                type="checkbox"
                                id="privacy"
                                className="form-checkbox bg-transparent border-gray-600 text-gray-500 h-4 w-4 rounded-none focus:ring-offset-0 focus:ring-1 focus:ring-gray-500"
                            />
                            <label htmlFor="privacy" className="text-xs cursor-pointer">I agree to the Privacy Policy</label>
                        </div>
                    </form>
                </div>
            </div>
        </footer>
    );
};

