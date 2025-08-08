"use client";
import Logo from "@/components/logo";
import { motion } from "framer-motion";

export default function HeroSection({ isScrolled }: { isScrolled: boolean }) {
  // Define font sizes (adjust to match your logo size exactly)
  const normalFontSize = "8rem"; // ~text-4xl (large)
  const shrinkFontSize = "1.5rem"; // ~text-xl (logo size)

  return (
    <>
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center min-h-screen text-center px-4"
      >
        <motion.div
          className={`h-[40px] flex items-center gap-3 z-50 ${
            isScrolled
              ? "fixed top-[20px] left-[5%] w-full"
              : "relative bg-transparent"
          }`}
          style={{ justifyContent: "start", transition: "all 0.5s cubic-bezier(.4,0,.2,1)" }}
          // No animate on wrapper to avoid conflicts
        >
          <motion.h1
            layoutId="company-name"
            className="font-headline font-bold text-foreground"
            initial={{ fontSize: normalFontSize }}
            animate={{ fontSize: isScrolled ? shrinkFontSize : normalFontSize }}
            transition={{
              duration: 1.25,
              type: "tween",
              ease: "easeInOut",
            }}
          >
            Fraemi Vision
          </motion.h1>
        </motion.div>
        <br />

        <p className="mt-4 text-lg md:text-2xl text-foreground/70 max-w-2xl">
          Crafting digital experiences that captivate and inspire.
        </p>
      </section>
    </>
  );
}
