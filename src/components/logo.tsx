import Image from "next/image";
const CLOUDINARY_BASE = "https://res.cloudinary.com/dhrsh9c2v";

const Logo = () => {
  return (
    <Image
      src={`${CLOUDINARY_BASE}/image/upload/v1771943103/FRAEMI_VISION_LOGO_ejczht.png`}
      alt="Fraemi Vision Logo"
      width={40}
      height={40}
      className="cursor-pointer"
    />
  );
};

export default Logo;