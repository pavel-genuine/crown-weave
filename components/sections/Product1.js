'use client'
import { useState } from "react"
import FilterShopBox2 from "../shop/FilterShopBox2"
import { Rochester } from 'next/font/google'
// Configure the font instance

const rock = Rochester({ subsets: ['latin'], weight: '400' })

export default function Product1() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <section className="product-area pt-95 pb-70">
                <div className="container">
                    <div className="ro">
                        <div className="">
                            <div className="d-flex align-items-center justify-content-between ">
                                <button className="d-none d-lg-block" style={{
                                    border: '1px solid grey', color: 'grey', borderRadius: '30px', paddingInline: '30px', paddingBlock: '10px',
                                    fontSize: '1.5rem'
                                }}>Explore Trends</button>
                                <div className="tpsection mb-20 d-flex align-items-center">
                                    <div >
                                        <h4 style={{ color: 'grey' }} className="tpsection__title">Explore  <br /></h4>
                                        <h4 style={{ color: '#c69e47' }} className={`${rock.className} tpsection__title`} > Products</h4>
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




                        </div>
                        <div className="row mb-20 mt-10">

                            <div className="col-md-6 col-12"></div>
                            <div className="col-md-6 col-12">




                                <div className="tpnavbar">
                                    <nav>
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <button className={activeIndex == 1 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(1)}>All</button>
                                            <button className={activeIndex == 2 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(2)}>Popular</button>
                                            <button className={activeIndex == 3 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(3)}>On Sale</button>
                                            <button className={activeIndex == 4 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(4)}>Best Rated</button>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content" id="nav-tabContent">
                        <div className={activeIndex == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">
                            <div className="row row-cols-xxl-4 row-cols-xl-4 row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1">
                                <FilterShopBox2 itemStart={0} itemEnd={8} />
                            </div>
                        </div>
                        <div className={activeIndex == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="nav-popular" role="tabpanel" aria-labelledby="nav-popular-tab">
                            <div className="row row-cols-xxl-4 row-cols-xl-4 row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1">
                                <FilterShopBox2 itemStart={4} itemEnd={8} />
                            </div>
                        </div>
                        <div className={activeIndex == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="nav-sale" role="tabpanel" aria-labelledby="nav-sale-tab">
                            <div className="row row-cols-xxl-4 row-cols-xl-4 row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1">
                                <FilterShopBox2 itemStart={1} itemEnd={6} />
                            </div>
                        </div>
                        <div className={activeIndex == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="nav-rate" role="tabpanel" aria-labelledby="nav-rate-tab">
                            <div className="row row-cols-xxl-4 row-cols-xl-4 row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1">
                                <FilterShopBox2 itemStart={4} itemEnd={8} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
