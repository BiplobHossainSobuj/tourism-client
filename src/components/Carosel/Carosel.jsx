import { Swiper, SwiperSlide } from 'swiper/react';
import { Typewriter } from 'react-simple-typewriter'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import Swiper styles
import 'swiper/css';
import '../../App.css'
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';

const Carosel = () => {
    return (
        <div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ type: 'progressbar' }}
                autoplay={{ delay: 5500, disableOnInteraction: false }}
            >
                <SwiperSlide>
                <div className="hero min-h-[650px]" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/sand-desert-landscape-template_1284-37172.jpg?t=st=1714442079~exp=1714445679~hmac=29c240952f6b819773b96d60a15bbdb36766480b5fe6ed0f271bb7628046f821&w=1060' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl">
                                <h1 className="mb-5 text-5xl font-bold">Let's Explore Middle East
                                </h1>
                                <p className="mb-5">{''}
                                    <span style={{ color: 'yellow', fontWeight: 'bold' }}>
                                            {/* Style will be inherited from the parent element */}
                                            <Typewriter
                                                words={['The Middle East, a region of diverse cultures and landscapes, encompasses ancient history, modern complexities, and vibrant traditions.']}
                                                loop={Infinity}
                                                cursor
                                                cursorStyle='_'
                                                typeSpeed={30}
                                                delaySpeed={1000}
                                            />
                                    </span>
                                </p>
                                <button className="btn btn-primary">Visit Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-[650px]" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/desert-landscape-background-video-conferencing_23-2148652924.jpg?t=st=1714451252~exp=1714454852~hmac=973a6e8aa0f697fd2ee816b6547f766614129f9c1d97c50737f79401d0026853&w=1380' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl">
                                <h1 className="mb-5 text-5xl font-bold">Let's Explore {''}
                                    <span style={{ color: 'yellow', fontWeight: 'bold' }}>
                                        {/* Style will be inherited from the parent element */}
                                        <Typewriter
                                            words={['Jordan', 'UAE','Iran','Kuwait', 'Saudi Arabia', 'Qatar!']}
                                            loop={Infinity}
                                            cursor
                                            cursorStyle='.'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                            
                                        />
                                    </span>
                                </h1>
                                <p className="mb-5">The Middle East, a region of diverse cultures and landscapes, encompasses ancient history, modern complexities, and vibrant traditions. Spanning from the Mediterranean Sea to the Arabian Peninsula, it is a crossroads of civilizations, blending influences from Europe, Asia, and Africa. Rich in natural resources like oil and gas, it plays a pivotal role in global economics. </p>
                                <button className="btn btn-primary">Visit Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero min-h-[650px]" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/travel-concept-with-worldwide-landmarks_23-2149153263.jpg?t=st=1714451119~exp=1714454719~hmac=8eba410df4ec68d031e8c935c41b51f4fff9d0805e48226c636ad0c18c7f3472&w=1060' }}>
                        <div className="hero-overlay bg-opacity-80"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl">
                                <h1 className="mb-5 text-5xl font-bold">Life is Enjoyable {''}
                                    <span style={{ color: 'yellow', fontWeight: 'bold' }}>
                                        {/* Style will be inherited from the parent element */}
                                        <Typewriter
                                            words={['Eat', 'Code','Travel','Sleep','Reapet!']}
                                            loop={5}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                            
                                        />
                                    </span>
                                </h1>
                                <p className="mb-5">The world is a book, and those who do not travel read only one page.</p>
                                <button className="btn btn-outline btn-primary">Visit Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carosel;