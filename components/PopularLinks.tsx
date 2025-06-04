'use client'; // only for Next.js App Router
import React from "react";

import { slugify } from "@/app/utils/slugify";
import { useRouter } from 'next/navigation';


const links = [
  "Best Fire Fighting Works in India",
  "Best Fire Pump Panel in India",
  "Best Cable Tray in India",
  "Best Main LT Panel with PLC in India",
  "Best Bus Ducts in India",
  "Best Meter Board Panel in India",
  "Best APFC (Automatic Power Factor Control) Panels in India",
  "BEST FIRE FIGHTING WORKS IN India",
  "Best Control Desks in India",
  "Best AC & DC Drives in India",
  "Best Distribution Boards in India",
  "Best Synchronizing Panel in India",
  "Best Electronic Panels in India",
  "Best AMF (Auto Main Failure) Panel in India",
  "Best Generator Panels in India"
];

const PopularLinks = () => {
  const router = useRouter();

  const handleClick = (link: string) => {
    const slugParts = slugify(link); // ['bus-ducts', 'sector-126-noida']
    router.push(`/services/${slugParts.join('/')}`);
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md container mx-auto mb-4">
      <h2 className="text-xl font-semibold border-b-2 border-orange-500 inline-block mb-4">
        Popular Links
      </h2>
      <div className="flex flex-wrap gap-2">
        {links.map((link, idx) => (
          <div
            key={idx}
            onClick={() => handleClick(link)}
            className="text-sm text-orange-600 border border-orange-300 px-3 py-1 rounded hover:bg-orange-100 cursor-pointer"
          >
            {link}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularLinks;
