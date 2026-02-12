"use client";

import Header from "@/components/header";
import Common_footer from "@/components/sections/common_footer";
import React, { useState, useEffect } from "react";
// ✅ 1. Import the useForm hook and ValidationError component from Formspree
import { useForm, ValidationError } from '@formspree/react';

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
    
    // ✅ 2. Initialize the useForm hook with your Formspree ID
    const [state, handleSubmit] = useForm("xovkqarp");

    // ✅ 3. If the form submission is successful, show a thank you message
    if (state.succeeded) {
        return (
            <>
                {/* <Cursor /> */}
                <section id="Contact_Us_Success" className="scroll-mt-20">
                    <div className="flex flex-col min-h-screen bg-background">
                        <Header isScrolled={isScrolled} />
                        <main className="bg-background text-foreground flex-grow flex flex-col items-center justify-center text-center p-4">
                            <h1 className="text-5xl font-extrabold text-primary mb-4">Thank You!</h1>
                            <p className="text-lg text-muted-foreground max-w-lg">
                                Your message has been sent successfully. We appreciate you reaching out and will get back to you shortly.
                            </p>
                        </main>
                        <Common_footer />
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            <section id="Contact_Us" className="scroll-mt-20">
                <div className="flex flex-col min-h-screen bg-background">
                    <Header isScrolled={isScrolled} />
                    <main className="bg-background text-foreground flex items-center justify-center min-h-screen flex-col font-['Inter',_sans-serif]">
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
                                        {/* Contact Info (Address, Phone, Email) */}
                                    </div>
                                </div>

                                {/* Right Column: Form */}
                                <div>
                                    {/* ✅ 4. Use the handleSubmit function from the hook in your form's onSubmit */}
                                    <form
                                        id="contact-form"
                                        className="space-y-8"
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                            <div className="form-group flex items-center gap-5 border-b border-gray-300 py-2">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Name"
                                                    className="form-input w-full bg-transparent border-0 focus:outline-none focus:ring-0"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group flex items-center gap-5 border-b border-gray-300 py-2">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email Address"
                                                    className="form-input w-full bg-transparent border-0 focus:outline-none focus:ring-0"
                                                    required
                                                />
                                                <ValidationError 
                                                    prefix="Email" 
                                                    field="email"
                                                    errors={state.errors}
                                                    className="text-red-500 text-sm"
                                                />
                                            </div>
                                            <div className="form-group flex items-center gap-5 border-b border-gray-300 py-2">
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="Phone"
                                                    className="form-input w-full bg-transparent border-0 focus:outline-none focus:ring-0"
                                                />
                                            </div>
                                            <div className="form-group flex items-center gap-5 border-b border-gray-300 py-2">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    placeholder="Subject"
                                                    className="form-input w-full bg-transparent border-0 focus:outline-none focus:ring-0"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group sm:col-span-2 flex items-start gap-5 border-b border-gray-300 py-2">
                                            <textarea
                                                name="message"
                                                rows={1}
                                                placeholder="Ask Your Question"
                                                className="form-input w-full bg-transparent border-0 focus:outline-none focus:ring-0 resize-y min-h-[40px]"
                                            ></textarea>
                                            <ValidationError 
                                                prefix="Message" 
                                                field="message"
                                                errors={state.errors}
                                                className="text-red-500 text-sm"
                                            />
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                                            <button
                                                type="submit"
                                                // ✅ 5. Disable the button while submitting
                                                disabled={state.submitting}
                                                className="group inline-flex items-center justify-center gap-2 px-6 py-3 
                                                rounded-xl font-semibold text-white bg-primary 
                                                hover:bg-primary/90 transition-all duration-300 shadow-md
                                                disabled:bg-gray-500 disabled:cursor-not-allowed"
                                            >
                                                <span className="tracking-wide">
                                                    {state.submitting ? "SENDING..." : "GET IN TOUCH"}
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                    {/* The old 'isSuccess' message div is no longer needed */}
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