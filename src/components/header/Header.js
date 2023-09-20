import React, { useState } from "react";
import styles from "./Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useWindowSize } from "react-use";
// import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import down from "../../images/vectorDown.svg";
import deposit from "../../images/deposit.svg";
import bell from "../../images/bell.svg";
import profile from "../../images/profile.svg";
import CustomeSelector from "../../sub-components/selector/Selector";

const Header = () => {
  const [notifications, setNotifications] = useState(23);
  const { width } = useWindowSize();

  const navItems = [
    { navItem: "Buy Crypto", selector: false, to: "" },
    { navItem: "Market", selector: false, to: "" },
    { navItem: "Trade", selector: true, to: "" },
    { navItem: "Exchange", selector: false, to: "" },
    { navItem: "Future", selector: true, to: "" },
    { navItem: "More", selector: true, to: "" },
  ];
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };


  return (
    <header
      className={`d-flex align-items-center justify-content-between gap-2 w-100 ${styles.header}`}
    >
      <div className={`d-flex align-items-center`} style={{ gap: "60px" }}>
        <div className="d-flex align-items-center gap-2">
          <img src={logo} alt="" />

          <span
            className={`text`}
            style={{
              fontWeight: "700",
              fontSize: "28.86px",
              lineHeight: "34.93px",
            }}
          >
            Cube
          </span>
        </div>
        {width > 1460 && (
          <div className={`d-flex align-items-center gap-3`}>
            {navItems?.map((item, idx) => {
              return (
                !item.selector ?  
                <div
                  key={idx}
                  className={`d-flex align-items-center cursor-pointer gap-2`}
                  style={{ position: "relative" }}
                >
                  <span className={`text`}>{item?.navItem} </span>
                 
                </div> :
                (<CustomeSelector title={item?.navItem}/>)
              );
            })}
          </div>
        )}
      </div>
      {width > 1460 && (
        <div className={`d-flex align-items-center gap-3`}>
          <button className={`d-flex align-items-center gap-2 btn-style text`}>
            <img src={deposit} alt="" />
            Deposit
          </button>
          <button
            className={`d-flex align-items-center gap-2 btn-style text`}
            style={{ background: "transparent", border: "1px solid #767A89" }}
          >
            Wallet
          </button>
          <CustomeSelector title={"Assets"}/>
          {/* <div className={`d-flex align-items-center cursor-pointer gap-2`}>
            <span className={`text`}>Assets </span>
            <img src={down} alt="" />
          </div> */}
          <CustomeSelector title={"Trades"}/>
          <div className="cursor-pointer" style={{ position: "relative" }}>
            <img src={bell} alt="" />
            {notifications && (
              <span className={` ${styles.notificationBadge}`}>
                {notifications}{" "}
              </span>
            )}
          </div>
          <div
            style={{ width: "57px", height: "57px" }}
            className="cursor-pointer"
          >
            <img src={profile} alt="" />
          </div>
        </div>
      )}

      {width < 1460 && (
        <div className="menu-icon cursor-pointer" onClick={handleShowNavbar}>
          <AiOutlineMenu size={56} />
        </div>
      )}

      {showNavbar && (
        <div className="mobile-navbar">
          <div className={`d-flex flex-column  gap-3`}>
            {navItems?.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={`d-flex align-items-center cursor-pointer gap-2`}
                >
                  <span className={`text`}>{item?.navItem} </span>
                  {item.selector && <img src={down} alt="" />}
                </div>
              );
            })}
          </div>
          <div className={`d-flex flex-column gap-3`}>
            <div className={`d-flex align-items-center cursor-pointer gap-2`}>
              <span className={`text`}>Assets </span>
              <img src={down} alt="" />
            </div>
            <div className={`d-flex align-items-center cursor-pointer gap-2`}>
              <span className={`text`}>Trades </span>
              <img src={down} alt="" />
            </div>
            <button
              className={`d-flex align-items-center gap-2 btn-style text`}
              style={{ width: "fit-content" }}
            >
              <img src={deposit} alt="" />
              Deposit
            </button>
            <button
              className={`d-flex align-items-center gap-2 btn-style text`}
              style={{
                background: "transparent",
                border: "1px solid #767A89",
                width: "fit-content",
              }}
            >
              Wallet
            </button>

            {/* <div className="cursor-pointer" style={{ position: "relative" }}>
            <img src={bell} alt="" />
            {notifications && (
              <span className={` ${styles.notificationBadge}`}>
                {notifications}{" "}
              </span>
            )}
          </div> */}
            {/* <div
            style={{ width: "57px", height: "57px" }}
            className="cursor-pointer"
          >
            <img src={profile} alt="" />
          </div> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
