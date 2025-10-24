export const NavigationMenu = () => {
  return (
    <ul className="absolute items-stretch bg-white box-border caret-transparent block flex-col flex-wrap justify-end list-none max-h-0 max-w-[375px] min-h-10 opacity-0 w-screen z-[-1] overflow-hidden pl-0 left-0 top-full md:relative md:bg-transparent md:flex md:flex-row md:max-h-none md:max-w-none md:opacity-100 md:w-auto md:z-auto md:overflow-visible md:left-auto md:top-auto">
      <li className="relative border-l-gray-800 border-r-gray-800 border-t-gray-800 box-border caret-transparent flex flex-col justify-center min-h-0 min-w-0 text-left w-full mx-0 border-b-black/10 border-b md:border-b-gray-800 md:flex-row md:min-h-[auto] md:min-w-[auto] md:w-auto md:mx-2.5 md:border-b-0">
        <span className="absolute box-border caret-transparent hidden h-full w-full z-[1] border-blue-700 border-b-2 border-solid left-0 top-0 md:block"></span>
        <a
          href="#"
          className="text-green-400 items-center bg-gray-50 box-border caret-transparent flex justify-start min-h-[65px] min-w-0 w-full z-10 pb-0 px-[25.5px] md:text-blue-700 md:bg-transparent md:justify-center md:min-h-[auto] md:min-w-[auto] md:pb-0.5 md:px-0"
        >
          <span className="text-green-400 items-center box-border caret-transparent flex min-h-0 min-w-0 text-center md:text-blue-700 md:min-h-[auto] md:min-w-[auto]">
            Home
          </span>
        </a>
      </li>
      <li className="relative border-l-gray-800 border-r-gray-800 border-t-gray-800 box-border caret-transparent flex flex-col justify-center min-h-0 min-w-0 text-left w-full mx-0 border-b-black/10 border-b md:border-b-gray-800 md:flex-row md:min-h-[auto] md:min-w-[auto] md:w-auto md:mx-2.5 md:border-b-0">
        <span className="absolute box-border caret-transparent hidden h-full w-full z-[1] left-0 top-0 md:block"></span>
        <a
          href="#"
          className="text-gray-800 items-center bg-white box-border caret-transparent flex justify-start min-h-[65px] min-w-0 w-full z-10 px-[25.5px] md:text-black md:bg-transparent md:justify-center md:min-h-[auto] md:min-w-[auto] md:px-0"
        >
          <span className="text-gray-800 items-center box-border caret-transparent flex min-h-0 min-w-0 text-center md:text-black md:min-h-[auto] md:min-w-[auto]">
            About Us
          </span>
          <span className="text-gray-800 items-center box-content caret-transparent hidden justify-center min-h-0 min-w-0 bg-[position:0px_0px] pl-[8.5px] md:text-black md:box-border md:flex md:min-h-[auto] md:min-w-[auto] before:accent-auto before:caret-transparent before:text-gray-800 before:inline before:text-[17px] before:not-italic before:normal-nums before:font-normal before:tracking-[0.04px] before:leading-[17px] before:list-outside before:list-none before:min-h-0 before:min-w-0 before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-icomoon before:md:text-black before:md:block before:md:min-h-[auto] before:md:min-w-[auto]"></span>
        </a>
        <button
          type="button"
          aria-label="Open submenu of About Us"
          className="absolute text-gray-800 text-[13.3333px] items-center bg-transparent box-content caret-transparent flex justify-center tracking-[normal] leading-[normal] text-center z-10 bg-[position:0px_0px] p-0 right-0 top-0 font-arial md:static md:text-black md:box-border md:hidden md:pl-[6.66667px] md:right-auto md:top-auto before:accent-auto before:items-center before:caret-transparent before:text-zinc-600 before:flex before:text-[13.3333px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[13.3333px] before:list-outside before:list-none before:min-h-[65px] before:text-center before:indent-[0px] before:normal-case before:visible before:px-[26.6667px] before:border-separate before:font-icomoon before:md:[align-items:normal] before:md:text-black before:md:inline before:md:min-h-0 before:md:px-0"
        ></button>
        <ul className="relative text-sm bg-white box-border caret-transparent block flex-col leading-[24.5px] max-h-0 max-w-full min-w-0 opacity-100 visible w-max -z-10 overflow-hidden pl-0 top-0 inset-x-0 md:absolute md:bg-transparent md:table md:max-h-none md:max-w-none md:min-w-full md:opacity-0 md:invisible md:overflow-visible md:right-auto md:top-full">
          <li className="relative bg-white border-l-gray-800 border-r-gray-800 border-t-gray-800 box-border caret-transparent flex-col visible w-full border-b-black/10 border-b md:border-b-neutral-200 md:flex-row md:invisible">
            <span className="box-border caret-transparent hidden visible md:inline md:invisible"></span>
            <span className="box-border caret-transparent hidden visible md:inline md:invisible"></span>
            <a
              href="#"
              className="text-gray-800 text-[17px] items-center bg-white box-border caret-transparent flex justify-start leading-[29.75px] min-h-[65px] visible w-full pl-[42.5px] pr-[25.5px] py-0 md:bg-transparent md:justify-between md:min-h-0 md:invisible md:px-5 md:py-3"
            >
              <span className="box-border caret-transparent block min-h-0 min-w-0 visible pr-0 md:min-h-[auto] md:min-w-[auto] md:invisible md:pr-[17px]">
                About 3R Recycler
              </span>
            </a>
          </li>
          <li className="relative bg-white border-l-gray-800 border-r-gray-800 border-t-gray-800 box-border caret-transparent flex-col visible w-full border-b-black/10 border-b md:border-b-neutral-200 md:flex-row md:invisible">
            <span className="box-border caret-transparent hidden visible md:inline md:invisible"></span>
            <span className="box-border caret-transparent hidden visible md:inline md:invisible"></span>
            <a
              href="#"
              className="text-gray-800 text-[17px] items-center bg-white box-border caret-transparent flex justify-start leading-[29.75px] min-h-[65px] visible w-full pl-[42.5px] pr-[25.5px] py-0 md:bg-transparent md:justify-between md:min-h-0 md:invisible md:px-5 md:py-3"
            >
              <span className="box-border caret-transparent block min-h-0 min-w-0 visible pr-0 md:min-h-[auto] md:min-w-[auto] md:invisible md:pr-[17px]">
                Vision &amp; Mission
              </span>
            </a>
          </li>
          <li className="relative bg-white box-border caret-transparent flex-col visible w-full md:flex-row md:invisible">
            <span className="box-border caret-transparent hidden visible md:inline md:invisible"></span>
            <span className="box-border caret-transparent hidden visible md:inline md:invisible"></span>
            <a
              href="#"
              className="text-gray-800 text-[17px] items-center bg-white box-border caret-transparent flex justify-start leading-[29.75px] min-h-[65px] visible w-full pl-[42.5px] pr-[25.5px] py-0 md:bg-transparent md:justify-between md:min-h-0 md:invisible md:px-5 md:py-3"
            >
              <span className="box-border caret-transparent block min-h-0 min-w-0 visible pr-0 md:min-h-[auto] md:min-w-[auto] md:invisible md:pr-[17px]">
                Our Clients
              </span>
            </a>
          </li>
        </ul>
      </li>
      <li className="relative border-l-gray-800 border-r-gray-800 border-t-gray-800 box-border caret-transparent flex flex-col justify-center min-h-0 min-w-0 text-left w-full mx-0 border-b-black/10 border-b md:border-b-gray-800 md:flex-row md:min-h-[auto] md:min-w-[auto] md:w-auto md:mx-2.5 md:border-b-0">
        <span className="absolute box-border caret-transparent hidden h-full w-full z-[1] left-0 top-0 md:block"></span>
        <a
          href="#"
          className="text-gray-800 items-center bg-white box-border caret-transparent flex justify-start min-h-[65px] min-w-0 w-full z-10 px-[25.5px] md:text-black md:bg-transparent md:justify-center md:min-h-[auto] md:min-w-[auto] md:px-0"
        >
          <span className="text-gray-800 items-center box-border caret-transparent flex min-h-0 min-w-0 text-center md:text-black md:min-h-[auto] md:min-w-[auto]">
            Green Services
          </span>
          <span className="text-gray-800 items-center box-content caret-transparent hidden justify-center min-h-0 min-w-0 bg-[position:0px_0px] pl-[8.5px] md:text-black md:box-border md:flex md:min-h-[auto] md:min-w-[auto] before:accent-auto before:caret-transparent before:text-gray-800 before:inline before:text-[17px] before:not-italic before:normal-nums before:font-normal before:tracking-[0.04px] before:leading-[17px] before:list-outside before:list-none before:min-h-0 before:min-w-0 before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-icomoon before:md:text-black before:md:block before:md:min-h-[auto] before:md:min-w-[auto]"></span>
        </a>
        <button
          type="button"
          aria-label="Open submenu of Green Services"
          className="absolute text-gray-800 text-[13.3333px] items-center bg-transparent box-content caret-transparent flex justify-center tracking-[normal] leading-[normal] text-center z-10 bg-[position:0px_0px] p-0 right-0 top-0 font-arial md:static md:text-black md:box-border md:hidden md:pl-[6.66667px] md:right-auto md:top-auto before:accent-auto before:items-center before:caret-transparent before:text-zinc-600 before:flex before:text-[13.3333px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[13.3333px] before:list-outside before:list-none before:min-h-[65px] before:text-center before:indent-[0px] before:normal-case before:visible before:px-[26.6667px] before:border-separate before:font-icomoon before:md:[align-items:normal] before:md:text-black before:md:inline before:md:min-h-0 before:md:px-0"
        ></button>
        <ul className="relative text-sm bg-white box-border caret-transparent block flex-col leading-[24.5px] max-h-0 max-w-full min-w-0 opacity-100 visible w-max -z-10 overflow-hidden pl-0 top-0 inset-x-0 md:absolute md:bg-transparent md:table md:max-h-none md:max-w-none md:min-w-full md:opacity-0 md:invisible md:overflow-visible md:right-auto md:top-full">
          <li className="relative bg-white border-l-gray-800 border-r-gray-800 border-t-gray-800 box-border caret-transparent flex-col visible w-full border-b-black/10 border-b md:border-b-neutral-200 md:flex-row md:invisible">
            <span className="box-border caret-transparent hidden visible md:inline md:invisible"></span>
            <span className="box-border caret-transparent hidden visible md:inline md:invisible"></span>
            <a
              href="#"
              className="text-gray-800 text-[17px] items-center bg-white box-border caret-transparent flex justify-start leading-[29.75px] min-h-[65px] visible w-full pl-[42.5px] pr-[25.5px] py-0 md:bg-transparent md:justify-between md:min-h-0 md:invisible md:px-5 md:py-3"
            >
              <span className="box-border caret-transparent block min-h-0 min-w-0 visible pr-0 md:min-h-[auto] md:min-w-[auto] md:invisible md:pr-[17px]">
                Eco Friendly Recycling
              </span>
            </a>
          </li>
          <li className="relative bg-white border-l-gray-800 border-r-gray-800 border-t-gray-800 box-border caret-transparent flex-col visible w-full border-b-black/10 border-b md:border-b-neutral-200 md:flex-row md:invisible">
            <span className="box-border caret-transparent hidden visible md:inline md:invisible"></span>
            <span className="box-border caret-transparent hidden visible md:inline md:invisible"></span>
            <a
              href="#"
              className="text-gray-800 text-[17px] items-center bg-white box-border caret-transparent flex justify-start leading-[29.75px] min-h-[65px] visible w-full pl-[42.5px] pr-[25.5px] py-0 md:bg-transparent md:justify-between md:min-h-0 md:invisible md:px-5 md:py-3"
            >
              <span className="box-border caret-transparent block min-h-0 min-w-0 visible pr-0 md:min-h-[auto] md:min-w-[auto] md:invisible md:pr-[17px]">
                Asset Management
              </span>
            </a>
          </li>
          <li className="relative bg-white border-l-gray-800 border-r-gray-800 border-t-gray-800 box-border caret-transparent flex-col visible w-full border-b-black/10 border-b md:border-b-neutral-200 md:flex-row md:invisible">
            <span className="box-border caret-transparent hidden visible md:inline md:invisible"></span>
            <span className="box-border caret-transparent hidden visible md:inline md:invisible"></span>
            <a
              href="#"
              className="text-gray-800 text-[17px] items-center bg-white box-border caret-transparent flex justify-start leading-[29.75px] min-h-[65px] visible w-full pl-[42.5px] pr-[25.5px] py-0 md:bg-transparent md:justify-between md:min-h-0 md:invisible md:px-5 md:py-3"
            >
              <span className="box-border caret-transparent block min-h-0 min-w-0 visible pr-0 md:min-h-[auto] md:min-w-[auto] md:invisible md:pr-[17px]">
                Data Destruction
              </span>
            </a>
          </li>
          <li className="relative bg-white border-l-gray-800 border-r-gray-800 border-t-gray-800 box-border caret-transparent flex-col visible w-full border-b-black/10 border-b md:border-b-neutral-200 md:flex-row md:invisible">
            <span className="box-border caret-transparent hidden visible md:inline md:invisible"></span>
            <span className="box-border caret-transparent hidden visible md:inline md:invisible"></span>
            <a
              href="#"
              className="text-gray-800 text-[17px] items-center bg-white box-border caret-transparent flex justify-start leading-[29.75px] min-h-[65px] visible w-full pl-[42.5px] pr-[25.5px] py-0 md:bg-transparent md:justify-between md:min-h-0 md:invisible md:px-5 md:py-3"
            >
              <span className="box-border caret-transparent block min-h-0 min-w-0 visible pr-0 md:min-h-[auto] md:min-w-[auto] md:invisible md:pr-[17px]">
                Reverse Logistics
              </span>
            </a>
          </li>
          <li className="relative bg-white box-border caret-transparent flex-col visible w-full md:flex-row md:invisible">
            <span className="box-border caret-transparent hidden visible md:inline md:invisible"></span>
            <span className="box-border caret-transparent hidden visible md:inline md:invisible"></span>
            <a
              href="#"
              className="text-gray-800 text-[17px] items-center bg-white box-border caret-transparent flex justify-start leading-[29.75px] min-h-[65px] visible w-full pl-[42.5px] pr-[25.5px] py-0 md:bg-transparent md:justify-between md:min-h-0 md:invisible md:px-5 md:py-3"
            >
              <span className="box-border caret-transparent block min-h-0 min-w-0 visible pr-0 md:min-h-[auto] md:min-w-[auto] md:invisible md:pr-[17px]">
                EPR Implementation Company
              </span>
            </a>
          </li>
        </ul>
      </li>
      <li className="relative border-l-gray-800 border-r-gray-800 border-t-gray-800 box-border caret-transparent flex flex-col justify-center min-h-0 min-w-0 text-left w-full mx-0 border-b-black/10 border-b md:border-b-gray-800 md:flex-row md:min-h-[auto] md:min-w-[auto] md:w-auto md:mx-2.5 md:border-b-0">
        <span className="absolute box-border caret-transparent hidden h-full w-full z-[1] left-0 top-0 md:block"></span>
        <a
          href="#"
          className="text-gray-800 items-center bg-white box-border caret-transparent flex justify-start min-h-[65px] min-w-0 w-full z-10 px-[25.5px] md:text-black md:bg-transparent md:justify-center md:min-h-[auto] md:min-w-[auto] md:px-0"
        >
          <span className="text-gray-800 items-center box-border caret-transparent flex min-h-0 min-w-0 text-center md:text-black md:min-h-[auto] md:min-w-[auto]">
            Li-Ion Battery Recycling
          </span>
        </a>
      </li>
      <li className="relative border-l-gray-800 border-r-gray-800 border-t-gray-800 box-border caret-transparent flex flex-col justify-center min-h-0 min-w-0 text-left w-full mx-0 border-b-black/10 border-b md:border-b-gray-800 md:flex-row md:min-h-[auto] md:min-w-[auto] md:w-auto md:mx-2.5 md:border-b-0">
        <span className="absolute box-border caret-transparent hidden h-full w-full z-[1] left-0 top-0 md:block"></span>
        <a
          href="#"
          className="text-gray-800 items-center bg-white box-border caret-transparent flex justify-start min-h-[65px] min-w-0 w-full z-10 px-[25.5px] md:text-black md:bg-transparent md:justify-center md:min-h-[auto] md:min-w-[auto] md:px-0"
        >
          <span className="text-gray-800 items-center box-border caret-transparent flex min-h-0 min-w-0 text-center md:text-black md:min-h-[auto] md:min-w-[auto]">
            Tyre Recycling
          </span>
        </a>
      </li>
      <li className="relative border-l-gray-800 border-r-gray-800 border-t-gray-800 box-border caret-transparent flex flex-col justify-center min-h-0 min-w-0 text-left w-full mx-0 border-b-black/10 border-b md:border-b-gray-800 md:flex-row md:min-h-[auto] md:min-w-[auto] md:w-auto md:mx-2.5 md:border-b-0">
        <span className="absolute box-border caret-transparent hidden h-full w-full z-[1] left-0 top-0 md:block"></span>
        <a
          href="#"
          className="text-gray-800 items-center bg-white box-border caret-transparent flex justify-start min-h-[65px] min-w-0 w-full z-10 px-[25.5px] md:text-black md:bg-transparent md:justify-center md:min-h-[auto] md:min-w-[auto] md:px-0"
        >
          <span className="text-gray-800 items-center box-border caret-transparent flex min-h-0 min-w-0 text-center md:text-black md:min-h-[auto] md:min-w-[auto]">
            Sustainability
          </span>
        </a>
      </li>
      <li className="relative border-l-gray-800 border-r-gray-800 border-t-gray-800 box-border caret-transparent flex flex-col justify-center min-h-0 min-w-0 text-left w-full mx-0 border-b-black/10 border-b md:border-b-gray-800 md:flex-row md:min-h-[auto] md:min-w-[auto] md:w-auto md:mx-2.5 md:border-b-0">
        <span className="absolute box-border caret-transparent hidden h-full w-full z-[1] left-0 top-0 md:block"></span>
        <a
          href="#"
          className="text-gray-800 items-center bg-white box-border caret-transparent flex justify-start min-h-[65px] min-w-0 w-full z-10 px-[25.5px] md:text-black md:bg-transparent md:justify-center md:min-h-[auto] md:min-w-[auto] md:px-0"
        >
          <span className="text-gray-800 items-center box-border caret-transparent flex min-h-0 min-w-0 text-center md:text-black md:min-h-[auto] md:min-w-[auto]">
            Contact Us
          </span>
        </a>
      </li>
    </ul>
  );
};
