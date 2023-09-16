import React, { useState } from "react";
import DetailTab from "../../sub-components/detailComponent/DetailTab";
import LimitSection from "../../sub-components/limitSection/LimitSection";

const TradeDetail = () => {
  const [activeTab, setActiveTab] = useState("spot");
  const TradeHeader = [
    { title: "Price(USDT)" },
    { title: "Amount(BTC)" },
    { title: "Time" },
  ];
  const data = [
    {
      item1: { value: "61,134.11", color: "color-green" },
      item2: { value: "0.53515", color: "color-white" },
      item3: { value: "16:42:15", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-green" },
      item2: { value: "0.53515", color: "color-white" },
      item3: { value: "16:42:15", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-green" },
      item2: { value: "0.53515", color: "color-white" },
      item3: { value: "16:42:15", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-green" },
      item2: { value: "0.53515", color: "color-white" },
      item3: { value: "16:42:15", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-green" },
      item2: { value: "0.53515", color: "color-white" },
      item3: { value: "16:42:15", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-green" },
      item2: { value: "0.53515", color: "color-white" },
      item3: { value: "16:42:15", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-green" },
      item2: { value: "0.53515", color: "color-white" },
      item3: { value: "16:42:15", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-green" },
      item2: { value: "0.53515", color: "color-white" },
      item3: { value: "16:42:15", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-green" },
      item2: { value: "0.53515", color: "color-white" },
      item3: { value: "16:42:15", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-green" },
      item2: { value: "0.53515", color: "color-white" },
      item3: { value: "16:42:15", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-green" },
      item2: { value: "0.53515", color: "color-white" },
      item3: { value: "16:42:15", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-green" },
      item2: { value: "0.53515", color: "color-white" },
      item3: { value: "16:42:15", color: "color-white" },
    },
  ];
  return (
    <div
      className="d-flex align-items-center w-100 gap-2 w-100"
      style={{ alignItems: "stretch" }}
    >
      <div
        className="container d-flex flex-column gap-3"
        style={{ flex: "1 1 auto" }}
      >
        <div
          className="d-flex align-items-center gap-3"
          style={{ borderBottom: "1px solid #353B50", paddingBottom: "22px" }}
        >
          <button
            className={`d-flex align-items-center gap-2 btn-style text`}
            style={{
              background: activeTab === "spot" ? "#6C62E2" : "#1E2A44",
              height: "52px",
            }}
            onClick={() => setActiveTab("spot")}
          >
            Spot
          </button>
          <button
            className={`d-flex align-items-center gap-2 btn-style text`}
            style={{
              background: activeTab === "cross" ? "#6C62E2" : "#1E2A44",
              height: "52px",
            }}
            onClick={() => setActiveTab("cross")}
          >
            Cross 5x
          </button>
          <button
            className={`d-flex align-items-center gap-2 btn-style text`}
            style={{
              background: activeTab === "isolated" ? "#6C62E2" : "#1E2A44",
              height: "52px",
            }}
            onClick={() => setActiveTab("isolated")}
          >
            Isolated
          </button>
          <button
            className={`d-flex align-items-center gap-2 btn-style text`}
            style={{
              background: activeTab === "grid" ? "#6C62E2" : "#1E2A44",
              height: "52px",
            }}
            onClick={() => setActiveTab("grid")}
          >
            Grid
          </button>
        </div>
        <div
          className="d-flex align-items-center gap-4"
          style={{ marginTop: "15px" }}
        >
          <div
            className="text color-active  cursor-pointer"
            style={{ fontWeight: "600" }}
          >
            Limit
          </div>
          <div
            className="text color-white cursor-pointer"
            style={{ fontWeight: "600" }}
          >
            Market
          </div>
          <div
            className="text color-white  cursor-pointer"
            style={{ fontWeight: "600" }}
          >
            Stop-limit
          </div>
        </div>
        <div className="d-flex w-100 gap-3">
          <LimitSection forBuy text="Buy BTC" />
          <LimitSection forsell text="Sell BTC" />
        </div>
      </div>
      <DetailTab
        title={
          <div className="d-flex align-items-center gap-4">
            <span className="text color-active" style={{ fontWeight: "600" }}>Market Trades</span>
            <span className="text color-white" style={{ fontWeight: "600" }}>My Trades</span>
          </div>
        }
        header={TradeHeader}
        data={data}
      />
    </div>
  );
};

export default TradeDetail;
