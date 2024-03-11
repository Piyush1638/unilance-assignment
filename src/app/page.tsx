import Faq from "@/components/sections/Faq";
import HelpUsToDoMore from "@/components/sections/HelpUsToDoMore";
import YourInformation from "@/components/sections/YourInformation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#F6F9F4] px-6 laptop:px-32 py-20">
      <div className="flex justify-center laptop:flex-row flex-col gap-8">
        <div className="bg-[#ffffff] rounded-3xl tablet:rounded-xl">
          <HelpUsToDoMore />
          <hr className="h-px bg-[#00000040] border-0 shadow-lg text-gray-500" />
          <YourInformation />
        </div>
        <div>
          <Faq/>
          
        </div>
      </div>
    </main>
  );
}
