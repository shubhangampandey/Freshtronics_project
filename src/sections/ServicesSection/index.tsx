import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";

export const ServicesSection = () => {
  return (
    <div className="relative bg-cyan-500 bg-no-repeat box-border caret-transparent flex justify-center ml-[-30px] mr-[-30px] bg-center p-[30px] md:px-[100px] md:py-[60px]">
      <div className="relative items-start box-border caret-transparent flex basis-[0%] grow flex-wrap ml-[-2%] mr-[-2%] max-w-[1539.2px] min-h-0 min-w-0 w-full z-10 md:min-h-[auto] md:min-w-[auto]">
        <div className="relative box-border caret-transparent flex float-left min-h-0 min-w-0 w-full mb-5 md:min-h-[auto] md:min-w-[auto]">
          <div className="bg-no-repeat bg-cover box-border caret-transparent flex flex-col justify-start min-w-0 w-full mx-[1.92%] md:min-w-[auto]">
            <div className="items-center box-border caret-transparent min-h-0 min-w-0 text-center my-2.5 md:min-h-[auto] md:min-w-[auto]">
              <h2 className="text-white text-[34.9175px] font-bold box-border caret-transparent leading-[45.3927px] font-roboto md:text-[40px] md:leading-[52px]">
                Green Services
              </h2>
            </div>
          </div>
        </div>
        <ServiceCard
          title="E-Waste Recycling"
          description="We are committed to closing the loop. From pick-up to refurbishing, we treat your e-waste using innovative clean-engineering techniques."
          href="#"
          variant="self-stretch"
          iconVariant="flex-col justify-center"
        />
        <ServiceCard
          title="Asset Management"
          description="We offer a wide range of asset management services to assist businesses with large-scale projects or ongoing managed services."
          href="#"
          variant=""
          iconVariant="flex flex-col justify-center"
        />
        <ServiceCard
          title="Data Destruction"
          description="This ensures that all data is safeguarded. We use a three-step data elimination process to ensure that critical data does not leave your premises."
          href="#"
          variant="self-stretch"
          iconVariant="flex-col justify-center"
        />
        <ServiceCard
          title="Reverse Logistics"
          description="We have established a widespread presence throughout India to assist producers and address this issue by providing a customized."
          href="#"
          variant="self-stretch"
          iconVariant="justify-center"
        />
        <ServiceCard
          title="ERP Implementation"
          description="Our successful implementation methodology is built on years of successful implementation experience and industry best practices."
          href="#"
          variant="self-stretch"
          iconVariant="justify-start"
        />
        <ServiceCard
          title="Lithium-Ion Battery Recycling"
          description="To recycle the battery materials, we use a combination of mechanical and hydrometallurgical technologies."
          href="#"
          variant="self-stretch"
          iconVariant="flex-col justify-center"
        />
      </div>
    </div>
  );
};
