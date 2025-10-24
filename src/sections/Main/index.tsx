import { HeroSection } from "@/sections/HeroSection";

export const Main = () => {
  return (
    <main className="bg-blend-overlay bg-transparent bg-no-repeat box-border caret-transparent clear-both hidden px-[30px] md:block after:accent-auto after:caret-transparent after:clear-both after:text-gray-800 after:table after:text-lg after:not-italic after:normal-nums after:font-normal after:tracking-[0.04px] after:leading-[31.5px] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-sen">
      <div className="box-border caret-transparent flex flex-wrap max-w-full mx-auto md:block md:flex-nowrap before:accent-auto before:caret-transparent before:text-gray-800 before:table before:text-lg before:not-italic before:normal-nums before:font-normal before:tracking-[0.04px] before:leading-[31.5px] before:list-outside before:list-disc before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-sen after:accent-auto after:caret-transparent after:clear-both after:text-gray-800 after:table after:text-lg after:not-italic after:normal-nums after:font-normal after:tracking-[0.04px] after:leading-[31.5px] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-sen">
        <section className="box-border caret-transparent float-left min-h-px w-full after:accent-auto after:caret-transparent after:clear-both after:text-gray-800 after:table after:text-lg after:not-italic after:normal-nums after:font-normal after:tracking-[0.04px] after:leading-[31.5px] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-sen">
          <div className="box-border caret-transparent">
            <span className="box-border caret-transparent hidden">Home</span>
            <span className="box-border caret-transparent hidden">
              <span className="box-border caret-transparent">
                <a
                  href="#"
                  title="Posts by Admin"
                  className="text-zinc-900 box-border caret-transparent hover:text-emerald-800 hover:border-emerald-800"
                >
                  Admin
                </a>
              </span>
            </span>
            <span className="box-border caret-transparent hidden">
              2024-06-24T15:23:00+05:30
            </span>
            <HeroSection />
          </div>
        </section>
      </div>
    </main>
  );
};
