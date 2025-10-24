import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1920&h=700&fit=crop",
    title: "E-Waste Recycling Solutions",
    subtitle: "Leading the way in sustainable electronic waste management"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=1920&h=700&fit=crop",
    title: "Lithium-Ion Battery Recycling",
    subtitle: "Advanced technology for battery waste management"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=1920&h=700&fit=crop",
    title: "Sustainable Future",
    subtitle: "Protecting the environment through responsible recycling"
  }
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className="relative box-border caret-transparent block w-full">
      <div className="absolute box-border caret-transparent block h-[281px] w-screen z-[1] mx-auto left-0 top-0 md:h-[700px] md:left-[-30px]">
        <div className="relative box-border caret-transparent block h-[281px] max-h-[281px] w-screen overflow-hidden md:h-[700px] md:max-h-[700px]">
          {/* Slides Container */}
          <div className="relative h-full w-full">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-105 z-0"
                }`}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/70 to-blue-800/50"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex items-center justify-center px-4 md:px-20">
                  <div className="text-center max-w-4xl">
                    <h1
                      className={`text-white text-3xl md:text-6xl font-bold mb-4 transition-all duration-700 delay-200 ${
                        index === currentSlide
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                    >
                      {slide.title}
                    </h1>
                    <p
                      className={`text-white text-lg md:text-2xl transition-all duration-700 delay-400 ${
                        index === currentSlide
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                    >
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation - Right Side Middle */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3 md:right-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? "w-8 h-3 bg-white"
                    : "w-3 h-3 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent block h-[281px] w-full md:h-[700px]"></div>
    </div>
  );
};
