import { StatsMarquee } from "@/sections/StatsSection/components/StatsMarquee";

export const StatsSection = () => {
  return (
    <div className="relative bg-cyan-500 bg-no-repeat box-border caret-transparent flex justify-center ml-[-30px] mr-[-30px] bg-center px-[30px]">
      <div className="relative items-start box-border caret-transparent flex basis-[0%] grow flex-wrap ml-[-2%] mr-[-2%] max-w-[1539.2px] min-h-0 min-w-0 w-full z-10 md:min-h-[auto] md:min-w-[auto]">
        <div className="relative self-center box-border caret-transparent flex float-left min-h-0 min-w-0 w-full mt-5 md:min-h-[auto] md:min-w-[auto]">
          <StatsMarquee />
        </div>
      </div>
    </div>
  );
};
