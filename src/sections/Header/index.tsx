import { Logo } from "@/sections/Header/components/Logo";
import { DesktopNavigation } from "@/sections/Header/components/DesktopNavigation";

export const Header = () => {
  return (
    <div className="relative bg-white bg-no-repeat box-border caret-transparent hidden justify-center z-[10011] bg-center -mb-40 pl-[50px] md:flex">
      <div className="relative items-start box-border caret-transparent flex basis-[0%] grow flex-wrap ml-[-2%] mr-[-2%] max-w-[1539.2px] min-h-0 min-w-0 w-full z-10 md:min-h-[auto] md:min-w-[auto]">
        <Logo />
        <DesktopNavigation />
      </div>
    </div>
  );
};
