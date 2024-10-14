"use client"
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { Cover } from "./ui/cover";

export function ServiceSection() {
  return (
    
    <div className="max-w-6xl mx-auto px-8">
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Service We Provide <br /> at <Cover>warp speed</Cover>
        </h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    
  {
    title: "Mobile App Development",
    description:
      "Being a mobile app development company, we understand the complexities of the industry and mobile application development. Let SN Digitech become your partner in creating a beautiful mobile experience.",
    link: "https://stripe.com",
  },
  {
    title: "Website Design & Development",
    description:
      "Allow SN Digitech to create a memorable first impression for your online audience. Our team delivers cutting-edge websites that are beautiful to look at and perform equally well.",
    link: "https://netflix.com",
  },
  {
    title: "SaaS Development",
    description:
      "Being a well-known SaaS development company, we are committed to delivering innovative, robust, and scalable SaaS development services.",
    link: "https://google.com",
  },
  {
    title: "AR/VR Development",
    description:
      "Augmented Reality (AR) and Virtual Reality (VR) Development involves creating immersive digital experiences that blend the virtual world with the real one. ",
    link: "https://meta.com",
  },
  {
    title: "Blockchain Development",
    description:
      "At SN Digitech, We develop comprehend enterprise needs and build web solutions conforming to the end-customers experience in Blockchain Development.",
    link: "https://amazon.com",
  },
  {
    title: "Digital Marketing",
    description:
      "Digital marketing is an obvious activity to attract your desired/targeted audience to promote your brand, product or services.",
    link: "https://microsoft.com",
  },
];
