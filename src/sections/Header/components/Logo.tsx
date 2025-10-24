export const Logo = () => {
  return (
    <div className="relative self-center box-border caret-transparent flex float-left min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto] md:w-1/5">
      <div className="bg-no-repeat bg-cover box-border caret-transparent flex flex-col justify-start min-w-0 w-full mx-[1.92%] py-[5px] md:min-w-[auto] md:mx-[9.6%]">
        <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <span className="relative box-border caret-transparent inline-block leading-[18px] max-w-full align-middle z-[1] overflow-hidden">
            <a
              href="/"
              aria-label="3rrecycler logo"
              className="text-zinc-900 box-border caret-transparent hover:text-white hover:border-white"
            >
              <img
                alt="3rrecycler logo"
                src="https://i.ibb.co/bR2nbHH3/main-logo.png"
                className="aspect-[auto_100_/_86] box-border caret-transparent max-w-full align-top w-[100px]"
              />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
