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

            >
                <SwiperSlide>
                    <div className='flex justify-between items-center'>
                        {/* autoplay={{ delay: 7500, disableOnInteraction: false }} */}
                        <div className='w-1/2 text-3xl'>
                            <h3>We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures we can have if only we seek them with our eyes open</h3>
                        </div>
                        <div>
                            <img src="https://img.freepik.com/free-photo/travel-concept-with-baggage_23-2149153260.jpg?t=st=1714402455~exp=1714406055~hmac=6413e1c526d5d7c3e75099efca79a4aed2e1ed64687462d0c6c9628f28cb1aa9&w=1060" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-[650px]" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/travel-concept-with-baggage_23-2149153260.jpg?t=st=1714402455~exp=1714406055~hmac=6413e1c526d5d7c3e75099efca79a4aed2e1ed64687462d0c6c9628f28cb1aa9&w=1060)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl">
                                <h1 className="mb-5 text-5xl font-bold">Let's Explore {''}
                                    <span style={{ color: 'yellow', fontWeight: 'bold' }}>
                                        {/* Style will be inherited from the parent element */}
                                        <Typewriter
                                            words={['Jordan', 'UAE','Iran','Kuwait', 'Saudi Arabia', 'Qatar!']}
                                            loop={6}
                                            cursor
                                            cursorStyle='.'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                            
                                        />
                                    </span>
                                </h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Visit Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card  bg-base-100 shadow-xl image-full">
                        <figure><img className='w-full h-[500px]' src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card  bg-base-100 shadow-xl image-full">
                        <figure><img className='w-full' src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carosel;