"use client";
import Link from "next/link";
import CommanBanner from "@/components/dashboard/CommonBanner";
import CommanSidebar from "@/components/dashboard/CommonSideBar";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

export const AccoountOrdersTable = [
    {
        id: "#34VB5540K83",
        date: "Jan 21, 2025",
        amount: "tk 3580.75",
        status: { label: "In Queue", badgeClass: "bg-primary" },
        viewLink: "/dashboard/orders/order-detail",
        img: "/../assets/img/product/product-12.jpg"
    },
    {
        id: "#34VB5540K83",
        date: "Jan 21, 2025",
        amount: "tk 3580.75",
        status: { label: "In Queue", badgeClass: "bg-primary" },
        viewLink: "/dashboard/orders/order-detail",
        img: "/../assets/img/product/product-16.jpg"
    },
    {
        id: "#34VB5540K83",
        date: "Jan 21, 2025",
        amount: "tk 3580.75",
        status: { label: "In Queue", badgeClass: "bg-primary" },
        viewLink: "/dashboard/orders/order-detail",
        img: "/../assets/img/product/product-2.jpg"
    },
    {
        id: "#78A643CD409",
        date: "Feb 09, 2025",
        amount: "tk 7060.50",
        status: { label: "In Progress", badgeClass: "bg-info" },
        viewLink: "/dashboard/orders/order-detail",
        img: "/../assets/img/product/product-4.jpg"

    },
    {
        id: "#112P45A90V2",
        date: "Jan 15, 2025",
        amount: "tk 1,2604.00",
        status: { label: "Delayed", badgeClass: "bg-warning" },
        viewLink: "/dashboard/orders/order-detail",
        img: "/../assets/img/product/product-6.jpg"

    },
    {
        id: "#28BA67U0981",
        date: "Jan 19, 2025",
        amount: "tk 1098.35",
        status: { label: "Delivered", badgeClass: "bg-success" },
        viewLink: "/dashboard/orders/order-detail",
        img: "/../assets/img/product/product-8.jpg"

    },
    {
        id: "#502TR872W2",
        date: "Jan 04, 2025",
        amount: "tk 12,133.90",
        status: { label: "Delivered", badgeClass: "bg-success" },
        viewLink: "/dashboard/orders/order-detail",
        img: "/../assets/img/product/product-10.jpg"

    },
    {
        id: "#47H76G09F33",
        date: "Jan 30, 2025",
        amount: "tk 11286.40",
        status: { label: "Delivered", badgeClass: "bg-success" },
        viewLink: "/dashboard/orders/order-detail",
        img: "/../assets/img/product/product-12.jpg"

    },
    {
        id: "#53U76G09E38",
        date: "Jan 21, 2025",
        amount: "tk 12386.40",
        status: { label: "Delivered", badgeClass: "bg-success" },
        viewLink: "/dashboard/orders/order-detail",
        img: "/../assets/img/product/product-14.jpg"

    },
    {
        id: "#31M76G09G76",
        date: "Jan 07, 2025",
        amount: "tk 21112.40",
        status: { label: "Delivered", badgeClass: "bg-success" },
        viewLink: "/dashboard/orders/order-detail",
        img: "/../assets/img/product/product-16.jpg"

    },
];

