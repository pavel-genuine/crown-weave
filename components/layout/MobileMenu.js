'use client'
import Link from 'next/link'
import { useState } from 'react'
export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div style={{ backgroundColor: 'red' }} className="mobile-menu mean-container">
                <div className="mean-bar">
                    <Link href="#" className="meanmenu-reveal">
                        <span><span><span /></span></span>
                    </Link>
                    <nav className="mean-nav">
                        <ul>
                            <li className="has-drodown">
                                <Link href="/">Home</Link>
                                <ul className="submenu">
                                    {/* <li><Link href="/">Home 1</Link></li> */}
                                    {/* <li><Link href="/index-2">Fashion Home</Link></li>
                                                        <li><Link href="/index-3">Furniture Home</Link></li> */}
                                    {/* <li><Link href="/index-4">Home 2</Link></li> */}
                                    {/* <li><Link href="/index-5">Food Grocery</Link></li> */}
                                </ul>
                            </li>
                            <li className="has-dropdown">
                                <Link href="/">Categories</Link>
                                <ul className="submenu">
                                    <li><Link href="/">Machine Made</Link></li>
                                    <li><Link href="/">Needle Punch</Link></li>
                                    <li><Link href="/">Wall To Wall</Link></li>
                                </ul>
                            </li>
                            <li className="has-dropdo">
                                <Link href="/">Shop</Link>
                                {/* <ul className="submenu">
                                                        <li><Link href="/">Shop</Link></li>
                                                        <li><Link href="/-2">Shop 2</Link></li>
                                                        <li><Link href="/-details">Shop Details </Link></li>
                                                        <li><Link href="/-details-2">Shop Details 2</Link></li>
                                                        <li><Link href="/-location">Shop Location</Link></li>
                                                        <li><Link href="/cart">Cart</Link></li>
                                                        <li><Link href="/sign-in">Sign In</Link></li>
                                                        <li><Link href="/checkout">Checkout</Link></li>
                                                        <li><Link href="/wishlist">Wishlist</Link></li>
                                                        <li><Link href="/track">Product Track</Link></li>
                                                    </ul> */}
                            </li>
                            {/* <li className="has-dropdown has-megamenu">
                                                    <Link href="/about">Pages</Link>
                                                    <ul className="submenu mega-menu">
                                                        <li>
                                                            <a className="mega-menu-title">Page layout</a>
                                                            <ul>
                                                                <li><Link href="/">Shop filters v1</Link></li>
                                                                <li><Link href="/-2">Shop filters v2</Link></li>
                                                                <li><Link href="/-details">Shop sidebar</Link></li>
                                                                <li><Link href="/-details-2">Shop Right sidebar</Link></li>
                                                                <li><Link href="/-location">Shop List view</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="mega-menu-title">Page layout</a>
                                                            <ul>
                                                                <li><Link href="/about">About</Link></li>
                                                                <li><Link href="/cart">Cart</Link></li>
                                                                <li><Link href="/checkout">Checkout</Link></li>
                                                                <li><Link href="/sign-in">Sign In</Link></li>
                                                                <li><Link href="/sign-in">Log In</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="mega-menu-title">Page type</a>
                                                            <ul>
                                                                <li><Link href="/track">Product Track</Link></li>
                                                                <li><Link href="/wishlist">Wishlist</Link></li>
                                                                <li><Link href="/not-found">404 / Error</Link></li>
                                                                <li><Link href="/coming-soon">Coming Soon</Link></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li> */}
                            <li className="has-dropdown">
                                <Link href="/">About Us</Link>
                                <ul className="submenu">
                                    <li><Link href="/">About Us</Link></li>
                                    <li><Link href="/">Our Offerings</Link></li>
                                    <li><Link href="/">Our Crown Weave Works</Link></li>
                                    <li><Link href="/">Sustainability</Link></li>
                                    <li><Link href="/">Explore</Link></li>
                                    <li><Link href="/">NewsRoom</Link></li>
                                    <li><Link href="/">Investor Relations</Link></li>
                                    <li><Link href="/">Blogs</Link></li>
                                    <li><Link href="/">Career</Link></li>
                                    <li><Link href="/">Contact</Link></li>
                                </ul>
                            </li>
                            {/* <li><Link href="/">Contact</Link></li> */}
                        </ul>
                    </nav></div></div>

        </>
    )
}
