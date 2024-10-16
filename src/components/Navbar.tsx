'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
// import { FloatingNav } from "./ui/floating-navbar";
import { cn } from "@/utils/cn";
//  import Link from "next/link";
import Image from "next/image";
import logo from "./images/sn-digitech-logo.png"

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  
 
  
  
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50  ", className)}>
      <Menu setActive={setActive} >
        
        <HoveredLink href={"/"} >
          <Image src={logo} alt="sn-digitech-logo" className="h-12 w-auto pr-10 "/>
        </HoveredLink>
        
        <HoveredLink href={"/about-us"} >
          <MenuItem setActive={setActive} active={active} item="About Us" >
      
          </MenuItem>
        </HoveredLink>
        
        
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className=" text-sm grid grid-cols-3 gap-8 p-2">
            <ProductItem
              title="Mobile App Development"
              href="/"
              src=""
              description="SN Digitech providing services globally"
            />
            <ProductItem
              title="Digital Marketing"
              href="/"
              src=""
              description="SN Digitech providing services globally"
            />
            <ProductItem
              title="Search Engine Optimization"
              href="/"
              src=""
              description="SN Digitech providing services globally"
            />
            <ProductItem
              title="SAAS Development"
              href="/"
              src=""
              description="SN Digitech providing services globally"
            />
            <ProductItem
              title="Digital Strategy & Planning"
              href="/"
              src=""
              description="SN Digitech providing services globally"
            />
            <ProductItem
              title="Social Media Marketing"
              href="/"
              src=""
              description="SN Digitech providing services globally"
            />
            <ProductItem
              title="Website Design & Development"
              href="/"
              src=""
              description="SN Digitech providing services globally"
            />
            <ProductItem
              title="Performance Marketing"
              href="/"
              src=""
              description="SN Digitech providing services globally"
            />
            <ProductItem
              title="PPC Marketing"
              href="/"
              src=""
              description="SN Digitech providing services globally"
            />
            <ProductItem
              title="AR/VR Development"
              href="/"
              src=""
              description="SN Digitech providing services globally"
            />
            <ProductItem
              title="Creative UI/UX Design"
              href="/"
              src=""
              description="SN Digitech providing services globally"
            />
            <ProductItem
              title="Email Marketing"
              href="/"
              src=""
              description="SN Digitech providing services globally"
            />
            <ProductItem
              title="Blockchain Development"
              href="/"
              src=""
              description="SN Digitech providing services globally"
            />
            <ProductItem
              title="E-Commerce Services"
              href="/"
              src=""
              description="SN Digitech providing services globally"
            />
            <ProductItem
              title="Video / App / Content Marketing"
              href="/"
              src=""
              description="SN Digitech providing services globally"
            />
            
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Industries">
          <div className="grid grid-cols-3 gap-8 p-3 text-base">
            <HoveredLink href="/game-app">Game App</HoveredLink>
            <HoveredLink href="/cyber-security">Cyber Security</HoveredLink>
            <HoveredLink href="/block-chain">Block Chain</HoveredLink>
            <HoveredLink href="/fintech">Fintech</HoveredLink>
            <HoveredLink href="/iot">IOT</HoveredLink>
            <HoveredLink href="/iot">Entertainment</HoveredLink>
            <HoveredLink href="/iot">Saas</HoveredLink>
            <HoveredLink href="/iot">Travel</HoveredLink>
            <HoveredLink href="/iot">Events</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Case Study">
          <div className=" text-sm grid grid-cols-2 gap-8 p-2">
            <ProductItem
              title="Mobile App Development"
              href="/"
              src=""
              description="SN Digitech providing services globally"
            />
            <ProductItem
              title="Digital Marketing"
              href="/"
              src=""
              description="SN Digitech providing services globally"
            />
            <ProductItem
              title="Search Engine Optimization"
              href="/"
              src=""
              description="SN Digitech providing services globally"
            />
            <ProductItem
              title="SAAS Development"
              href="/"
              src=""
              description="SN Digitech providing services globally"
            />
            <ProductItem
              title="Digital Strategy & Planning"
              href="/"
              src=""
              description="SN Digitech providing services globally"
            />
            <ProductItem
              title="Social Media Marketing"
              href="/"
              src=""
              description="SN Digitech providing services globally"
            />
            <ProductItem
              title="Website Design & Development"
              href="/"
              src=""
              description="SN Digitech providing services globally"
            />
            <ProductItem
              title="Performance Marketing"
              href="/"
              src=""
              description="SN Digitech providing services globally"
            />
            
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/usa-office">USA Office</HoveredLink>
            <HoveredLink href="/india-office">India Office</HoveredLink>
            <HoveredLink href="/canada-office">Canada Office</HoveredLink>
          </div>
        </MenuItem>
        
        
        </Menu>
    </div>
    
  )
}

