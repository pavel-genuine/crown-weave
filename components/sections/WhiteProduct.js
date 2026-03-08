'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { Rochester } from 'next/font/google'
// Configure the font instance

const rock = Rochester({ subsets: ['latin'], weight: '400' })

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 3500,
    },
    breakpoints: {
        1400: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 5,
        },
        992: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 3,
        },
        0: {
            slidesPerView: 1,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.tpproductarrow__nxt',
        prevEl: '.tpproductarrow__prv',
    },
}

export default function WhiteProduct() {
    return (
        <>
            <section className="white-product-area  pb-70 fix p-relative">
                <div className="container">
                    <div className="">
                        <div className="d-flex align-items-center justify-content-between ">
                            <button className="d-none d-lg-block" style={{
                                border: '1px solid grey', color: 'grey', borderRadius: '30px', paddingInline: '30px', paddingBlock: '10px',
                                fontSize: '1.5rem'
                            }}>Explore Trends</button>
                            <div className="tpsection mb-20 d-flex align-items-center">
                                <div >
                                    <h4 style={{ color: 'grey' }} className="tpsection__title">Explore  <br /></h4>
                                    <h4 style={{ color: '#c69e47' }} className={`${rock.className} tpsection__title`} > Top Sale Products</h4>
                                </div>
                                <svg style={{ margin: '-20px' }} width="168" height="105" viewBox="0 0 168 105" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                    <path
                                        d="M0.573459 16.1978C118.603 -46.1586 165.27 103.98 165.27 103.98M165.27 103.98L162.007 102.496M165.27 103.98L167.015 101.004"
                                        stroke="currentColor"
                                    />
                                </svg>


                            </div>
                            <p className="w-25 d-none d-lg-block" style={{ color: 'grey' }}>
                                Stylish rugs for every home, from casual to formal.
                                Explore our collection of trends that elevate your decor.
                            </p>
                        </div>

                        <div className="mt-20 mb-30">
                            <div className="tpproductarrow d-flex align-items-center">
                                <div className="tpproductarrow__prv"><i className="far fa-long-arrow-left" /></div>
                                <div className="tpproductarrow__nxt"><i className="far fa-long-arrow-right" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-container product-active">
                        <Swiper {...swiperOptions}>
                            <SwiperSlide>
                                <div className="whiteproduct">
                                    <div className="whiteproduct__thumb">
                                        <Link href="#"><img src="/assets/img/product/product-13.jpg" alt="product-thumb" /></Link>
                                    </div>
                                    <div className="whiteproduct__content d-flex justify-content-between align-items-center">
                                        <div className="whiteproduct__text">
                                            <h5 className="whiteproduct__title"><Link href="/-details-2">CLCo. Incredible Paper Car</Link></h5>
                                            <span> ৳9000.00</span>
                                        </div>
                                        <div className="whiteproduct__rating">
                                            <i className="fas fa-star" />
                                            <span>(81)</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="whiteproduct">
                                    <div className="whiteproduct__thumb">
                                        <Link href="/"><img src="/assets/img/product/product-3.jpg" alt="product-thumb" /></Link>
                                    </div>
                                    <div className="whiteproduct__content d-flex justify-content-between align-items-center">
                                        <div className="whiteproduct__text">
                                            <h5 className="whiteproduct__title"><Link href="#">Progash Durable Granite Hat</Link></h5>
                                            <span> ৳7000.00</span>
                                        </div>
                                        <div className="whiteproduct__rating">
                                            <i className="fas fa-star" />
                                            <span>(81)</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="whiteproduct">
                                    <div className="whiteproduct__thumb">
                                        <Link href="/"><img src="/assets/img/product/product-5.jpg" alt="product-thumb" /></Link>
                                    </div>
                                    <div className="whiteproduct__content d-flex justify-content-between align-items-center">
                                        <div className="whiteproduct__text">
                                            <h5 className="whiteproduct__title"><Link href="/">Miklonda Co. Crafted Candles</Link></h5>
                                            <span> ৳7000.00</span>
                                        </div>
                                        <div className="whiteproduct__rating">
                                            <i className="fas fa-star" />
                                            <span>(81)</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="whiteproduct">
                                    <div className="whiteproduct__thumb">
                                        <Link href="/"><img src="/assets/img/product/product-7.jpg" alt="product-thumb" /></Link>
                                    </div>
                                    <div className="whiteproduct__content d-flex justify-content-between align-items-center">
                                        <div className="whiteproduct__text">
                                            <h5 className="whiteproduct__title"><Link href="/">Weddonix Mediocre Silk Hat</Link></h5>
                                            <span> ৳7000.00</span>
                                        </div>
                                        <div className="whiteproduct__rating">
                                            <i className="fas fa-star" />
                                            <span>(81)</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="whiteproduct">
                                    <div className="whiteproduct__thumb">
                                        <Link href="/"><img src="/assets/img/product/product-9.jpg" alt="product-thumb" /></Link>
                                    </div>
                                    <div className="whiteproduct__content d-flex justify-content-between align-items-center">
                                        <div className="whiteproduct__text">
                                            <h5 className="whiteproduct__title"><Link href="/">Gorgeous Wooden Gloves</Link></h5>
                                            <span> ৳7000.00</span>
                                        </div>
                                        <div className="whiteproduct__rating">
                                            <i className="fas fa-star" />
                                            <span>(81)</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="whiteproduct">
                                    <div className="whiteproduct__thumb">
                                        <Link href="/"><img src="/assets/img/product/product-1.jpg" alt="product-thumb" /></Link>
                                    </div>
                                    <div className="whiteproduct__content d-flex justify-content-between align-items-center">
                                        <div className="whiteproduct__text">
                                            <h5 className="whiteproduct__title"><Link href="/">CLCo. Incredible Paper Car</Link></h5>
                                            <span> ৳7000.00</span>
                                        </div>
                                        <div className="whiteproduct__rating">
                                            <i className="fas fa-star" />
                                            <span>(81)</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="whiteproduct">
                                    <div className="whiteproduct__thumb">
                                        <Link href="/"><img src="/assets/img/product/product-11.jpg" alt="product-thumb" /></Link>
                                    </div>
                                    <div className="whiteproduct__content d-flex justify-content-between align-items-center">
                                        <div className="whiteproduct__text">
                                            <h5 className="whiteproduct__title"><Link href="/">Progash Durable Granite Hat</Link></h5>
                                            <span> ৳9000.00</span>
                                        </div>
                                        <div className="whiteproduct__rating">
                                            <i className="fas fa-star" />
                                            <span>(81)</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

            </section>
        </>
    )
}
