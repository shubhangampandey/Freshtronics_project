export type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  variant: string;
  iconVariant: string;
};

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div
      className={`relative box-border caret-transparent flex float-left min-h-0 min-w-0 w-full mb-[30px] md:min-h-[auto] md:min-w-[auto] md:w-[33.3333%] ${props.variant}`}
    >
      <div
        className={`relative box-border caret-transparent flex flex-col min-w-0 w-full z-[3] border-emerald-800/0 overflow-hidden mx-[1.92%] pt-[30px] pb-5 rounded-[15px] border-[3px] border-solid md:min-w-[auto] md:mx-[15px] ${props.variant === "self-stretch" ? "shadow-[rgba(5,5,5,0.11)_2px_2px_10px_10px] justify-start" : "shadow-[rgba(5,5,5,0.11)_2px_2px_10px_5px] justify-center"}`}
      >
        <div className="relative items-start box-border caret-transparent flex flex-wrap ml-[-2%] mr-[-2%] max-w-[104%] min-h-0 min-w-0 w-[104%] z-10 md:min-h-[auto] md:min-w-[auto]">
          <div className="relative self-center box-border caret-transparent flex float-left min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto] md:w-[16.6667%]">
            <div
              className={`relative bg-no-repeat bg-cover box-border caret-transparent flex flex-col min-w-0 w-full z-[3] mx-[1.92%] pl-[15px] md:min-w-[auto] md:mx-[11.52%] ${props.iconVariant}`}
            >
              <i className="text-blue-800 text-[55px] font-black box-border caret-transparent block leading-[55px] min-h-0 min-w-0 mr-[27.5px] font-font_awesome_5_free md:min-h-[auto] md:min-w-[auto] before:accent-auto before:caret-transparent before:text-blue-800 before:text-[55px] before:not-italic before:normal-nums before:font-black before:tracking-[0.04px] before:leading-[55px] before:list-outside before:list-disc before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_free"></i>
            </div>
          </div>
          <div className="relative box-border caret-transparent flex float-left min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto] md:w-[83.3333%]">
            <div className="relative bg-no-repeat bg-cover box-border caret-transparent flex flex-col justify-start min-w-0 w-full z-[3] mx-[1.92%] pl-[30px] pr-[15px] md:min-w-[auto] md:mx-[2.304%]">
              <div className="text-xl items-center box-border caret-transparent leading-[35px] min-h-0 min-w-0 my-2.5 md:min-h-[auto] md:min-w-[auto] md:mt-0">
                <h3 className="text-zinc-900 font-bold box-border caret-transparent leading-[26px] text-left font-roboto">
                  {props.title}
                </h3>
              </div>
              <div className="text-[15px] box-border caret-transparent leading-[26.25px] min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                <p className="box-border caret-transparent mb-5">
                  {props.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="absolute box-border caret-transparent block overflow-hidden mx-[1.92%] rounded-[15px] inset-0 md:mx-[15px]">
        <a
          href={props.href}
          className="text-zinc-900 box-border caret-transparent block h-full w-full hover:text-emerald-800 hover:border-emerald-800"
        >
          <span className="bg-white bg-no-repeat bg-cover box-border caret-transparent block h-full w-full rounded-[15px] left-0 top-0"></span>
        </a>
      </span>
    </div>
  );
};
