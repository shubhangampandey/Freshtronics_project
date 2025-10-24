import { AboutContent } from "@/sections/AboutSection/components/AboutContent";
import { AboutImage } from "@/sections/AboutSection/components/AboutImage";

export const AboutSection = () => {
  return (
    <div className="relative bg-transparent bg-no-repeat box-border caret-transparent flex justify-center ml-[-30px] mr-[-30px] bg-center">
      <div className="relative items-start box-border caret-transparent flex basis-[0%] grow flex-wrap ml-[-2%] mr-[-2%] max-w-[1539.2px] min-h-0 min-w-0 w-full z-10 md:min-h-[auto] md:min-w-[auto]">
        <AboutContent />
        <AboutImage />
      </div>
    </div>
  );
};
