
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Countdown from "../elements/CountDown"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 0,
    centeredSlides: true,
    speed: 30000,
    slidesPerView: 1,
    autoplay: {
        delay: 1,
    },
    freeMode: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
    // disableOnInteraction: true,
}


export default function DealProduct3() {
    const currentTime = new Date()
    return (
        <>
            <section style={{
                backgroundImage: "url('assets/img/bg-pattern.png')", backgroundSize: 'cover', // Optional: 'cover' ensures the image covers the entire area
                backgroundRepeat: 'no-repeat', // Set to 'no-repeat' to stop the image from tiling
            }} className="  p-relative fix">
                <div className="container-fluid g-0">
                    <div className="mp-marque-slider">
                        <div className="swiper-container swiper--top">
                            <Swiper {...swiperOptions}>
                                <SwiperSlide>
                                    <p>Great Deal Of The Day <span><Link href="/">Start Now</Link></span></p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <p>Great Deal Of The Day <span><Link href="/">Start Now</Link></span></p>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="platinamdell pt-140">
                        <div className="row">
                            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-12">
                                <div className="tpdealcontact tp-red-deal-text pt-30 mb-30">
                                    <div className="tpdealcontact__price mb-5">
                                        <span> Win Win Deal </span>
                                        <del> Competition</del>
                                    </div>
                                    <div className="tpdealcontact__text mb-30">
                                        <h4 className="tpdealcontact__title mb-10"><Link href="/-details">Open A Trade Account
                                        </Link></h4>
                                        <p> When you join our trade program, you become part of our family.

                                            <br />
                                            <br />
                                            Elegant  design three-dimensional view and decoration co-exist.
                                            Great for adding a decorative touch to any room’s decor.</p>
                                    </div>
                                    <div className="tpdealcontact__progress mb-30">
                                        <div className="progress">
                                            <div className="progress-bar w-75" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                    <div className="tpdealcontact__count">
                                        <div className="tpdealcontact__countdown">
                                            <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                        </div>
                                        <i>Remains until the <br /> end of the offer</i>
                                    </div>

                                </div>
                                <Link className="tp-btn banner-animation tpslider-btn-4 mr-25" href="/">Start Now <i className="fal fa-long-arrow-right" />
                                </Link>
                            </div>


                            <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-12">
                                <div className="tpdealproduct mb-30">
                                    <div className="">



                                        <video style={{ objectFit: 'cover', borderRadius: '10px', marginTop: '20px' }} autoPlay
                                            muted
                                            loop
                                            playsInline
                                            width="750" height="600" >
                                            <source src="assets/img/video1.mp4" type="video/mp4" />

                                        </video></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
