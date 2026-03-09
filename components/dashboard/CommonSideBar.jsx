import Link from "next/link";

const accountMenu = [
  { title: "Dashboard", url: "/account-dashboard" },
  { title: "Orders", url: "/dashboard/orders" },
  { title: "Downloads", url: "/account-downloads" },
  { title: "Return request", url: "/account-return-request" },
];

const accountSettingsMenu = [
  { title: "Profile", url: "/account-profile" },
  { title: "Address", url: "/account-address" },
  { title: "Shipping methods", url: "/account-shipping-methods" },
  { title: "Payment Methods", url: "/account-payment-methods" },
  { title: "Review", url: "/account-review" },
];

export default function CommanSidebar() {
  return (
    <aside className="col-xl-3">
      <div className="toggle-info">
        <h5 className="title mb-0">Account Navbar</h5>
        <a className="toggle-btn" href="#accountSidebar">
          Account Menu
        </a>
      </div>
      <div className="sticky-top account-sidebar-wrapper">
        <div className="account-sidebar" id="accountSidebar">
          <div className="profile-head">
            <div className="user-thumb">
              <img
                className="rounded-circle"
                src={"../../assets/img/testimonial/testi-avata-01.png"}
                alt="Susan Gardner"
              />
            </div>
            <h5 className="title mb-0">Mrs Xyz</h5>
            <span className="text text-primary">info@example.com</span>
          </div>
          <div className="account-nav">
            <div className="nav-title bg-light">DASHBOARD</div>
            <ul>
              {accountMenu.map((elem, index) => (
                <li key={index}>
                  {elem?.title == "Orders" ? (
                    <Link href="/dashboard/orders" style={{ color: "red" }}>
                      All Orders
                    </Link>
                  ) : (
                    <Link href={elem.url}>{elem.title}</Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="nav-title bg-light">ACCOUNT SETTINGS</div>
            <ul className="account-info-list">
              {accountSettingsMenu.map((elem, ind) => (
                <li key={ind}>
                  <Link href={elem.url}>{elem.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
