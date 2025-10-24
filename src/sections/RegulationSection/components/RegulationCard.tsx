export type RegulationCardProps = {
  title: string;
  description: string;
  readMoreUrl: string;
  variant: string;
};

export const RegulationCard = (props: RegulationCardProps) => {
  return (
    <div
      className={`relative box-border caret-transparent flex float-left w-full md:w-6/12 ${props.variant}`}
    >
      <div className="bg-emerald-800/10 bg-no-repeat bg-cover box-border caret-transparent flex flex-col justify-start w-full mx-[1.92%] pt-5 pb-[30px] px-[30px] border-t-8 border-solid md:mx-[3.84%] md:pb-10 md:px-[60px] border-emerald-800">
        <div className="items-center box-border caret-transparent text-center my-2.5">
          <h2 className="text-zinc-900 text-[34.9175px] font-bold box-border caret-transparent leading-[45.3927px] font-roboto md:text-[40px] md:leading-[52px]">
            {props.title}
          </h2>
        </div>
        <div className="relative items-start box-border caret-transparent flex flex-wrap ml-[-2%] mr-[-2%] max-w-[104%] w-[104%] z-10">
          <div className="relative box-border caret-transparent flex float-left w-full mt-2.5 mb-5">
            <div className="bg-no-repeat bg-cover box-border caret-transparent flex flex-col justify-start w-full mx-[1.92%]">
              <div className="box-border caret-transparent text-center">
                <div className="box-border caret-transparent">
                  <span className="relative box-border caret-transparent inline-block leading-[18px] max-w-full align-middle z-[1] before:accent-auto before:shadow-[rgba(0,0,0,0.4)_0px_17px_10px_0px] before:caret-transparent before:text-gray-800 before:block before:text-lg before:not-italic before:normal-nums before:font-normal before:h-1/5 before:tracking-[0.04px] before:leading-[18px] before:list-outside before:list-disc before:max-h-[100px] before:max-w-[460px] before:opacity-70 before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:w-3/5 before:z-[-1] before:border-separate before:left-2.5 before:bottom-[15px] before:font-sen after:accent-auto after:shadow-[rgba(0,0,0,0.4)_0px_17px_10px_0px] after:caret-transparent after:text-gray-800 after:block after:text-lg after:not-italic after:normal-nums after:font-normal after:h-1/5 after:tracking-[0.04px] after:leading-[18px] after:list-outside after:list-disc after:max-h-[100px] after:max-w-[460px] after:opacity-70 after:absolute after:text-center after:indent-[0px] after:normal-case after:visible after:w-3/5 after:z-[-1] after:border-separate after:right-2.5 after:bottom-[15px] after:font-sen">
                    <img
                      alt="Templet"
                      title="Templet"
                      src=""
                      className="aspect-[auto_330_/_157] box-border caret-transparent max-w-full align-top w-[330px]"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent text-center">
          <p className="box-border caret-transparent mb-5">
            {props.description}
          </p>
        </div>
        <div className="box-border caret-transparent text-center">
          <a
            href={props.readMoreUrl}
            className="relative text-zinc-900 text-sm bg-transparent box-border caret-transparent inline-block leading-[17px] border-emerald-800 px-[29px] py-[13px] border-2 border-solid before:accent-auto before:caret-transparent before:text-zinc-900 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[0.04px] before:leading-[17px] before:list-outside before:list-disc before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-sen after:accent-auto after:caret-transparent after:clear-both after:text-zinc-900 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[0.04px] after:leading-[17px] after:list-outside after:list-disc after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-sen hover:text-emerald-800 hover:bg-emerald-800"
          >
            <span className="text-emerald-800 box-border caret-transparent">
              Read Mor
            </span>
            <i className="text-emerald-800 font-black box-border caret-transparent inline-block leading-[14px] ml-2.5 font-font_awesome_5_free before:accent-auto before:caret-transparent before:text-emerald-800 before:text-sm before:not-italic before:normal-nums before:font-black before:tracking-[0.04px] before:leading-[14px] before:list-outside before:list-disc before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_free"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
