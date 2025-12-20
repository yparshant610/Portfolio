//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxCube,
  RxArrowTopRight,
} from "react-icons/rx";

//import required modules
import { FreeMode, Pagination } from "swiper";

// Service data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description:
      "Crafting unique visual identities that define your business and resonate with audiences.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description:
      "Creating intuitive and visually stunning interfaces that engage and convert users.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "Building robust, scalable, and high-performance websites tailored to your specific needs.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description:
      "Compelling narratives and persuasive content designed to articulate your value clearly.",
  },
  {
    icon: <RxCube />,
    title: "3D Modelling",
    description:
      "High-quality 3D assets and visualizations that bring your abstract concepts to life.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <Link href={`/services/${item.title.toLowerCase().replace(/ /g, '-')}`}>
            <div className="bg-[rgba(65,47,123,0.15)] h-full rounded-lg px-6 py-8 flex flex-col justify-between sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89, 65, 169, 0.15)] transition-all duration-300">
              {/* icons */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc*/}
              <div className="mb-8">
                <div className=" mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className=" group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
