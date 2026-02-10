import Image from "next/image";
import Link from "next/link";
import { images } from "@/utils/images";

const companies = [
  { name: "Airbnb", src: images.airbnb, href: "https://www.airbnb.com" },
  { name: "HubSpot", src: images.hubspot, href: "https://www.hubspot.com" },
  { name: "Google", src: images.google, href: "https://www.google.com" },
  { name: "Microsoft", src: images.microsoft, href: "https://www.microsoft.com" },
  { name: "Walmart", src: images.wallmart, href: "https://www.walmart.com" },
  { name: "FedEx", src: images.fedex, href: "https://www.fedex.com" },
];

export default function HomeFooter() {
  return (
    <section className="w-full py-10 border-t border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center gap-10">
          {companies.map((company) => (
            <Link
              key={company.name}
              href={company.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition"
            >
              <Image
                src={company.src}
                alt={`${company.name} logo`}
                width={100}
                height={32}
                className="object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
