import { Swiper, SwiperSlide } from 'swiper/react';
import { Typewriter } from 'react-simple-typewriter'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React from 'react'
import ReactPlayer from 'react-player'
import 'swiper/css/effect-coverflow';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
const Blogs = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Pagination, EffectCoverflow, Autoplay]}
            spaceBetween={50}
            slidesPerView={2}
            pagination={{ type: 'bullets' }}
            className="mySwiper"
            effect={'coverflow'}
            grabCursor={true}
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            centeredSlides={true}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                
            }}
        >
            <SwiperSlide>
                <div className="hero min-h-[450px]" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/vertical-shot-people-riding-camels-sand-dune-desert_181624-34974.jpg?t=st=1714472579~exp=1714476179~hmac=efdc8ea13cb76539308d50ef542558aa18197c4b8e5f5ae00a0e964c5e316231&w=826' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-xl">
                            <h3 className='text-4xl font-bold'>Trip To Dubai</h3>
                            <p className="mb-5">The Dubai, a region of diverse cultures and landscapes, encompasses ancient history, modern complexities, and vibrant traditions. Spanning from the Mediterranean Sea to the Arabian Peninsula, it is a crossroads of civilizations, blending influences from Europe, Asia, and Africa. Rich in natural resources like oil and gas, it plays a pivotal role in global economics. </p>
                            <button className="btn btn-primary">Comment</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <h3 className="text-center text-2xl font-bold">{''}
                        <span style={{ color: 'skyblue', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Dubai at a glance']}
                                loop={Infinity}
                                cursor
                                cursorStyle='_'
                                typeSpeed={30}
                                delaySpeed={1000}
                            />
                        </span>
                    </h3>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <ReactPlayer width={550} controls url='https://www.youtube.com/watch?v=ahy5o5nT4oI' />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="hero min-h-[450px]" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/composition-passport-tickets-toy-airplane-sketch-board-fruits-hat_23-2148169861.jpg?t=st=1714472880~exp=1714476480~hmac=36deb1accd6098f2c6011de0d27dab22deda9bb49a901a11b43cfaa61e9cb711&w=1380' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-xl">
                            <h3 className='text-4xl font-bold'>Plan Your Holidays</h3>
                            <p className="mb-5">your adventure in the United Arab Emirates, where the futuristic skyline of Dubai contrasts with the traditional charm of Abu Dhabi. Experience opulent shopping malls, exhilarating desert safaris, and world-class entertainment, including the iconic Burj Khalifa and the cultural hub of Sheikh Zayed Grand Mosque. </p>
                            <button className="btn btn-primary">Share</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Blogs;