export default function Page() {
    const [data, setData] = useState("Not Found");

    const [showModal, setShowModal] = useState(false)
    const [openBarcode, setOpenBarcode] = useState(false)

    return (
        <div className="page-content bg-light">
            <CommanBanner
                image={"assets/img/"}
                mainText="Orders"
                parentText="Home"
                currentText="Orders"
            />
            <div className="content-inner-1">
                <div className="container">
                    <div className="row">
                        <CommanSidebar />

                        <div className="col-xl-9 account-wrapper">
                            <div className="product-filter-content mb-40">
                                <div className="row align-items-center">
                                    <div className="col-sm-6">
                                        <Link
                                            onClick={() => setShowModal(true)}
                                            href="#"
                                            style={{ backgroundColor: "green", color: "white" }}
                                            className="btn m-b15 me-xl-3 me-2 btnhover20 mb-30"
                                        >
                                            Scan Barcode
                                        </Link>
                                        <form action="#">
                                            <div className="mainmenu__search-bar p-relative">
                                                <button className="mainmenu__search-icon"><i className="fal fa-search" /></button>
                                                <input type="text" placeholder="Search products..." />
                                            </div>
                                        </form>

                                    </div>
                                    <div className="col-sm-6">
                                        <div className="product-navtabs d-flex justify-content-end align-items-center">
                                            <div className="tp-shop-selector">




                                                <select

                                                    className="chosen-single form-select"

                                                >
                                                    <option value="">Sort by (default)</option>
                                                    <option value="asc">Newest</option>
                                                    <option value="des">Oldest</option>
                                                    <option value="des">In Queue</option>
                                                    <option value="des">In Progress</option>
                                                    <option value="des">Pending</option>
                                                    <option value="des">Delivered</option>
                                                    <option value="des">Cancelled</option>
                                                </select>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="account-card">
                                <div className="table-responsive table-style-1">
                                    <table className="table check-tbl table-hover mb-3">
                                        <thead>
                                            <tr>
                                                <th>Order ID #</th>
                                                <th>Product Image</th>
                                                <th>Date Purchased</th>
                                                <th>Status</th>
                                                <th>Total</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {AccoountOrdersTable.map((elem, index) => (
                                                <tr key={index}>
                                                    <td><Link href={elem.viewLink} className="fw-medium">{elem.id}</Link></td>
                                                    <td>
                                                        <Link href={elem.viewLink}>
                                                            <img src={elem.img} alt="Product" className="img-fluid ml-50 " />
                                                        </Link>
                                                    </td>
                                                    <td> <Link href={elem.viewLink} >{elem.date}</Link></td>
                                                    <td> <Link href={elem.viewLink} >{elem.amount}</Link></td>
                                                    <td> <Link href={elem.viewLink} ><span className={`badge  m-0 ${elem.status.badgeClass}`}>{elem.status.label}</span></Link></td>

                                                    <td><Link href={elem.viewLink} className="btn-link text-underline p-0">View</Link></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <nav aria-label="Table Pagination">
                                        <ul className="pagination style-1">
                                            <li className="page-item"><Link className="page-link" href={"#"}>Prev</Link></li>
                                            <li className="page-item"><Link className="page-link" href={"#"}>1</Link></li>
                                            <li className="page-item"><Link className="page-link" href={"#"}>2</Link></li>
                                            <li className="page-item"><Link className="page-link" href={"#"}>3</Link></li>
                                            <li className="page-item"><Link className="page-link" href={"#"}>Next</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Modal className="quick-view-modal" show={showModal} onHide={() => setShowModal(false)} centered>
                <button type="button" className="btn-close"
                    onClick={() => setShowModal(false)}
                >
                    <i className="icon feather icon-x" />
                </button>
                <div className="modal-body ">
                    <div style={{ border: '1px solid black', margin: '30px', padding: '30px', borderRadius: '10px' }} className="">
                        <Link
                            onClick={() => setOpenBarcode(true)}
                            href="#"
                            style={{ backgroundColor: "green", color: "white" }}
                            className="btn m-b15 me-xl-3 me-2 btnhover20 mb-30"
                        >
                            Open Scanner
                        </Link>
                        {openBarcode && <BarcodeScannerComponent
                            width={500}
                            height={500}
                            onUpdate={(err, result) => {
                                if (result) setData(result.text);
                                else setData("Not Found");
                            }}
                        />}
                        <div className="table-responsive table-style-1">
                            <table className="table check-tbl table-hover mb-3">
                                <thead>
                                    <tr>
                                        <th>Order ID #</th>
                                        <th>Product Image</th>
                                        <th>Date Purchased</th>
                                        <th>Status</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {AccoountOrdersTable.slice(0, 1)?.map((elem, index) => (
                                        <tr key={index}>
                                            <td><Link href={elem.viewLink} className="fw-medium">{elem.id}</Link></td>
                                            <td>
                                                <Link href={elem.viewLink}>
                                                    <img src={elem.img} alt="Product" className="img-fluid ml-50 " />
                                                </Link>
                                            </td>
                                            <td> <Link href={elem.viewLink} >{elem.date}</Link></td>
                                            <td> <Link href={elem.viewLink} >{elem.amount}</Link></td>
                                            <td> <Link href={elem.viewLink} ><span className={`badge  m-0 ${elem.status.badgeClass}`}>{elem.status.label}</span></Link></td>

                                            <td><Link href={elem.viewLink} className="btn-link text-underline p-0">View</Link></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <Link

                            href="#"
                            style={{ backgroundColor: "green", color: "white" }}
                            className="btn m-b15 me-xl-3 me-2 btnhover20 mb-30"
                        >
                            Proceed to Confirmation
                        </Link>
                    </div>


                </div>

            </Modal>
        </div>
    );
}
