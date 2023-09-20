import React, { useState } from "react";
import styles from "./LimitSection.module.css";

const LimitSection = ({ forBuy, forsell, text , width }) => {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`d-flex flex-column gap-3 w-50 ${width} ${styles.limitContainer}`}>
      <div className="text color-gray">
        Avbl<span className="color-white"> 0.25232634 USDT</span>
      </div>
      <div
        className={`d-flex align-items-center justify-content-between w-100 ${styles.dataField}`}
      >
        {/* <span className="text color-gray">Price</span> */}
        <input type="text" placeholder="Price" className="text color-gray" style={{height:"64px" ,maxWidth:"70px" , background:"unset" , border:"none" , outline:"none"}} />
        <div className="d-flex align-items-center gap-3">
          <span className="text color-white" style={{ fontWeight: "600" }}>
            25252.1
          </span>
          <span className="text color-white" style={{ fontWeight: "600" }}>
            USDT
          </span>
        </div>
      </div>
      <div
        className={`d-flex align-items-center justify-content-between w-100 ${styles.dataField}`}
      >
        {/* <span className="text color-gray">Amount</span> */}
        <input type="text" placeholder="Amount" className="text color-gray" style={{height:"64px" ,maxWidth:"70px" , background:"unset" , border:"none" , outline:"none"}} />
        <div className="d-flex align-items-center gap-3">
          <span className="text color-white" style={{ fontWeight: "600" }}>
            BTC
          </span>
        </div>
      </div>

      <div className={`w-100`}>
        <input
          type="range"
          min="0"
          max="4"
          step="1"
          value={value}
          onChange={handleChange}
          className={` ${styles.rangeInput}`}
        />
      </div>

      <div
        className={`d-flex align-items-center justify-content-between w-100 ${styles.dataField}`}
      >
        {/* <span className="text color-gray">Total</span> */}
        <input type="text" placeholder="Total" className="text color-gray" style={{height:"64px" ,maxWidth:"70px" , background:"unset" , border:"none" , outline:"none"}} />
        <div className="d-flex align-items-center gap-3">
          <span className="text color-white" style={{ fontWeight: "600" }}>
            USDT
          </span>
        </div>
      </div>
      <div className="w-100">
        <span className="text color-gray">Fee</span>
        <button
          className={`d-flex align-items-center justify-content-center btn-style text color-white w-100`}
          style={{
            fontWeight: "600",
            background: forBuy ? "#5BDF8B" : forsell && "#F34554",
            marginTop: "10px",
            borderRadius: "15px",
          }}
        >
          {text}
        </button>
      </div>
    </div>
  );
};

export default LimitSection;
