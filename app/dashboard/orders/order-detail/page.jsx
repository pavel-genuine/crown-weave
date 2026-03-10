"use client";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import CommanBanner from "@/components/dashboard/CommonBanner";
import CommanSidebar from "@/components/dashboard/CommonSideBar";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

export const AccoountOrdersTable = [
  {
    id: "#34VB5540K83",
    date: "Jan 21, 2026",
    amount: "tk 3580.75",
    status: { label: "In Queue", badgeClass: "bg-primary" },
    viewLink: "/dashboard/orders/order-detail",
    img: "/../assets/img/product/product-12.jpg",
  },
  {
    id: "#34VB5540K83",
    date: "Jan 21, 2026",
    amount: "tk 3580.75",
    status: { label: "In Queue", badgeClass: "bg-primary" },
    viewLink: "/dashboard/orders/order-detail",
    img: "/../assets/img/product/product-16.jpg",
  },
  {
    id: "#34VB5540K83",
    date: "Jan 21, 2026",
    amount: "tk 3580.75",
    status: { label: "In Queue", badgeClass: "bg-primary" },
    viewLink: "/dashboard/orders/order-detail",
    img: "/../assets/img/product/product-2.jpg",
  },
  {
    id: "#78A643CD409",
    date: "Feb 09, 2026",
    amount: "tk 7060.50",
    status: { label: "In Progress", badgeClass: "bg-info" },
    viewLink: "/dashboard/orders/order-detail",
    img: "/../assets/img/product/product-4.jpg",
  },
  {
    id: "#112P45A90V2",
    date: "Jan 15, 2026",
    amount: "tk 1,2604.00",
    status: { label: "Delayed", badgeClass: "bg-warning" },
    viewLink: "/dashboard/orders/order-detail",
    img: "/../assets/img/product/product-6.jpg",
  },
  {
    id: "#28BA67U0981",
    date: "Jan 19, 2026",
    amount: "tk 1098.35",
    status: { label: "Delivered", badgeClass: "bg-success" },
    viewLink: "/dashboard/orders/order-detail",
    img: "/../assets/img/product/product-8.jpg",
  },
  {
    id: "#502TR872W2",
    date: "Jan 04, 2026",
    amount: "tk 12,133.90",
    status: { label: "Delivered", badgeClass: "bg-success" },
    viewLink: "/dashboard/orders/order-detail",
    img: "/../assets/img/product/product-10.jpg",
  },
  {
    id: "#47H76G09F33",
    date: "Jan 30, 2026",
    amount: "tk 11286.40",
    status: { label: "Delivered", badgeClass: "bg-success" },
    viewLink: "/dashboard/orders/order-detail",
    img: "/../assets/img/product/product-12.jpg",
  },
  {
    id: "#53U76G09E38",
    date: "Jan 21, 2026",
    amount: "tk 12386.40",
    status: { label: "Delivered", badgeClass: "bg-success" },
    viewLink: "/dashboard/orders/order-detail",
    img: "/../assets/img/product/product-14.jpg",
  },
  {
    id: "#31M76G09G76",
    date: "Jan 07, 2026",
    amount: "tk 21112.40",
    status: { label: "Delivered", badgeClass: "bg-success" },
    viewLink: "/dashboard/orders/order-detail",
    img: "/../assets/img/product/product-16.jpg",
  },
];

