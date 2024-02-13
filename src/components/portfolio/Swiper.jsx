import { Swiper, SwiperSlide } from "swiper/react";
import Menu from "./Menu";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Swiper.css";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {Menu.map((elem) => {
          const { id, image, title, description, link, github } = elem;
          return (
            <SwiperSlide key={id}>
              <h2>{title}</h2>
              <img src={image} alt="" />
              <p className="swiper_description">{t(`${elem.description}`)}</p>
              <div className="information">
                {github && <a href={github}>Github</a>}
                {link && <a href={link}>Visit me</a>}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
