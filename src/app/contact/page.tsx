"use client";

import Header from "@/components/header";
import Common_footer from "@/components/sections/common_footer";
import Cursor from "@/cursor";
import React, { useState, useEffect } from "react";

export default function ContactUs() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // ✅ Form state
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;

        setIsSuccess(true);

        setTimeout(() => {
            setIsSuccess(false);
        }, 3000);

        form.reset();
    };

    return (
        <>
            <Cursor />
            <section id="Contact_Us" className="scroll-mt-20">
                <div className="flex flex-col min-h-screen bg-background">
                    <Header isScrolled={isScrolled} />
                    <main className="bg-background text-foreground flex items-center justify-center min-h-screen flex-col font-['Inter',_sans-serif] ">
                        <h1 className="mt-[7%] mb-[5%] text-5xl font-extrabold">Contact Us</h1>
                        <div className="container mx-auto max-w-6xl p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                                {/* Left Column: Info */}
                                <div className="flex flex-col space-y-12">
                                    <div>
                                        <h1 className="text-5xl font-extrabold text-foreground mt-2 leading-tight">
                                            HAVE QUESTIONS?
                                            <br />
                                            GET IN TOUCH!
                                        </h1>
                                        <p className="mt-4 text-muted-foreground">
                                            We're here to help and answer any question you might have.
                                            <br />
                                            We look forward to hearing from you!
                                        </p>
                                    </div>
                                    <div className="space-y-6">
                                        {/* Address */}
                                        <div className="flex items-center space-x-4">
                                            <div className="text-primary">
                                                {/* Map Icon */}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="w-6 h-6"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                                    <circle cx="12" cy="10" r="3" />
                                                </svg>
                                            </div>
                                            <span className="text-muted-foreground">
                                                Old No 9A New No 4, Kamarajar St, Ayodhya Colony, <br />
                                                Velachery, Chennai - 600042
                                            </span>
                                        </div>

                                        {/* Phone */}
                                        <div className="flex items-center space-x-4">
                                            <div className="text-primary">
                                                {/* Phone Icon */}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="w-6 h-6"
                                                >
                                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                                </svg>
                                            </div>
                                            <span className="text-foreground font-semibold">
                                                +91 90959 08303
                                            </span>
                                        </div>

                                        {/* Email */}
                                        <div className="flex items-center space-x-4">
                                            <div className="text-primary">
                                                {/* Mail Icon */}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="w-6 h-6"
                                                >
                                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                                </svg>
                                            </div>
                                            <span className="text-muted-foreground">
                                                fraemivision@gmail.com
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Form */}
                                <div>
                                    <form
                                        id="contact-form"
                                        className="space-y-8"
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                            <div className="form-group flex items-center gap-5 border-b border-gray-300 py-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="22"
                                                    height="22"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="form-icon text-primary"
                                                >
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                    <circle cx="12" cy="7" r="4" />
                                                </svg>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Name"
                                                    className="form-input w-full bg-transparent border-0 focus:outline-none focus:ring-0"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group flex items-center gap-5 border-b border-gray-300 py-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="22"
                                                    height="22"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="form-icon text-primary"
                                                >
                                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                                </svg>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email Address"
                                                    className="form-input w-full bg-transparent border-0 focus:outline-none focus:ring-0"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group flex items-center gap-5 border-b border-gray-300 py-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="22"
                                                    height="22"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="form-icon text-primary"
                                                >
                                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                                </svg>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="Phone"
                                                    className="form-input w-full bg-transparent border-0 focus:outline-none focus:ring-0"
                                                />
                                            </div>
                                            <div className="form-group flex items-center gap-5 border-b border-gray-300 py-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="22"
                                                    height="22"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="form-icon text-primary"
                                                >
                                                    <circle cx="12" cy="12" r="10" />
                                                    <line x1="12" y1="16" x2="12" y2="12" />
                                                    <line x1="12" y1="8" x2="12.01" y2="8" />
                                                </svg>
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    placeholder="Subject"
                                                    className="form-input w-full bg-transparent border-0 focus:outline-none focus:ring-0"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group sm:col-span-2 flex items-start gap-5 border-b border-gray-300 py-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="22"
                                                height="22"
                                                viewBox="0 0 48 48"
                                                className="form-icon text-gray-400 mt-2 flex-shrink-0 fill-primary"
                                            >
                                                <path d="M46.66 1.33a4.53 4.53 0 0 0-6.41 0l-2 2c-1.59-.5-2.33.67-4 2.32l-1-1a3.42 3.42 0 0 0-4.74 0L16.94 16.31a1 1 0 0 0 .71 1.69c.59 0-.09.5 10-9.58l1.92 1.92C2.1 37.82 3.5 36.34 3.38 36.69-.25 47.61-.29 47.11.3 47.71a1 1 0 0 0 1 .24c10.78-3.61 10.09-3.33 10.34-3.56.88-.82 12.39-12.38 32.5-32.49a2.16 2.16 0 0 0 .52-2.19l2-2a4.53 4.53 0 0 0 0-6.38zM30 6.07a1.4 1.4 0 0 1 1.92 0l7.62 7.62-1.92 1.92L29.05 7zm6.21 11L21 32.26 15.73 27 31 11.77zM11 42.25 5.74 37l8.58-8.58 5.25 5.25zm-6.22-3.4 4.37 4.37-6.55 2.2zm38-28.37L41 12.28 35.71 7c1.83-1.82 1.87-2 2-1.79 5.42 5.4 5.22 5.09 5.04 5.27zm2.5-4.16-1.82 1.79c-2.2-2.19-1.38-1.38-3.58-3.58l1.79-1.79a2.53 2.53 0 0 1 3.58 3.58z" />
                                            </svg>
                                            <textarea
                                                name="message"
                                                rows={1}
                                                placeholder="Ask Your Question"
                                                className="form-input w-full bg-transparent border-0 focus:outline-none focus:ring-0 resize-y min-h-[40px]"
                                            ></textarea>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                                            {/* <button
                                                type="submit"
                                                className="font-semibold py-3 px-5 rounded-md hover:bg-yellow-600 transition-all flex items-center justify-center space-x-2"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="22"
                                                    width="22"
                                                    viewBox="0 0 24 24"
                                                    className="form-icon text-primary"
                                                >
                                                    <path
                                                        d="M21.707 2.293a1 1 0 0 0-1.069-.225l-18 7a1 1 0 0 0 .145 1.909l8.379 1.861 1.862 8.379a1 1 0 0 0 .9.78L14 22a1 1 0 0 0 .932-.638l7-18a1 1 0 0 0-.225-1.069zm-7.445 15.275L13.1 12.319l2.112-2.112a1 1 0 0 0-1.414-1.414L11.681 10.9 6.432 9.738l12.812-4.982z"
                                                        style={{ fill: "#1c1b1e" }}
                                                        data-name="Share"
                                                    />
                                                </svg>
                                                <span>GET IN TOUCH</span>
                                            </button> */}
                                            <button
                                                type="submit"
                                                className="group inline-flex items-center justify-center gap-2 px-6 py-3 
             rounded-xl font-semibold text-white bg-primary 
             hover:bg-primary/90 transition-all duration-300 shadow-md"
                                            >
                                                {/* SVG Icon */}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300"
                                                    fill="currentColor"   // 👈 ensures it syncs with text color
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M21.707 2.293a1 1 0 0 0-1.069-.225l-18 7a1 1 0 0 0 .145 1.909l8.379 1.861 
             1.862 8.379a1 1 0 0 0 .9.78L14 22a1 1 0 0 0 .932-.638l7-18a1 1 0 0 0-.225-1.069z 
             m-7.445 15.275L13.1 12.319l2.112-2.112a1 1 0 0 0-1.414-1.414L11.681 10.9 
             6.432 9.738l12.812-4.982z" />
                                                </svg>
                                                <span className="tracking-wide">GET IN TOUCH</span>
                                            </button>

                                        </div>
                                    </form>

                                    {isSuccess && (
                                        <div className="mt-4 p-4 bg-green-100 text-green-800 border border-green-200 rounded-lg transition-opacity duration-500 ease-out">
                                            Your message has been sent successfully!
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </main>
                    <Common_footer />
                </div>
            </section>
        </>
    );
}
