import { TopBar } from "@/sections/TopBar";
import { Header } from "@/sections/Header";
import { MobileHeader } from "@/sections/MobileHeader";
import { Main } from "@/sections/Main";
import { Footer } from "@/sections/Footer";

export const App = () => {
  return (
    <body className="text-gray-800 text-lg not-italic normal-nums font-normal accent-auto bg-blend-overlay bg-transparent bg-no-repeat box-border caret-transparent block tracking-[0.04px] leading-[31.5px] list-outside list-disc min-w-80 text-start indent-[0px] normal-case visible border-separate font-sen">
      <div className="box-border caret-transparent overflow-hidden">
        <div className="box-border caret-transparent hidden"></div>
        <div className="relative bg-blend-overlay bg-transparent box-border caret-transparent w-auto md:w-full">
          <div className="relative box-border caret-transparent -top-px"></div>
          <section className="box-border caret-transparent">
            <TopBar />
            <Header />
            <MobileHeader />
          </section>
          <div className="relative box-border caret-transparent"></div>
          <section className="box-border caret-transparent"></section>
          <Main />
          <Footer />
          <div className="box-border caret-transparent"></div>
        </div>
      </div>
      <div className="box-border caret-transparent hidden"></div>
      <div className="box-border caret-transparent hidden"></div>
      <div className="box-border caret-transparent hidden"></div>
      <a className="text-zinc-900 box-border caret-transparent hover:text-emerald-800 hover:border-emerald-800"></a>
      <div className="box-border caret-transparent"></div>
      <div className="box-border caret-transparent hidden md:block"></div>
    </body>
  );
};
