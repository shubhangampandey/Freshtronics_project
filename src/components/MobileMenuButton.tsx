export type MobileMenuButtonProps = {
  variant: string;
  iconColor: string;
};

export const MobileMenuButton = (props: MobileMenuButtonProps) => {
  return (
    <button
      type="button"
      className={`bg-white caret-transparent block tracking-[normal] leading-[normal] text-center px-5 py-3 md:hidden ${props.variant}`}
    >
      <span className="items-center box-border caret-transparent flex justify-start">
        <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"></span>
        <span className="relative box-border caret-transparent block h-[17px] min-h-[auto] min-w-[auto] w-[17px] md:min-h-0 md:min-w-0">
          <span
            className={`absolute font-black box-border caret-transparent block leading-[17px] w-[17px] left-0 font-font_awesome_5_free before:accent-auto before:caret-transparent ${props.iconColor} before:text-[17px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[17px] before:list-outside before:list-disc before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_free`}
          ></span>
        </span>
      </span>
    </button>
  );
};
