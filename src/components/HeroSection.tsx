import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";
import { BackgroundLines } from "@/components/ui/background-lines";


function HeroSection() {
  return (
    <div className="h-auto md:h-[45rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0" >
          <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
          />
          <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <div className="p-4 relative z-10 w-full text-center ">
          
          <h1 className="mt-20  md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400" >Think Digital, Live Digital</h1>
          <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto" >SN Digitech Pvt. Ltd. is a leading digital marketing, web design & development company, serving our clients globally.
            
          </p>
          <div className="mt-4">
              <Link href={"/about-us"} > <Button borderRadius="1.75rem"   className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800" >About Us</Button> </Link>
          </div>
          
          </div>
          </BackgroundLines>
      </div>
  )
}

export default HeroSection
