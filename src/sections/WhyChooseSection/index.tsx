import { WhyChooseContent } from "@/sections/WhyChooseSection/components/WhyChooseContent";
import { WhyChooseImage } from "@/sections/WhyChooseSection/components/WhyChooseImage";

export const WhyChooseSection = () => {
  return (
    <div className="relative bg-zinc-100 bg-no-repeat box-border caret-transparent flex justify-center ml-[-30px] mr-[-30px] bg-center pt-[30px] pb-10 px-[30px] md:px-20 md:py-[60px]">
      <div className="relative items-start box-border caret-transparent flex basis-[0%] grow flex-wrap ml-[-2%] mr-[-2%] max-w-[1539.2px] min-h-0 min-w-0 w-full z-10 md:min-h-[auto] md:min-w-[auto]">
        <WhyChooseContent />
        <WhyChooseImage />
      </div>
    </div>
  );
};
