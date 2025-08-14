import React from "react";
// Assuming you are using Next.js for its Image component
import Image from "next/image";

const Logo = () => {
  return (
    <a href="/">
      <Image
        src="/FR_LOGO/FR_LOGO.png" // The correct path to your logo
        alt="Fraemi Vision Logo"
        width={40} // Set the width of the image
        height={40} // Set the height of the image
          
      />
    </a>
  );
};

export default Logo;