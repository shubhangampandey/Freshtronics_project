export const MobileLogo = () => {
  return (
    <div className="relative box-border caret-transparent flex float-left min-h-[auto] min-w-[auto] w-9/12 md:min-h-0 md:min-w-0 md:w-3/12">
      <div className="bg-no-repeat bg-cover box-border caret-transparent flex flex-col justify-start min-w-[auto] w-full mx-[2.56%] md:min-w-0 md:mx-[7.68%]">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
          <span className="relative box-border caret-transparent inline-block leading-[18px] max-w-full align-middle z-[1] overflow-hidden">
            <a
              href="#"
              aria-label="3rrecycler logo"
              className="text-zinc-900 box-border caret-transparent hover:text-emerald-800 hover:border-emerald-800"
            >
              <img
                alt="3rrecycler logo"
                src="#"
                className="aspect-[auto_100_/_86] box-border caret-transparent max-w-full align-top w-[100px]"
              />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
