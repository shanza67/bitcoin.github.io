import React from "react";
import styles from "./Detail.module.css";

// import { NavLink } from "react-router-dom";

import kebab from "../../images/kebabMenue.svg";
import asc from "../../images/asc.svg";
import desc from "../../images/desc.svg";
import search from "../../images/search1.svg";
import star from "../../images/star.svg";
import jumperBtn from "../../images/jumpRight.svg";

const DetailTab = ({ title, header, data, showSearchField, showToolbar , width}) => {

  return (
    <div
      className="container d-flex flex-column gap-3 "
      style={{ minWidth: width? width : '35%' }}
    >
      {title && (
        <div className="d-flex align-items-center justify-content-between w-100">
          <span className="text" style={{ fontWeight: "700" }}>
            {title}
          </span>
          <img src={kebab} alt="" className="cursor-pointer" />
        </div>
      )}

      {showSearchField && (
        <div className="w-100" style={{ position: "relative" }}>
          <img src={search} alt="" className={`${styles.searchIcon}`} />
          <input
            type="search"
            className={`w-100 text color-gray ${styles.searchField}`}
          />
        </div>
      )}
      {/* ====Toolbar ====== */}
      {showToolbar && (
        <div className="d-flex align-items-center justify-content-between w-100">
          <div>
            <img src={star} alt="" />
          </div>
          <div className="text color-gray cursor-pointer">USDT</div>
          <div className="text color-gray cursor-pointer">FDUSD</div>
          <div className="text color-gray cursor-pointer">TUSD</div>
          <div className="text color-gray cursor-pointer">BUSD</div>
          <div className="text color-active cursor-pointer">BTC</div>
          <div className="cursor-pointer">
            <img src={jumperBtn} alt="" />
          </div>
        </div>
      )}

      <div
        className="d-flex align-items-center w-100"
        style={{ marginBottom: "10px" }}
      >
        {header?.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`d-flex align-items-center gap-1 ${
                idx > 0 && "justify-content-end"
              }`}
              style={{ width: "33.33%" }}
            >
              <span className="text color-gray">{item.title}</span>
              {item.sorting && (
                <div className="d-flex flex-column gap-1">
                  <img src={asc} alt="" className="cursor-pointer" />
                  <img src={desc} alt="" className="cursor-pointer" />
                </div>
              )}
            </div>
          );
        })}
      </div>
      {data?.map((data, idx) => {
        return (
          <div
            key={idx}
            className="d-flex align-items-center w-100"
            style={{
              borderBottom: data?.divider && "1px solid #353B50",
              paddingBottom: data?.divider && "16px",
            }}
          >
            <span
              className={`text ${data?.item1.color}`}
              style={{ width: "33.33%" }}
            >
              {data.item1.value}{" "}
            </span>
            <span
              className={`text ${data?.item2.color} text-end`}
              style={{ width: "33.33%" }}
            >
              {data.item2.value}{" "}
            </span>
            <span
              className={`text ${data?.item3.color} text-end`}
              style={{ width: "33.33%" }}
            >
              {data.item3.value}{" "}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default DetailTab;
