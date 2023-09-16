import React, { useState } from "react";
import styles from "./LimitSection.module.css";

const LimitSection = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`d-flex flex-column gap-3 w-50 ${styles.limitContainer}`}>
      <div className="text color-gray">
        Avbl<span className="color-white"> 0.25232634 USDT</span>
      </div>
      <div
        className={`d-flex align-items-center justify-content-between w-100 ${styles.dataField}`}
      >
        <span className="text color-gray">Price</span>
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
        <span className="text color-gray">Amount</span>
        <div className="d-flex align-items-center gap-3">
          <span className="text color-white" style={{ fontWeight: "600" }}>
            BTC
          </span>
        </div>
      </div>

      <div className={`${styles.range} `}>
        <input
          type="range"
          min="0"
          max="4"
          step="1"
          value={value}
          onChange={handleChange}
          id="range2"
          className={` ${styles.rangeInput}`}
        />
        <div className="values">
        <div className="thumb">0</div>
        <div className="thumb">20</div>
        <div className="thumb">40</div>
        <div className="thumb">60</div>
        <div className="thumb">80</div>
      </div>
      </div>
    </div>
  );
};

export default LimitSection;
