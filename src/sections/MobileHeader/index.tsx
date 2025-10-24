import { MobileLogo } from "@/sections/MobileHeader/components/MobileLogo";
import { MobileNavigation } from "@/sections/MobileHeader/components/MobileNavigation";

export const MobileHeader = () => {
  return (
    <div className="relative bg-transparent bg-no-repeat shadow-[rgba(0,0,0,0.25)_0px_2px_15px_0px] box-border caret-transparent flex justify-center z-[9999] bg-center px-[15px] md:hidden">
      <div className="relative items-start box-border caret-transparent flex basis-[0%] grow flex-wrap ml-[-2%] mr-[-2%] max-w-[1539.2px] min-h-[auto] min-w-[auto] w-full z-10 md:min-h-0 md:min-w-0">
        <MobileLogo />
        <MobileNavigation />
      </div>
    </div>
  );
};
