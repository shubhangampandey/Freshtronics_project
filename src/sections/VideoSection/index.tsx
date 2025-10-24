export const VideoSection = () => {
  return (
    <div className="relative bg-black/50 bg-no-repeat box-border caret-transparent flex h-auto justify-center ml-[-30px] mr-[-30px] z-[1] overflow-hidden bg-center pt-5 pb-[30px] px-[30px] md:h-[1000px] md:py-0">
      <div className="absolute box-border caret-transparent min-h-full min-w-full z-[1] overflow-hidden left-0 top-0">
      <video
      key="unique-video-1" 
  preload="auto"
  autoPlay
  playsInline
  loop
  muted
  
  className="absolute box-border caret-transparent min-h-full min-w-full object-cover transform-none z-[1] left-2/4 top-2/4 md:translate-x-[-50.0%] md:translate-y-[-50.0%]"
>
  <source
    src=""
    type="video/mp4"
  />
</video>


      </div>
      <div className="absolute bg-black/50 box-border caret-transparent h-full w-full z-[5] left-0 top-0"></div>
      <div className="relative items-start box-border caret-transparent flex basis-[0%] grow flex-wrap ml-[-2%] mr-[-2%] max-w-[1539.2px] min-h-0 min-w-0 w-full z-10 md:min-h-[auto] md:min-w-[auto]">
        <div className="relative self-center box-border caret-transparent flex float-left min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto] md:w-[16.6667%]">
          <div className="bg-no-repeat bg-cover box-border caret-transparent flex flex-col justify-start min-h-px min-w-0 w-full mx-[1.92%] md:min-w-[auto] md:mx-[11.52%]"></div>
        </div>
        <div className="relative self-center box-border caret-transparent flex float-left min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto] md:w-[66.6667%]">
          <div className="bg-no-repeat bg-cover box-border caret-transparent flex flex-col justify-start min-w-0 w-full mx-[1.92%] md:min-w-[auto] md:mx-[2.88%]">
            <div className="text-white text-[25px] box-border caret-transparent leading-[43.75px] min-h-0 min-w-0 text-center md:min-h-[auto] md:min-w-[auto]">
              <p className="box-border caret-transparent mb-5">
                <strong className="font-bold box-border caret-transparent">
                  Recycling E-waste aids in the recovery of valuable materials
                  from obsolete or no longer in use electronic products. Natural
                  resources are thus saved and conserved as a result.
                </strong>
              </p>
            </div>
          </div>
        </div>
        <div className="relative self-center box-border caret-transparent flex float-left min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto] md:w-[16.6667%]">
          <div className="bg-no-repeat bg-cover box-border caret-transparent flex flex-col justify-start min-h-px min-w-0 w-full mx-[1.92%] md:min-w-[auto] md:mx-[11.52%]"></div>
        </div>
      </div>
    </div>
  );
};
