import Link from "next/link";

interface CustomButtonProps {
  href: string;
  text: string;
}

export default function CustomButton({ href, text }: CustomButtonProps) {
  return (
    <Link 
      href={href}
      className="customButton group"
    >
      <span className="customButton2  transition-colors">
        {text}
      </span>
      <div className="h-[20px] w-px bg-black  mx-4"></div>
      <svg 
        className="w-5 h-5 text-black  transform group-hover:translate-x-1 transition-all duration-300" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Link>
  );
}
