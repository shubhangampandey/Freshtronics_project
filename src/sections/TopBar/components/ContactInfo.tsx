export const ContactInfo = () => {
  return (
    <div className="relative items-start box-border caret-transparent flex basis-[0%] grow flex-wrap ml-[-2%] mr-[-2%] max-w-[1539.2px] min-h-0 min-w-0 w-full z-10 md:min-h-[auto] md:min-w-[auto]">
      <div className="relative self-center box-border caret-transparent flex float-left min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto] md:w-[33.3333%]">
        <div className="bg-no-repeat bg-cover box-border caret-transparent flex flex-col justify-start min-h-px min-w-0 w-full mx-[1.92%] md:min-w-[auto] md:mx-[5.76%]"></div>
      </div>
      <div className="relative self-center box-border caret-transparent flex float-left min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto] md:w-3/12">
        <div className="bg-no-repeat bg-cover box-border caret-transparent flex flex-col justify-start min-w-0 w-full mx-[1.92%] md:min-w-[auto] md:ml-[140px] md:mr-[7.68%]">
          <ul className="text-base box-border caret-transparent leading-[27.2px] list-none min-h-0 min-w-0 mt-2.5 pl-0 md:min-h-[auto] md:min-w-[auto]">
            <li className="box-border caret-transparent text-left pb-[5.5px]">
              <span className="items-center box-border caret-transparent flex float-left h-[27.2px] justify-center tracking-[normal] leading-4 w-[27.2px] mr-[11.2px]">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </span>
              <div className="box-border caret-transparent ml-[38.4px]">
                <a
                  href="mailto://info@frehstronics.com"
                  className="text-zinc-900 box-border caret-transparent hover:text-emerald-800 hover:border-emerald-800"
                >
                  <span className="text-black box-border caret-transparent">
                    info@freshtronics.com
                  </span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative self-center box-border caret-transparent flex float-left min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto] md:w-3/12">
        <div className="bg-no-repeat bg-cover box-border caret-transparent flex flex-col justify-start min-w-0 w-full mx-[1.92%] md:min-w-[auto] md:ml-[70px] md:mr-[7.68%]">
          <ul className="text-base box-border caret-transparent leading-[27.2px] list-none min-h-0 min-w-0 mt-2.5 pl-0 md:min-h-[auto] md:min-w-[auto]">
            <li className="box-border caret-transparent text-left pb-[5.5px]">
              <span className="items-center box-border caret-transparent flex float-left h-[27.2px] justify-center tracking-[normal] leading-4 w-[27.2px] mr-[11.2px]">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
              </span>
              <div className="box-border caret-transparent ml-[38.4px]">
                <span className="text-black box-border caret-transparent">
                  Toll Free:
                </span>
                <a
                  href="tel://18002128632"
                  className="text-zinc-900 box-border caret-transparent hover:text-emerald-800 hover:border-emerald-800"
                >
                  <span className="text-black box-border caret-transparent">
                    1800-212-8632
                  </span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative self-center box-border caret-transparent flex float-left min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto] md:w-[16.6667%]">
        <div className="bg-no-repeat bg-cover box-border caret-transparent flex flex-col justify-start min-w-0 w-full mx-[1.92%] md:min-w-[auto] md:mx-[11.52%]">
          <ul className="text-base box-border caret-transparent leading-[27.2px] list-none min-h-0 min-w-0 mt-2.5 pl-0 md:min-h-[auto] md:min-w-[auto]">
            <li className="box-border caret-transparent text-left pb-[5.5px]">
              <span className="items-center box-border caret-transparent flex float-left h-[27.2px] justify-center tracking-[normal] leading-4 w-[27.2px] mr-[11.2px]">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </span>
              <div className="box-border caret-transparent ml-[38.4px]">
                <span className="text-black box-border caret-transparent">
                  <a
                    href="#"
                    className="box-border caret-transparent hover:text-emerald-800"
                  >
                    Client Login
                  </a>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
