import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"]});


export const metadata: Metadata = {
  title: " Best App Development & Digital Transformation Company | SN Digitech ",
  description: "As an App Development & Digital Transformation Company, We offer a wide bouquet of services spanning from SEO, PPC, SMM and website, S/W and app development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" >
      <body className={`antialiased ${inter.className} `}>
        <div className="relative w-full flex items-center justify-center scrollbar-hide "> 
          <Navbar/> 
         
        
        </div>
        
        {children}
        
      </body>
      
    </html>
  );
}
