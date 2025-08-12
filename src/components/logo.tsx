import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <>
  <svg
    xmlns="public\Fraemi_logo\FR_LOGO.png"
    href=""
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    className={cn("text-primary", props.className)}
  >
    <title>Fraemi Vision</title>
    <path d="M3 3h18v18H3z" fill="hsl(var(--primary))" fillOpacity="0.1" stroke="none" />
    <path d="M3 3h18v18H3z" />
    <path d="M12 12m-4 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
    <path d="M3 12h4m10 0h4" />
  </svg>
  </>
);
export default Logo;
