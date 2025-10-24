import { ClientsSlider } from "@/sections/ClientsSection/components/ClientsSlider";

export const ClientsSection = () => {
  return (
    <div className="relative bg-transparent bg-no-repeat box-border caret-transparent flex justify-center ml-[-30px] mr-[-30px] bg-center p-[30px] md:pl-[70px] md:pr-[120px] md:pt-0">
      <div className="relative items-start box-border caret-transparent flex basis-[0%] grow flex-wrap ml-[-2%] mr-[-2%] max-w-[1539.2px] min-h-0 min-w-0 w-full z-10 md:min-h-[auto] md:min-w-[auto]">
        <div className="relative box-border caret-transparent flex float-left min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto]">
          <div className="bg-no-repeat bg-cover box-border caret-transparent flex flex-col justify-start min-w-0 w-full mx-[1.92%] md:min-w-[auto]">
            <div className="items-center box-border caret-transparent min-h-0 min-w-0 text-center my-2.5 md:min-h-[auto] md:min-w-[auto] md:mb-5">
              <h2 className="text-blue-800 text-[34.9175px] font-bold box-border caret-transparent leading-[45.3927px] font-roboto md:text-[40px] md:leading-[52px]">
                Our Clients
              </h2>
            </div>
            <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent py-[25px]">
                  <ClientsSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
