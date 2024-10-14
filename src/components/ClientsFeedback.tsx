"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Raj Grover CEO High Tide Inc.",
    description:
      "SN Digitech was a great strategic partner and provided valuable insights to support our turnaround. Their understanding of our business and the marketplace resulted in recommendations to help fuel our success.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        High Tide Inc
      </div>
    ),
  },
  {
    title: "Sahil Pasrija MD Rajindra Industries",
    description:
      "We approached SN Digitech to design our e-commerce website and we are happy with the job done by SN Digitech team. As a young team ourselves, we loved them! Their ideas are fun, practical and worth adopting. Look them up people if you want to launch your website!",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        {/* <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        /> */}
      </div>
    ),
  },
  {
    title: "Keshav Kumar Khatri CEO Harry Group",
    description:
      "I want to thank SN Digitech content team for writing content to our website and blogs and we are getting a good response to our website. The content provided by SN Digitech team are excellent.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Harry Group
      </div>
    ),
  },
];
export function ClientsFeedback() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
