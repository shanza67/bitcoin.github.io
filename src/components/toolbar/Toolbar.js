import React, { useState } from "react";
import styles from "./Toolbar.module.css";

import bitcoin from "../../images/bitCoin.svg";
import down from "../../images/vectorDown.svg";
import play from "../../images/mdi_play.svg";

const Toolbar = () => {
  return (
    <div className={`d-flex align-items-center justify-content-between w-100`}>
      <div className="d-flex align-items-center gap-5">
        <div className="d-flex align-items-start gap-2">
          <img src={bitcoin} alt="" />
          <div className="d-flex flex-column gap-2">
            <div className={`d-flex align-items-center cursor-pointer gap-2`}>
              <span className={`text`} style={{ fontWeight: "600" }}>
                BTC/USDT{" "}
              </span>
              <img src={down} alt="" />
            </div>
            <div className="text color-gray">BitCoin</div>
          </div>
        </div>

        <div className="d-flex flex-column gap-2">
          <span
            className="text color-green"
            style={{ fontWeight: "700", lineHeight: "26.95px" }}
          >
            61,134.11
          </span>
          <span className="text color-gray">$61,134.11</span>
        </div>
        <div className="d-flex flex-column gap-2">
          <span className="text color-gray">24h Change</span>
          <span
            className="text color-green"
            style={{ fontWeight: "700", lineHeight: "26.95px" }}
          >
            +2%
          </span>
        </div>
        <div className="d-flex flex-column gap-2">
          <span className="text color-gray">24h High</span>
          <span
            className="text "
            style={{ fontWeight: "700", lineHeight: "26.95px" }}
          >
            62,155.66
          </span>
        </div>
        <div className="d-flex flex-column gap-2">
          <span className="text color-gray">24h Low</span>
          <span
            className="text "
            style={{ fontWeight: "700", lineHeight: "26.95px" }}
          >
            62,245.66
          </span>
        </div>
        <div className="d-flex flex-column gap-2">
          <span className="text color-gray">24h Volume(BTC)</span>
          <span
            className="text "
            style={{ fontWeight: "700", lineHeight: "26.95px" }}
          >
            16,9654.25
          </span>
        </div>
        <div className="d-flex flex-column gap-2">
          <span className="text color-gray">25h Volume(USDT)</span>
          <span
            className="text "
            style={{ fontWeight: "700", lineHeight: "26.95px" }}
          >
            521,514,343.51
          </span>
        </div>
      </div>
      <div className="d-flex align-items-center gap-2">
        <div
          style={{
            border: "1px solid #767A89",
            borderRadius: "50px",
            padding: "5px",
            width: "33.62px",
            height: "33.62px",
            paddingTop: "3px",
            cursor: "pointer",
          }}
        >
          <img src={play} alt="" />
        </div>
        <div className="text color-gray">Video Tutorials</div>
      </div>
    </div>
  );
};

export default Toolbar;