export default function Page() {
  const [data, setData] = useState("Not Found");

  const [showModal, setShowModal] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [openBarcode, setOpenBarcode] = useState(false);
  const [inProgress, setInProgress] = useState(false);

  return (
    <div className="page-content bg-light">
      <CommanBanner
        image={"assets/img/"}
        mainText="Order Details & Data Flow"
        parentText="Home"
        currentText="Order Details & Data Flow"
      />

      <div className="content-inner-1">
        <div className="container">
          <div className="row">
            <CommanSidebar />

            <section className="col-xl-9 account-wrapper">
              <Link
                href="/dashboard/orders"
                style={{ color: "white" }}
                className="btn m-b15 me-xl-3 me-2 btnhover20 mb-30 bg-black"
              >
                {"<< "} All Orders
              </Link>
              <div className="account-card order-details">
                <div className="order-head">
                  <div className="head-thumb">
                    <img
                      src={"/../assets/img/product/product-2.jpg"}
                      alt="small_pic1"
                    />
                  </div>
                  <div className="clearfix m-l20">
                    {inProgress ? (
                      <div className="badge badge-info">In Progress</div>
                    ) : (
                      <div className="badge">In Queue</div>
                    )}
                    <h4 className="mb-0">Order #17493</h4>
                  </div>
                </div>
                <div className="row mb-sm-4 mb-2">
                  <div className="col-sm-6">
                    <div className="shiping-tracker-detail">
                      <span>Item</span>
                      <h6 className="title">Carpet-1</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="shiping-tracker-detail">
                      <span>Courier</span>
                      <h6 className="title">Pathao</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="shiping-tracker-detail">
                      <span>Start Time</span>
                      <h6 className="title">05 Jan 2026, 15:43:23</h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="shiping-tracker-detail">
                      <span>Address</span>
                      <h6 className="title">Uttara,Dhaka</h6>
                    </div>
                  </div>
                </div>
                <div className="content-btn m-b15">
                  <Link
                    href="#"
                    className="btn btn-secondary me-xl-3 me-2 m-b15 btnhover20"
                  >
                    Download
                  </Link>
                  <Link
                    href="#"
                    onClick={() => setShowModal(true)}
                    style={{ backgroundColor: "green", color: "white" }}
                    className="btn m-b15 me-xl-3 me-2 btnhover20"
                  >
                    Scan Barcode / Proceed to Confirmation
                  </Link>
                  <button
                    // disabled
                    href="#"
                    style={{ cursor: "not-allowed" }}
                    className="btn border  m-b15 btnhover20"
                  >
                    Cancel Order
                  </button>
                </div>
                <div className="clearfix">
                  <Tab.Container defaultActiveKey={"history"}>
                    <div className="dz-tabs style-3">
                      <Nav className="nav nav-tabs" id="nav-tab" role="tablist">
                        <Nav.Link className="nav-link" eventKey={"history"}>
                          Order Data Flow (Extended)
                        </Nav.Link>
                        <Nav.Link
                          className="nav-link"
                          eventKey={"flow-simplied"}
                        >
                          Order Data Flow (Simplified)
                        </Nav.Link>
                        <Nav.Link className="nav-link" eventKey={"notes"}>
                          Notes
                        </Nav.Link>
                        <Nav.Link className="nav-link" eventKey={"details"}>
                          Item Details
                        </Nav.Link>
                        <Nav.Link className="nav-link" eventKey={"Courier"}>
                          Courier
                        </Nav.Link>
                        <Nav.Link className="nav-link" eventKey={"receiver"}>
                          Receiver
                        </Nav.Link>
                      </Nav>
                    </div>
                    <Tab.Content className="tab-content" id="nav-tabContent">
                      <Tab.Pane eventKey={"history"}>
                        <div className="widget-timeline style-1">
                          <ul className="timeline">
                            <li>
                              <div className="timeline-badge success"></div>
                              <div className="timeline-box">
                                <Link href={"#"} className="timeline-panel">
                                  <h6 className="mb-0">E-commerce Order</h6>
                                  <span>08/03/2026 5:23pm</span>
                                </Link>
                                <p>
                                  <strong>Tracking Number : </strong>
                                  3409-4216-8759
                                </p>
                                <p>
                                  <strong>Representative Cell : </strong>
                                  +880******
                                </p>
                                <p>
                                  <strong>Estimated Delivery Date : </strong>
                                  09/04/2026
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="timeline-badge success"></div>
                              <div className="timeline-box">
                                <Link href={"#"} className="timeline-panel">
                                  <h6 className="mb-0">
                                    Order Management System (OMS)
                                  </h6>
                                  <span>08/04/2026 5:23pm</span>
                                </Link>
                                <p>
                                  <strong>Tracking Number : </strong>
                                  3409-4216-8759
                                </p>

                                <p>
                                  <strong>Representative Cell : </strong>
                                  +880******
                                </p>
                                <p>
                                  <strong>Estimated Delivery Date : </strong>
                                  09/04/2026
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="timeline-badge primary"></div>
                              <div className="timeline-box">
                                <Link href={"#"} className="timeline-panel">
                                  <h6 className="mb-0">Warehouse Picking</h6>
                                  <span>09/03/2026 5:23pm</span>
                                </Link>
                                <p>
                                  <strong>Tracking Number : </strong>
                                  3409-4216-8759
                                </p>
                                <p>
                                  <strong>Warehouse : </strong>Central Warehouse
                                </p>
                                <p>
                                  <strong>Representative Cell : </strong>
                                  +880******
                                </p>
                                <p>
                                  <strong>Estimated Delivery Date : </strong>
                                  09/04/2026
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="timeline-badge "></div>
                              <div className="timeline-box">
                                <Link href={"#"} className="timeline-panel">
                                  <h6 className="mb-0">Product Packaging</h6>
                                  <span>10/03/2026 5:23pm</span>
                                </Link>
                                <p>
                                  <strong>Tracking Number : </strong>
                                  3409-4216-8759
                                </p>
                                <p>
                                  <strong>Representative Cell : </strong>
                                  +880******
                                </p>
                                <p>
                                  <strong>Estimated Delivery Date : </strong>
                                  09/04/2026
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="timeline-badge "></div>
                              <div className="timeline-box">
                                <Link href={"#"} className="timeline-panel">
                                  <h6 className="mb-0">
                                    Shipping Label + Tracking
                                  </h6>
                                  <span>11/03/2026 5:23pm</span>
                                </Link>
                                <p>
                                  <strong>Tracking Number : </strong>
                                  3409-4216-8759
                                </p>
                                <p>
                                  <strong>Representative Cell : </strong>
                                  +880******
                                </p>
                                <p>
                                  <strong>Estimated Delivery Date : </strong>
                                  09/04/2026
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="timeline-badge "></div>
                              <div className="timeline-box">
                                <Link href={"#"} className="timeline-panel">
                                  <h6 className="mb-0">Courier Pickup</h6>
                                  <span>12/03/2026 5:23pm</span>
                                </Link>
                                <p>
                                  <strong>Tracking Number : </strong>
                                  3409-4216-8759
                                </p>
                                <p>
                                  <strong>Courier : </strong>
                                  Pathao
                                </p>
                                <p>
                                  <strong>Representative Cell : </strong>
                                  +880******
                                </p>
                                <p>
                                  <strong>Estimated Delivery Date : </strong>
                                  09/04/2026
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="timeline-badge "></div>
                              <div className="timeline-box">
                                <Link href={"#"} className="timeline-panel">
                                  <h6 className="mb-0">National Sorting Hub</h6>
                                  <span>12/03/2026 5:23pm</span>
                                </Link>
                                <p>
                                  <strong>Tracking Number : </strong>
                                  3409-4216-8759
                                </p>
                                <p>
                                  <strong>Hub : </strong>Jatrabari
                                </p>
                                <p>
                                  <strong>Representative Cell : </strong>
                                  +880******
                                </p>
                                <p>
                                  <strong>Estimated Delivery Date : </strong>
                                  09/04/2026
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="timeline-badge "></div>
                              <div className="timeline-box">
                                <Link href={"#"} className="timeline-panel">
                                  <h6 className="mb-0">Regional Hub</h6>
                                  <span>12/03/2026 5:23pm</span>
                                </Link>
                                <p>
                                  <strong>Tracking Number : </strong>
                                  3409-4216-8759
                                </p>
                                <p>
                                  <strong>Hub : </strong>Uttara
                                </p>
                                <p>
                                  <strong>Representative Cell : </strong>
                                  +880******
                                </p>
                                <p>
                                  <strong>Estimated Delivery Date : </strong>
                                  09/04/2026
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="timeline-badge "></div>
                              <div className="timeline-box">
                                <Link href={"#"} className="timeline-panel">
                                  <h6 className="mb-0">
                                    Local Delivery Station
                                  </h6>
                                  <span>13/04/2026 5:23pm</span>
                                </Link>
                                <p>
                                  <strong>Station : Housebuilding </strong>
                                  3409-4216-8759
                                </p>
                                <p>
                                  <strong>Representative Cell : </strong>
                                  +880******
                                </p>
                                <p>
                                  <strong>Estimated Delivery Date : </strong>
                                  09/04/2026
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="timeline-badge "></div>
                              <div className="timeline-box">
                                <Link href={"#"} className="timeline-panel">
                                  <h6 className="mb-0">Last Mile Delivery</h6>
                                  <span>14/03/2026 5:23pm</span>
                                </Link>
                                <p>
                                  <strong>Tracking Number : </strong>
                                  3409-4216-8759
                                </p>
                                <p>
                                  <strong>Representative Cell : </strong>
                                  +880******
                                </p>
                                <p>
                                  <strong>Estimated Delivery Date : </strong>
                                  09/04/2026
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="timeline-badge "></div>
                              <div className="timeline-box">
                                <Link href={"#"} className="timeline-panel">
                                  <h6 className="mb-0">
                                    Customer Door / Pickup Point
                                  </h6>
                                  <span>15/03/2026 5:23pm</span>
                                </Link>
                                <p>
                                  <strong>Tracking Number : </strong>
                                  3409-4216-8759
                                </p>
                                <p>
                                  <strong>Representative Cell : </strong>
                                  +880******
                                </p>
                                <p>
                                  <strong>Estimated Delivery Date : </strong>
                                  09/04/2026
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="timeline-badge "></div>
                              <div className="timeline-box">
                                <Link href={"#"} className="timeline-panel">
                                  <h6 className="mb-0">
                                    Delivery Confirmation
                                  </h6>
                                  <span>15/03/2026 5:23pm</span>
                                </Link>
                                <p>
                                  <strong>Tracking Number : </strong>
                                  3409-4216-8759
                                </p>
                                <p>
                                  <strong>Representative Cell : </strong>
                                  +880******
                                </p>
                                <p>
                                  <strong>Estimated Delivery Date : </strong>
                                  09/04/2026
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="timeline-badge "></div>
                              <div className="timeline-box">
                                <Link href={"#"} className="timeline-panel">
                                  <h6 className="mb-0">
                                    Returns & Reverse Logistics
                                  </h6>
                                  <span>15/03/2025 5:23pm</span>
                                </Link>
                                <p>
                                  <strong>Tracking Number : </strong>
                                  3409-4216-8759
                                </p>
                                {/* <p>
                                  <strong>Warehouse : </strong>Central Warehouse
                                </p> */}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey={"flow-simplied"}>
                        <div className="widget-timeline style-1">
                          <ul className="timeline">
                            <li>
                              <div className="timeline-badge success"></div>
                              <div className="timeline-box">
                                <Link href="#" className="timeline-panel">
                                  <h6 className="mb-0">Order Placed</h6>
                                  <span>08/04/2025 5:23pm</span>
                                </Link>
                                <p>
                                  <strong>Order ID :</strong> #ORD-10245
                                </p>
                                <p>
                                  <strong>Payment :</strong> Cash on Delivery
                                </p>
                              </div>
                            </li>

                            <li>
                              <div className="timeline-badge success"></div>
                              <div className="timeline-box">
                                <Link href="#" className="timeline-panel">
                                  <h6 className="mb-0">
                                    Warehouse Processing & Packing
                                  </h6>
                                  <span>08/04/2025 6:00pm</span>
                                </Link>
                                <p>
                                  <strong>Warehouse :</strong> Central Warehouse
                                </p>
                                <p>
                                  <strong>Status :</strong> Preparing order
                                </p>
                                <p>
                                  <strong>Representative Cell : </strong>
                                  +880******
                                </p>
                                <p>
                                  <strong>Estimated Delivery Date : </strong>
                                  09/04/2026
                                </p>
                              </div>
                            </li>

                            <li>
                              <div className="timeline-badge primary"></div>
                              <div className="timeline-box">
                                <Link href="#" className="timeline-panel">
                                  <h6 className="mb-0">Shipped</h6>
                                  <span>08/04/2025 9:00pm</span>
                                </Link>
                                <p>
                                  <strong>Courier :</strong> Pathao
                                </p>
                                <p>
                                  <strong>Tracking :</strong> 3409-4216-8759
                                </p>
                                <p>
                                  <strong>Representative Cell : </strong>
                                  +880******
                                </p>
                                <p>
                                  <strong>Estimated Delivery Date : </strong>
                                  09/04/2026
                                </p>
                              </div>
                            </li>

                            <li>
                              <div className="timeline-badge warning"></div>
                              <div className="timeline-box">
                                <Link href="#" className="timeline-panel">
                                  <h6 className="mb-0">Out for Delivery</h6>
                                  <span>09/04/2025 9:30am</span>
                                </Link>
                                <p>
                                  <strong>Delivery Hub :</strong> Dhaka Hub
                                </p>
                                <p>
                                  <strong>Courier :</strong> Pathao
                                </p>
                                <p>
                                  <strong>Representative Cell : </strong>
                                  +880******
                                </p>
                                <p>
                                  <strong>Estimated Delivery Date : </strong>
                                  09/04/2026
                                </p>
                              </div>
                            </li>

                            <li>
                              <div className="timeline-badge "></div>
                              <div className="timeline-box">
                                <Link href="#" className="timeline-panel">
                                  <h6 className="mb-0">Delivered</h6>
                                  <span>09/04/2025 2:15pm</span>
                                </Link>
                                <p>
                                  <strong>Receiver :</strong> Customer
                                </p>
                                <p>
                                  <strong>Status :</strong> Delivery Completed
                                </p>
                                <p>
                                  <strong>Representative Cell : </strong>
                                  +880******
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey={"notes"}>
                        <h5>Notes and uploads</h5>
                      </Tab.Pane>
                      <Tab.Pane eventKey={"details"}>
                        <h5>Item Details</h5>
                        <div className="tracking-item">
                          <div className="tracking-product">
                            <img
                              src={"/../assets/img/product/product-2.jpg"}
                              alt="smil"
                            />
                          </div>
                          <div className="tracking-product-content">
                            <h6 className="title"> Carpet-1</h6>
                            <small className="d-block">
                              <strong>Price</strong> : tk 9500
                            </small>
                            <small className="d-block">
                              <strong>Product ID</strong> : #1234
                            </small>
                            <small className="d-block">
                              <strong>Category</strong> : Modern
                            </small>
                            <small className="d-block">
                              <strong>Color</strong> : Red
                            </small>
                            <small className="d-block">
                              <strong>Size</strong> : Medium (9ft*12ft)
                            </small>
                          </div>
                        </div>
                        <div className="tracking-item-content">
                          <span>Total Price</span>
                          <h6> tk 9500</h6>
                        </div>
                        <div className="tracking-item-content border-bottom border-light mb-2">
                          <span className="text-success">Total Discounts</span>
                          <h6>00</h6>
                        </div>
                        <div className="tracking-item-content">
                          <span>Order Total</span>
                          <h6>tk 9500</h6>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey={"Courier"}>
                        <p>
                          <ul className="tracking-receiver">
                            <li>
                              Courier Name: <strong>Pathao</strong>
                            </li>
                            <li>
                              Delivery Man Name: <strong>#17493</strong>
                            </li>
                            <li>
                              Phone: <strong>#17493</strong>
                            </li>

                            <li>
                              Order Number : <strong>#17493</strong>
                            </li>
                            <li>
                              Date : <strong>1/7/2026, 02:34pm</strong>
                            </li>
                            <li>
                              Total : <strong>tk 9500</strong>
                            </li>
                            <li>
                              Payment Methods :{" "}
                              <strong>Cash on Delivery</strong>
                            </li>
                          </ul>
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey={"receiver"}>
                        <ul className="tracking-receiver">
                          <li>
                            Name: <strong>#17493</strong>
                          </li>
                          <li>
                            Phone: <strong>#17493</strong>
                          </li>
                          <li>
                            Address: <strong>#17493</strong>
                          </li>
                          <li>
                            Order Number : <strong>#17493</strong>
                          </li>
                          <li>
                            Date : <strong>1/7/2026, 02:34pm</strong>
                          </li>
                          <li>
                            Total : <strong>tk 9500</strong>
                          </li>
                          <li>
                            Payment Methods : <strong>Cash on Delivery</strong>
                          </li>
                        </ul>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Modal
        className="quick-view-modal"
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
      >
        <button
          type="button"
          className="btn-close"
          onClick={() => {
            setShowModal(false);
          }}
        >
          <i className="icon feather icon-x" />
        </button>
        <div className="modal-body ">
          <div
            style={{
              border: "1px solid black",
              margin: "30px",
              padding: "30px",
              borderRadius: "10px",
            }}
            className=""
          >
            <Link
              onClick={() => {
                setOpenBarcode(true);
                setTimeout(() => setShowProduct(true), 3000);
              }}
              href="#"
              style={{ backgroundColor: "green", color: "white" }}
              className="btn m-b15 me-xl-3 me-2 btnhover20 mb-30"
            >
              Open Scanner
            </Link>
            {openBarcode && (
              <BarcodeScannerComponent
                width={500}
                height={500}
                onUpdate={(err, result) => {
                  if (result) setData(result.text);
                  else setData("Not Found");
                }}
              />
            )}
            {openBarcode && !showProduct ? (
              <p className="mt-3 mb-3"> Loading Product...</p>
            ) : (
              showProduct && (
                <p className="mt-3 mb-3 text-white bg-success p-2">
                  {" "}
                  Product Matched ✔✔
                </p>
              )
            )}
            {
              <div className="table-responsive table-style-1 mt-3 mb-3">
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
                    {AccoountOrdersTable.slice(2, 3)?.map((elem, index) => (
                      <tr key={index}>
                        <td>
                          <Link href={elem.viewLink} className="fw-medium">
                            {elem.id}
                          </Link>
                        </td>
                        <td>
                          <Link href={elem.viewLink}>
                            <img
                              src={elem.img}
                              alt="Product"
                              className="img-fluid ml-50 "
                            />
                          </Link>
                        </td>
                        <td style={{ cursor: "default" }}> {elem.date}</td>
                        <td> {elem.amount}</td>
                        <td>
                          <td>
                            <Link href={elem.viewLink}>
                              {inProgress ? (
                                <span className={`badge  m-0 bg-info`}>
                                  in progress
                                </span>
                              ) : (
                                <span
                                  className={`badge  m-0 ${elem.status.badgeClass}`}
                                >
                                  {elem.status.label}
                                </span>
                              )}
                            </Link>
                          </td>
                        </td>

                        <td>
                          <Link
                            onClick={() => setShowModal(false)}
                            href={elem.viewLink}
                            className="btn-link text-underline p-0"
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            }

            {inProgress ? (
              <p className="mb-2 text-info"> Order In Progress</p>
            ) : (
              <Link
                onClick={() => setTimeout(setInProgress(true), 1500)}
                href="#"
                style={{ backgroundColor: "green", color: "white" }}
                className="btn m-b15 me-xl-3 me-2 btnhover20 mb-30"
              >
                Proceed to Confirmation
              </Link>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
