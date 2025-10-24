export const AboutContent = () => {
  return (
    <div className="relative self-stretch box-border caret-transparent flex float-left min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto] md:w-3/5">
      <div className="bg-white bg-no-repeat bg-cover box-border caret-transparent flex flex-col justify-start min-w-0 w-full mx-[1.92%] pt-[30px] pb-[50px] px-[30px] md:min-w-[auto] md:mx-0 md:pl-[110px] md:pb-10">
        <div className="relative items-center box-border caret-transparent min-h-0 min-w-0 z-[2000] my-2.5 md:min-h-[auto] md:min-w-[auto]">
          <h2 className="text-blue-700 text-[34.9175px] box-border caret-transparent leading-[45.3927px] text-left font-roboto md:text-[40px] md:leading-[52px]"></h2>
          <h2 className="text-blue-700 text-[34.9175px] font-bold box-border caret-transparent leading-[45.3927px] mb-2.5 pr-0 font-roboto md:text-[40px] md:leading-[52px] md:pr-2">
            About 3R Recycler
          </h2>
        </div>
        <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <h5 className="text-zinc-900 text-xl font-bold box-border caret-transparent leading-[26px] text-justify my-[33.4px] font-roboto">
            <a
              href="#"
              className="box-border caret-transparent hover:text-emerald-800 hover:border-emerald-800"
            >
              3R Recycler
            </a>
            is a leading
            <strong className="box-border caret-transparent">
              {" "}
              E-Waste recycling company
            </strong>
             in India. Our goal is to reduce the storage of used and discarded
            electrical and electronic equipment, which is typically land-filled
            or recycled in an unorganized manner by the informal sectors, posing
            serious health risks to the unskilled workforce.
          </h5>
          <p className="box-border caret-transparent text-justify mb-5">
            We are one of India’s leading providers of IT Asset Disposition
            services. To manage E-waste recycling in an environment-friendly
            manner while generating revenue for our clients, we have partnered
            with India’s leading IT, IT-enabled, telecom, pharmaceutical,
            consumer durable goods manufacturers, BPO companies, and hospitality
            companies. We have achieved all this while complying with the CPCB’s
            environmental safety guidelines.
            <strong className="font-bold box-border caret-transparent">
              3R recycler
            </strong>
            is among the top 
            <strong className="font-bold box-border caret-transparent">
              E-waste recycling company in India.
            </strong>
          </p>
        </div>
        <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <a
            href="#"
            className="relative text-zinc-900 text-sm bg-blue-800 bg-[linear-gradient(to_top,rgb(55,106,187),rgb(1,72,186))] box-border caret-transparent inline-block leading-[17px] text-center px-[29px] py-[13px] rounded-[18px] border-2 border-solid border-white before:accent-auto before:caret-transparent before:text-zinc-900 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[0.04px] before:leading-[17px] before:list-outside before:list-disc before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-sen after:accent-auto after:caret-transparent after:clear-both after:text-zinc-900 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[0.04px] after:leading-[17px] after:list-outside after:list-disc after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-sen hover:text-emerald-800 hover:bg-emerald-800 hover:border-emerald-800"
          >
            <span className="text-white box-border caret-transparent">
              Read More
            </span>
            <i className="text-white font-black box-border caret-transparent inline-block leading-[14px] ml-2.5 font-font_awesome_5_free before:accent-auto before:caret-transparent before:text-white before:text-sm before:not-italic before:normal-nums before:font-black before:tracking-[0.04px] before:leading-[14px] before:list-outside before:list-disc before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_free"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
