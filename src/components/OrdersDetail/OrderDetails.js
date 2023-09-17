import React from "react";
import DetailTab from "../../sub-components/detailComponent/DetailTab";
import star from "../../images/star.svg";
import setting from "../../images/setting.svg";
import stretch from "../../images/stretch.svg";
import ChartComponent, { PriceChart } from "../../sub-components/chart/Chart";

const OrderDetail = () => {
  const OrderHeader = [
    { title: "Price(USDT)" },
    { title: "Amount" },
    { title: "Total" },
  ];
  const Header2 = [
    { title: "Pair", sorting: true },
    { title: "Price", sorting: true },
    { title: "Change", sorting: true },
  ];

  const OrderData = [
    {
      item1: { value: "61,134.11", color: "color-green" },
      item2: { value: "61,134.11", color: "color-white" },
      item3: { value: "61,134.11", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-green" },
      item2: { value: "61,134.11", color: "color-white" },
      item3: { value: "61,134.11", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-green" },
      item2: { value: "61,134.11", color: "color-white" },
      item3: { value: "61,134.11", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-green" },
      item2: { value: "61,134.11", color: "color-white" },
      item3: { value: "61,134.11", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-green" },
      item2: { value: "61,134.11", color: "color-white" },
      item3: { value: "61,134.11", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-green" },
      item2: { value: "61,134.11", color: "color-white" },
      item3: { value: "61,134.11", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-green" },
      item2: { value: "61,134.11", color: "color-white" },
      item3: { value: "61,134.11", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-green" },
      item2: { value: "61,134.11", color: "color-white" },
      item3: { value: "61,134.11", color: "color-white" },
      divider: true,
    },
    {
      item1: { value: "61,134.11", color: "color-red" },
      item2: { value: "61,134.11", color: "color-white" },
      item3: { value: "61,134.11", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-red" },
      item2: { value: "61,134.11", color: "color-white" },
      item3: { value: "61,134.11", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-red" },
      item2: { value: "61,134.11", color: "color-white" },
      item3: { value: "61,134.11", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-red" },
      item2: { value: "61,134.11", color: "color-white" },
      item3: { value: "61,134.11", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-red" },
      item2: { value: "61,134.11", color: "color-white" },
      item3: { value: "61,134.11", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-red" },
      item2: { value: "61,134.11", color: "color-white" },
      item3: { value: "61,134.11", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-red" },
      item2: { value: "61,134.11", color: "color-white" },
      item3: { value: "61,134.11", color: "color-white" },
    },
  ];
  const data2 = [
    {
      item1: {
        value: (
          <div className="d-flex align-items-center gap-2">
            <div>
              <img src={star} alt="" />
            </div>
            <div className="text color-white">
              ARPA<span className="text color-gray">/BTC</span>
            </div>
          </div>
        ),
        color: "color-green",
      },
      item2: { value: "0.0000019", color: "color-green" },
      item3: { value: "+2.87%", color: "color-green" },
    },
    {
      item1: {
        value: (
          <div className="d-flex align-items-center gap-2">
            <div>
              <img src={star} alt="" />
            </div>
            <div className="text color-white">
              ARPA<span className="text color-gray">/BTC</span>
            </div>
          </div>
        ),
        color: "color-green",
      },
      item2: { value: "0.0000019", color: "color-green" },
      item3: { value: "+2.87%", color: "color-green" },
    },
    {
      item1: {
        value: (
          <div className="d-flex align-items-center gap-2">
            <div>
              <img src={star} alt="" />
            </div>
            <div className="text color-white">
              ARPA<span className="text color-gray">/BTC</span>
            </div>
          </div>
        ),
        color: "color-green",
      },
      item2: { value: "0.0000019", color: "color-green" },
      item3: { value: "+2.87%", color: "color-green" },
    },
    {
      item1: {
        value: (
          <div className="d-flex align-items-center gap-2">
            <div>
              <img src={star} alt="" />
            </div>
            <div className="text color-white">
              ARPA<span className="text color-gray">/BTC</span>
            </div>
          </div>
        ),
        color: "color-green",
      },
      item2: { value: "0.0000019", color: "color-green" },
      item3: { value: "+2.87%", color: "color-green" },
    },
    {
      item1: {
        value: (
          <div className="d-flex align-items-center gap-2">
            <div>
              <img src={star} alt="" />
            </div>
            <div className="text color-white">
              ARPA<span className="text color-gray">/BTC</span>
            </div>
          </div>
        ),
        color: "color-green",
      },
      item2: { value: "0.0000019", color: "color-green" },
      item3: { value: "+2.87%", color: "color-green" },
    },
    {
      item1: {
        value: (
          <div className="d-flex align-items-center gap-2">
            <div>
              <img src={star} alt="" />
            </div>
            <div className="text color-white">
              ARPA<span className="text color-gray">/BTC</span>
            </div>
          </div>
        ),
        color: "color-green",
      },
      item2: { value: "0.0000019", color: "color-green" },
      item3: { value: "+2.87%", color: "color-green" },
    },
    {
      item1: {
        value: (
          <div className="d-flex align-items-center gap-2">
            <div>
              <img src={star} alt="" />
            </div>
            <div className="text color-white">
              ARPA<span className="text color-gray">/BTC</span>
            </div>
          </div>
        ),
        color: "color-green",
      },
      item2: { value: "0.0000019", color: "color-green" },
      item3: { value: "+2.87%", color: "color-green" },
    },
    {
      item1: {
        value: (
          <div className="d-flex align-items-center gap-2">
            <div>
              <img src={star} alt="" />
            </div>
            <div className="text color-white">
              ARPA<span className="text color-gray">/BTC</span>
            </div>
          </div>
        ),
        color: "color-green",
      },
      item2: { value: "0.0000019", color: "color-green" },
      item3: { value: "+2.87%", color: "color-green" },
    },
    {
      item1: {
        value: (
          <div className="d-flex align-items-center gap-2">
            <div>
              <img src={star} alt="" />
            </div>
            <div className="text color-white">
              ARPA<span className="text color-gray">/BTC</span>
            </div>
          </div>
        ),
        color: "color-green",
      },
      item2: { value: "0.0000019", color: "color-green" },
      item3: { value: "+2.87%", color: "color-green" },
    },
    {
      item1: {
        value: (
          <div className="d-flex align-items-center gap-2">
            <div>
              <img src={star} alt="" />
            </div>
            <div className="text color-white">
              ARPA<span className="text color-gray">/BTC</span>
            </div>
          </div>
        ),
        color: "color-green",
      },
      item2: { value: "0.0000019", color: "color-green" },
      item3: { value: "+2.87%", color: "color-green" },
    },
    {
      item1: {
        value: (
          <div className="d-flex align-items-center gap-2">
            <div>
              <img src={star} alt="" />
            </div>
            <div className="text color-white">
              ARPA<span className="text color-gray">/BTC</span>
            </div>
          </div>
        ),
        color: "color-green",
      },
      item2: { value: "0.0000019", color: "color-green" },
      item3: { value: "+2.87%", color: "color-green" },
    },
    {
      item1: {
        value: (
          <div className="d-flex align-items-center gap-2">
            <div>
              <img src={star} alt="" />
            </div>
            <div className="text color-white">
              ARPA<span className="text color-gray">/BTC</span>
            </div>
          </div>
        ),
        color: "color-green",
      },
      item2: { value: "0.0000019", color: "color-green" },
      item3: { value: "+2.87%", color: "color-green" },
    },
    {
      item1: {
        value: (
          <div className="d-flex align-items-center gap-2">
            <div>
              <img src={star} alt="" />
            </div>
            <div className="text color-white">
              ARPA<span className="text color-gray">/BTC</span>
            </div>
          </div>
        ),
        color: "color-green",
      },
      item2: { value: "0.0000019", color: "color-green" },
      item3: { value: "+2.87%", color: "color-green" },
    },
  ];
  return (
    <div
      className="d-flex align-items-center w-100 gap-2 w-100"
      style={{ alignItems: "stretch" }}
    >
      <DetailTab
        title="Buy/Sell Orders"
        header={OrderHeader}
        data={OrderData}
      />
      <div className=" container" style={{ flex: "1 1 auto" }}>
        <div className="d-flex flex-column w-100 gap-3 container">
          <div className="d-flex align-items-center justify-content-between w-100">
            <div className="d-flex align-items-center gap-4">
              <span className="text color-white fontW-700">Chart</span>
              <span className="text color-gray cursor-pointer">1s</span>
              <span className="text color-gray cursor-pointer">15m</span>
              <span className="text color-gray cursor-pointer">1H</span>
              <span className={`text color-gray cursor-pointer activeBtn`}>
                4H
              </span>
              <span className="text color-gray cursor-pointer">1D</span>
              <span className="text color-gray cursor-pointer">6M</span>
              <span className="text color-gray cursor-pointer">1Y</span>
              <span className="text color-gray cursor-pointer">5Y</span>
              <img className="cursor-pointer" src={setting} alt="" />
            </div>
            <div className="cursor-pointer">
              <img src={stretch} alt="" />
            </div>
          </div>
          <div style={{ height: "calc(100% - 50px)" }}>
            <PriceChart />
          </div>
        </div>
      </div>
      <DetailTab showSearchField showToolbar header={Header2} data={data2} />
    </div>
  );
};

export default OrderDetail;
