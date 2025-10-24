import { RegulationCard } from "@/sections/RegulationSection/components/RegulationCard";

export const RegulationSection = () => {
  return (
    <div className="relative bg-transparent bg-no-repeat box-border caret-transparent hidden justify-center ml-[-30px] mr-[-30px] bg-center p-[30px] md:pt-20 md:pb-[50px] md:px-20">
      <div className="relative items-start box-border caret-transparent flex basis-[0%] grow flex-wrap ml-[-2%] mr-[-2%] max-w-[1539.2px] w-full z-10">
        <RegulationCard
          title="E-waste Regulation"
          description="According to the new India E-Waste Management and Handling Rules 2011, the manufacturer of electronics goods is responsible for setting."
          readMoreUrl="#"
          variant="mb-10 md:mb-0"
        />
        <RegulationCard
          title="Environmental Policy"
          description="According to the new India E-Waste Management and Handling Rules 2011, the manufacturer of electronics goods is responsible for setting."
          readMoreUrl="#"
          variant=""
        />
      </div>
    </div>
  );
};
