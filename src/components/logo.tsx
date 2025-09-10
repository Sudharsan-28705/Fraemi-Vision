import React from "react";
// Assuming you are using Next.js for its Image component
import Image from "next/image";

const Logo = () => {
  return (
    // The component now only returns the Image
    <Image
      src="/FR_LOGO/FR_LOGO.png"
      alt="Fraemi Vision Logo"
      width={40} // Add width
      height={40} // Add height
      className="cursor-pointer" // Add a pointer cursor to indicate it's clickable
    />
  );
};

export default Logo;