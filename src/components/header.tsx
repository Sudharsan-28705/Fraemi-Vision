"use client";
import Link from "next/link";
import { Menu } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";


import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./logo";


const navLinks = [
  { href: "/" , label: "Home" },
  { href: "/about" , label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
  { href: "#", label: "SRT Translation" },
];

// Main Header Component
export default function Header({ isScrolled }: { isScrolled: boolean }) {
  const title = "Fraemi Vision";

  // Animation variants for the title container
  const sentenceVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };
  // Animation variants for each letter of the title
  const letterVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-500",
        isScrolled ? "bg-background/80 backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            {/* AnimatePresence handles the enter/exit animations */}
            <AnimatePresence>
              {isScrolled && (
                <>
                  {/* The Logo animation */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <Link href="/" aria-label="Back to homepage">
                      <Logo/>
                    </Link>
                  </motion.div>

                  {/* The letter-by-letter "Fraemi Vision" animation */}
                  <motion.h1
                    className="font-headline font-bold text-foreground text-xl"
                    variants={sentenceVariant}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {title.split("").map((char, index) => (
                      <motion.span
                        key={char + "-" + index}
                        variants={letterVariant}
                        className="inline-block"
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.h1>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* --- Desktop Navigation --- */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* --- Mobile Navigation --- */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-6 pt-10">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-foreground transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
