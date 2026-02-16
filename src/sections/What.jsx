import Btn from "../ui/Btn";
import Title from "../ui/Title";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Autoplay } from "swiper/modules";

const What = () => {
  return (
    <div className="bg-[#090812]">
      <div className="container1">
        <Title title={"Our resources"} text={"What we do"} />

        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="flex items-center">
            <div className="bg-[url(/lines.png)] flex flex-col items-center gap-5  border-l-9 p-[20px] md:p-[50px] border-[#BF3AFF] max-w-[753px]">
              <img src="Logo2.png" alt="" />
              <h1 className="text-white text-[clamp(1.625rem,1.0357rem+2.4176vw,3rem)] font-bold">
                About toKen $Cmeta
              </h1>
              <p className="text-white text-[clamp(1rem,0.8929rem+0.4396vw,1.25rem)]">
                CMETA, a BSC-based cryptocurrency token will be the sole
                governance token on the platform. This means that every single
                transaction in the Crafty Metaverse space will be conducted with
                the $CMETA token
              </p>
              <Btn text={"Play (Coming Soon)"} />
            </div>
          </div>
          <img src="/what.png" alt="" />
        </div>
      </div>
      <Swiper
        slidesPerView={0.65}
        spaceBetween={5}
        centeredSlides={true}
        modules={[FreeMode, Autoplay]}
        className="mySwiper transform translate-x-[-10%] border-t-4 border-b-4 border-amber-50 rotate-[-10deg] w-[150%] bg-[url(/lines.png)] bg-contain"
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={25000}
        loop={true}
        allowTouchMove={false}
      >
        <SwiperSlide>
          <h1 className="text-white text-[clamp(3.625rem,0.5351rem+13.7331vw,12.5rem)] whitespace-nowrap font-bold">
            VR GAME MARKETPLACE
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="text-white text-[clamp(3.625rem,0.5351rem+13.7331vw,12.5rem)] whitespace-nowrap font-bold">
            VR GAME MARKETPLACE
          </h1>
        </SwiperSlide>
      </Swiper>
      <Swiper
        slidesPerView={0.65}
        spaceBetween={5}
        centeredSlides={true}
        modules={[FreeMode, Autoplay]}
        className="mySwiper border-t-4 transform translate-x-[-10%] border-b-4 border-amber-50 rotate-[-10deg] w-[150%]"
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={25000}
        loop={true}
        allowTouchMove={false}
      >
        <SwiperSlide className="bg-black">
          <h1 className="craft text-[clamp(1.25rem,0.0532rem+5.3191vw,4.6875rem)] whitespace-nowrap font-bold flex">
            CRAFTY METAVERSE      CRAFTY METAVERSE      CRAFTY METAVERSE <img src="/plain.svg" alt="plain" />
          </h1>
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <h1 className="craft text-[clamp(1.25rem,0.0532rem+5.3191vw,4.6875rem)] whitespace-nowrap font-bold flex">
            CRAFTY METAVERSE      CRAFTY METAVERSE      CRAFTY METAVERSE <img src="/plain.svg" alt="plain" />
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default What;
