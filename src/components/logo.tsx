import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/FR_LOGO/FR_LOGO.png"
      alt="Fraemi Vision Logo"
      width={40}
      height={40}
      className="cursor-pointer"
    />
  );
};

export default Logo;