export const WhyChooseImage = () => {
  return (
    <div className="relative self-center box-border caret-transparent flex float-left min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto] md:w-6/12">
      <div className="bg-no-repeat bg-cover box-border caret-transparent flex flex-col justify-start min-w-0 w-full mx-[1.92%] md:min-w-[auto] md:mx-[3.84%]">
        <div className="box-border caret-transparent min-h-0 min-w-0 text-center md:min-h-[auto] md:min-w-[auto]">
          <span className="relative box-border caret-transparent inline-block leading-[18px] max-w-[400px] align-middle w-full z-[1] overflow-hidden mb-[30px]">
            <img
              alt="Recycler"
              title="ewaste_recycling"
              src="https://c.animaapp.com/mgjl4r8gSxZVm4/assets/ewaste_recycling.png"
              sizes="400px"
              className="aspect-[auto_600_/_551] box-border caret-transparent max-w-full align-top w-[600px]"
            />
          </span>
        </div>
        <div className="box-border caret-transparent min-h-0 min-w-0 text-center md:min-h-[auto] md:min-w-[auto]">
          <a
            href="#"
            className="relative text-zinc-900 text-sm bg-emerald-800 box-border caret-transparent inline-block leading-[17px] px-[29px] py-[13px] before:accent-auto before:caret-transparent before:text-zinc-900 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[0.04px] before:leading-[17px] before:list-outside before:list-disc before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-sen after:accent-auto after:caret-transparent after:clear-both after:text-zinc-900 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[0.04px] after:leading-[17px] after:list-outside after:list-disc after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-sen hover:text-emerald-800 hover:bg-lime-400"
          >
            <span className="text-white box-border caret-transparent">
              Schedule a Pickup
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
