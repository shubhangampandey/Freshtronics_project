import { MobileMenuButton } from "@/components/MobileMenuButton";
import { MobileNavigationMenu } from "@/sections/MobileHeader/components/MobileNavigationMenu";

export const MobileNavigation = () => {
  return (
    <div className="relative self-center box-border caret-transparent flex float-left min-h-[auto] min-w-[auto] w-3/12 md:min-h-0 md:min-w-0 md:w-9/12">
      <div className="bg-no-repeat bg-cover box-border caret-transparent flex flex-col justify-start min-w-[auto] w-full mx-[7.68%] md:min-w-0 md:mx-[2.56%]">
        <nav
          aria-label="Menu"
          className="relative text-[17px] items-center box-border caret-transparent flex flex-wrap justify-end leading-[29.75px] min-h-[auto] min-w-[auto] w-full md:static md:[align-items:normal] md:block md:flex-nowrap md:justify-normal md:min-h-0 md:min-w-0"
        >
          <MobileMenuButton
            variant="text-zinc-900 min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"
            iconColor="before:text-zinc-900"
          />
          <MobileNavigationMenu />
        </nav>
      </div>
    </div>
  );
};
