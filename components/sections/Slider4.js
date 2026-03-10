'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 3500,
    },

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.tpsliderthree__pagination',
        clickable: true,
    },

}


export default function Slider4() {
    return (
        <>
            <section style={{ backgroundImage: "url('assets/img/bg-pattern.png')" }} className="slider-area  pb-70">
                <div className="container">
                    <div className="platinamborder p-relative">
                        <div className="platinam-slidershape d-none d-md-block">
                            {/* <img src="assets/img/slider/fasion-tag-03.png" alt="tag" /> */}
                        </div>
                        <div className="swiper-container sliderthree-active">
                            <Swiper {...swiperOptions}>
                                <SwiperSlide style={{ backgroundImage: "url('assets/img/slider/1.png')" }} className="  slider-bg-four">
                                    <div className="row align-items-center">
                                        <div className="">
                                            <div className="tpslidertwo__item slider-item-4 ml-50 text-center">
                                                <div className="tpslidertwo__content">
                                                    <h3 className="tpslidertwo__title mb-10">Will Never <br /> Compromise Quality</h3>
                                                    <p style={{ color: '#c69e47', paddingInline: '10px' }}>New Modern Stylish Fashionable Rugs & Carpets</p>
                                                    <div className="tpslidertwo__slide-btn d-flex justify-content-center">
                                                        <Link className="tp-btn banner-animation tpslider-btn-4 mr-25" href="/">Shop Now <i className="fal fa-long-arrow-right" />
                                                        </Link>
                                                        <span style={{ color: '#c69e47' }}>Start From <br /> <b>৳ 3000</b></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tpsliderthree__pagination" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ backgroundImage: "url('assets/img/slider/3.png')" }} className="  slider-bg-four">
                                    <div className="row align-items-center">
                                        <div className="">
                                            <div className="tpslidertwo__item slidre-item-4 ml-50 text-center">
                                                <div className="tpslidertwo__content">
                                                    <h3 className="tpslidertwo__title mb-10">Will Never <br /> Compromise Comfort</h3>
                                                    <p style={{ color: '#c69e47', paddingInline: '10px' }}>New Modern Stylish Fashionable Rugs & Carpets</p>
                                                    <div className="tpslidertwo__slide-btn d-flex justify-content-center">
                                                        <Link className="tp-btn banner-animation tpslider-btn-4 mr-25" href="/">Shop Now <i className="fal fa-long-arrow-right" />
                                                        </Link>
                                                        <span style={{ color: '#c69e47' }}>Start From <br /> <b>৳ 3000</b></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tpsliderthree__pagination" />
                                    </div>
                                </SwiperSlide>



                                <SwiperSlide style={{ backgroundImage: "url('assets/img/slider/2.png')" }} className="  slider-bg-four">
                                    <div className="row align-items-center">
                                        <div className="">
                                            <div className="tpslidertwo__item slidre-item-4 ml-50 text-center">
                                                <div className="tpslidertwo__content">
                                                    <h3 className="tpslidertwo__title mb-10">Will Never <br /> Compromise Beauty</h3>
                                                    <p style={{ color: '#c69e47', paddingInline: '10px' }}>New Modern Stylish Fashionable Rugs & Carpets</p>
                                                    <div className="tpslidertwo__slide-btn d-flex justify-content-center">
                                                        <Link className="tp-btn banner-animation tpslider-btn-4 mr-25" href="/">Shop Now <i className="fal fa-long-arrow-right" />
                                                        </Link>
                                                        <span style={{ color: '#c69e47' }} >Start From <br /> <b>৳ 3000</b></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tpsliderthree__pagination" />
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
