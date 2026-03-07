
import Link from "next/link"

export default function Exclusive() {
    return (
        <>
            <section className="exclusive-area pb-65">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <div className="exclusiveitem banner-animation p-relative mb-30">
                                <div className="exclusiveitem__thumb">
                                    <img style={{ width: '950px', height: '600px', borderRadius: '5px' }} src="/assets/img/banner/banner-offer-01.jpg" alt="" />
                                </div>
                                <div className="tpexclusive__content">
                                    <h4 className="tpexclusive__subtitle">Dive Into</h4>
                                    <h3 className="tpexclusive__title mb-30">Designers <br /> Decks Exclusively</h3>
                                    <div className="tpexclusive__btn">
                                        <Link style={{ backgroundColor: '#c69e47', border: '1px solid #c69e47' }} href="/" className="tp-btn banner-animation">Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="exclusivearea banner-animation p-relative mb-30">
                                <div className="exclusivearea__thumb">
                                    <img style={{ width: '450px', height: '600px', borderRadius: '5px' }} src="/assets/img/banner/banner-offer-02.jpg" alt="" />
                                </div>
                                <div className="tpexclusive__contentarea text-center mt-0">
                                    {/* <h4 className="tpexclusive__subtitle subcolor">Discount</h4> */}
                                    <h3 className="tpexclusive__title ">Feel the elegence</h3>
                                    {/* <p>New Modern Stylist Fashionable <br /> rugs</p> */}
                                    <div className="tpexclusive__btn">
                                        <Link style={{ backgroundColor: '#c69e47', border: '1px solid #c69e47' }} href="/" className="tp-btn banner-animation">Shop Now</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
