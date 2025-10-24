import { MobileMenuButton } from "@/components/MobileMenuButton";
import { NavigationMenu } from "@/components/NavigationMenu";

export const DesktopNavigation = () => {
  return (
    <div className="relative self-center box-border caret-transparent flex float-left min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto] md:w-9/12">
      <div className="bg-no-repeat bg-cover box-border caret-transparent flex flex-col justify-start min-w-0 w-full mx-[1.92%] md:min-w-[auto] md:mx-[2.56%]">
        <nav
          aria-label="Menu"
          className="relative text-[17px] items-center box-border caret-transparent flex flex-wrap justify-start leading-[29.75px] min-h-0 min-w-0 w-full md:static md:[align-items:normal] md:block md:flex-nowrap md:justify-normal md:min-h-[auto] md:min-w-[auto]"
        >
          <MobileMenuButton
            variant="text-zinc-600"
            iconColor="before:text-zinc-600"
          />
          <NavigationMenu />
        </nav>
      </div>
    </div>
  );
};
