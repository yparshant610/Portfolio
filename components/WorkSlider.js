// data
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/edlearn-homepage.png",
          href: "https://github.com/yparshant610/EdLearn-Website",
        },
        {
          title: "title",
          path: "/netflix .png",
          href: "https://netflix-c-gamma.vercel.app/login",
        },
        {
          title: "title",
          path: "/portfolio.png",
          href: "https://portfolio-nu-neon-19.vercel.app/",
        },
        {
          title: "title",
          path: "/FoodBites.png",
          href: "https://github.com/yparshant610/FoodBites",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/Four_Layer_Password_Protection_project.png",
          href: "https://github.com/yparshant610/4-layer-password-authentication",
        },
        {
          title: "title",
          path: "/portfolio1.png",
          href: "https://portfolio-parshant-nu.vercel.app/",
        },
        
      ],
    },
  ],
};

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper";

//icons
import { BsArrowRight } from "react-icons/bs";

//next image
import images from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <a href={image.href} key={index} target="_blank" rel="noopener noreferrer">
                    <div
                      className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    >
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        {/* image */}
                        <Image src={image.path} width={500} height={300} alt="" />
  
                        {/* overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700">
                          {/* title */}
                          <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 transition-all duration-300">
                            <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                              {/* title part 1 */}
                              <div className="delay-100">LIVE</div>
                              {/* title part 2 */}
                              <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                                Project
                              </div>
                              {/* icon */}
                              <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
