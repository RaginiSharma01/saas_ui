import Image from "next/image";
import { images } from "@/utils/images";

const footerLinks = [
  {
    title: "Product",
    links: [
      "Store",
      "Developer",
      "Teams",
      "Pro",
      "API Docs",
      "Pricing",
      "Changelog",
    ],
  },
  {
    title: "Company",
    links: [
      "Careers",
      "Manifesto",
      "Privacy policy",
      "Terms of Service",
      "DPA",
      "Press Kit",
      "Contact",
    ],
  },
  {
    title: "Community",
    links: [
      "Community stories",
      "Slack",
      "Twitter",
      "GitHub",
      "Dribbble",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full text-white bg-black min-h-[320px]  ">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.Footer}
          alt="footer background"
          fill
          className="object-cover "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo */}
        <div className="flex items-start">
          <Image
            src={images.FooterLogo}
            alt="logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>
<div className="flex md:hidden flex-wrap md:flex-nowrap justify-between ">
  {footerLinks.map((section) => (
          <div key={section.title} className="">
            <h4 className="text-sm font-semibold mb-4">
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        </div>

{/* <div className="flex flex-wrap md:flex-nowrap justify-between "> */}
 {/* Link columns */}
        {footerLinks.map((section) => (
          <div key={section.title} className="hidden md:block">
            <h4 className="text-sm font-semibold mb-4">
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
{/* </div> */}
       
    </footer>
    
  );
}
