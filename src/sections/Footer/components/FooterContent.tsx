import { FooterNavigation } from "@/sections/Footer/components/FooterNavigation";
import { FooterColumn } from "@/sections/Footer/components/FooterColumn";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";
import { SocialLinks } from "@/sections/Footer/components/SocialLinks";

export const FooterContent = () => {
  return (
    <div className="relative bg-emerald-800/10 bg-no-repeat box-border caret-transparent flex justify-center bg-center px-[30px] py-10 md:py-0">
      <div className="relative items-start box-border caret-transparent flex basis-[0%] grow flex-wrap ml-[-2%] mr-[-2%] max-w-[1539.2px] w-full z-10">
        <div className="relative box-border caret-transparent flex float-left w-full">
          <div className="bg-no-repeat bg-cover box-border caret-transparent flex flex-col justify-start w-full mx-[1.92%] p-[30px]">
            <div className="relative items-start box-border caret-transparent flex flex-wrap ml-[-2%] mr-[-2%] max-w-[104%] w-[104%] z-10">
              <div className="relative box-border caret-transparent flex float-left w-full">
                <FooterNavigation />
              </div>
              <FooterColumn
                title="Corporate Office"
                address="Office No. 502, 5th Floor, DDA Building, Laxmi Nagar District Center, Delhi – 110092"
                phoneLabel="Phone No."
                phoneNumber="011-43026362"
                phoneHref="tel://01143026362"
                email="info@freshtronics.com"
              />
              <FooterColumn
                title="Unit"
                address="Plot no- A-61/1 & A61/2, UPSIDC Industrial Area, Sikandrabad, Bulandshahr-203202, U.P"
                phoneLabel="Toll Free No."
                phoneNumber="1800-212-8632"
                phoneHref="tel://18002128632"
                email="info@freshtronics.com"
              />
              <FooterColumn
                title="Unit "
                address="G-175 & G-176, MG Road, Mussoorie Gulawathi Road Industrial Area, Hapur, UP-201015."
                phoneLabel="Toll Free No."
                phoneNumber="1800-212-8632"
                phoneHref="tel://18002128632"
                email="info@freshtronics.com"
              />
              <div className="relative box-border caret-transparent flex float-left w-full">
                <div className="bg-no-repeat bg-cover box-border caret-transparent flex flex-col justify-start w-full mx-[1.92%]">
                  <div className="relative items-center self-center box-border caret-transparent clear-both flex max-w-full w-full z-[11] mt-10 mb-[30px] mx-auto">
                    <div className="box-border caret-transparent grow-[2] border-t border-solid border-black/20"></div>
                  </div>
                </div>
              </div>
              <FooterCopyright />
              <SocialLinks />
            </div>
            <div className="box-border caret-transparent">
              <p className="box-border caret-transparent my-[18px]">
                <br className="box-border caret-transparent" />
                <br className="box-border caret-transparent" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
