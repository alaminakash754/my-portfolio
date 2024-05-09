import coverProject from "../../assets/savvy care.jpg";
import coverProject1 from "../../assets/savvy1.jpg";
import coverProject2 from "../../assets/savvy2.jpg";
import coverProject3 from "../../assets/savvy3.jpg";
import coverProject4 from "../../assets/savvy4.jpg";
import coverProject5 from "../../assets/savvy7.jpg";
import coverProject6 from "../../assets/savvy6.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const AutoZone = () => {
  return (
    <div className="ml-10 mt-5">
      <h1 className="text-3xl text-purple-500 font-semibold text-center mb-5">
        The Auto Zone
      </h1>
      <p className="font-medium text-lg text-white mb-4">
        Here some screen shot of my project:
      </p>
      {/* <div className="carousel w-full ml-10 h-[600px]">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src='https://i.ibb.co/CsSBsmz/bike-project.jpg' className="w-full h-[500px] rounded-lg" />


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full ">
                    <img src='https://i.ibb.co/1XT2jNV/bike-project1.jpg ' className="w-full h-[500px] rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full ">
                    <img src='https://i.ibb.co/zQTB1qk/bike-project3.jpg' className="w-full h-[500px] rounded-lg" />


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full ">
                    <img src='https://i.ibb.co/8mf2kWX/bike-project2.jpg' className="w-full h-[500px] rounded-lg" />

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>  */}
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
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-[500] h-[450px] rounded-md" src={coverProject} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[500] h-[450px] rounded-md" src={coverProject1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[500] h-[450px] rounded-md" src={coverProject2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[500] h-[450px] rounded-md" src={coverProject3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[500] h-[450px] rounded-md" src={coverProject4} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[500] h-[450px] rounded-md" src={coverProject5} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[500] h-[450px] rounded-md" src={coverProject6} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AutoZone;
