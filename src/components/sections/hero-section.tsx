"use client";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../logo";

export default function HeroSection({ isScrolled }: { isScrolled: boolean }) {
  return (
    <>
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center min-h-screen text-center px-4"
      >
        <span className="mt-[100px] border-2 border-red-700 h-[300px] w-[300px]"><Logo /></span>
        <motion.h1
          className="font-headline font-bold text-foreground"
          style={{ fontSize: "8rem" }}
          animate={{ opacity: isScrolled ? 0 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Fraemi Vision
        </motion.h1>

        <p className="mt-4 text-lg md:text-2xl text-foreground/70 max-w-2xl">
          Crafting digital experiences that captivate and inspire.
        </p>
      </section>
    </>
  );
}