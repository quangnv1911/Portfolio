import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function ProjectSlider({ project }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
if(project == null){
    return <></>;
}
  return (
    <div className='h-full'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {
          project.image.map((image, index) =>{
            return <SwiperSlide>
            <img className='h-[200px]' src= {image} alt='my project'/>
          </SwiperSlide>
          })
        }
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
       {
          project.image.map((image, index) =>{
            return <SwiperSlide>
            <img className='h-[75px]' src= {image} alt='my project'/>
          </SwiperSlide>
          })
        }
      </Swiper>
    </div>
  );
}
