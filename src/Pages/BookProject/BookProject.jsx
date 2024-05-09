// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
const BookProject = () => {
  return (
    // <div>
    //     <h1 className="text-3xl text-green-500 font-semibold text-center mb-10">Book Wave Tech</h1>
    //     <p className="font-medium text-lg ml-5 mb-4">Here some screen shot of my project:</p>
    //     <div className="carousel w-full ml-10 h-[600px]">
    //         <div id="slide1" className="carousel-item relative w-full ">
    //             <img src='https://i.ibb.co/17Bryyb/book-project2.jpg' className="w-full h-[500px] rounded-lg" />

    //             <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
    //                 <a href="#slide4" className="btn btn-circle">❮</a>
    //                 <a href="#slide2" className="btn btn-circle">❯</a>
    //             </div>
    //         </div>
    //         <div id="slide2" className="carousel-item relative w-full ">
    //             <img src='https://i.ibb.co/r4gNc5H/book-project4.jpg' className="w-full h-[500px] rounded-lg" />
    //             <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
    //                 <a href="#slide1" className="btn btn-circle">❮</a>
    //                 <a href="#slide3" className="btn btn-circle">❯</a>
    //             </div>
    //         </div>
    //         <div id="slide3" className="carousel-item relative w-full ">
    //             <img src='https://i.ibb.co/mNBK9SQ/book-project3.jpg' className="w-full h-[500px] rounded-lg" />

    //             <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
    //                 <a href="#slide2" className="btn btn-circle">❮</a>
    //                 <a href="#slide4" className="btn btn-circle">❯</a>
    //             </div>
    //         </div>
    //         <div id="slide4" className="carousel-item relative w-full ">
    //             <img src='https://i.ibb.co/NLrsbP6/book-project5.jpg' className="w-full h-[500px] rounded-lg" />

    //             <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
    //                 <a href="#slide3" className="btn btn-circle">❮</a>
    //                 <a href="#slide1" className="btn btn-circle">❯</a>
    //             </div>
    //         </div>

    //     </div>
    // </div>
    <div className="ml-10 mt-5">
      <h1 className="text-3xl text-purple-500 font-semibold text-center mb-5">
        Book Wave Tech
      </h1>
      <p className="font-medium text-lg text-white mb-4">
        Here some screen shot of my project:
      </p>

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
          <img
            className="w-[500] h-[450px] rounded-md"
            src="https://i.ibb.co/17Bryyb/book-project2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[500] h-[450px] rounded-md"
            src="https://i.ibb.co/r4gNc5H/book-project4.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[500] h-[450px] rounded-md"
            src="https://i.ibb.co/mNBK9SQ/book-project3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[500] h-[450px] rounded-md"
            src="https://i.ibb.co/NLrsbP6/book-project5.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[500] h-[450px] rounded-md"
            src="https://i.ibb.co/r4gNc5H/book-project4.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[500] h-[450px] rounded-md"
            src="https://i.ibb.co/mNBK9SQ/book-project3.jpg "
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BookProject;
