import { ContactInfo } from "@/sections/TopBar/components/ContactInfo";

export const TopBar = () => {
  return (
    <div className="relative bg-cyan-500 bg-no-repeat box-border caret-transparent hidden saturate-[0.78] justify-center z-[9999] bg-center pl-[50px] pr-[45px] md:flex">
      <ContactInfo />
    </div>
  );
};
