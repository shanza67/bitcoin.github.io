import React , {useState} from "react";
import DetailTab from "../../sub-components/detailComponent/DetailTab";
import star from "../../images/star.svg";
import setting from "../../images/setting.svg";
import stretch from "../../images/stretch.svg";
import ChartComponent, { PriceChart } from "../../sub-components/chart/Chart";
import { useWindowSize } from "react-use";

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
      item2: { value: "0.53515", color: "color-white" },
      item3: { value: "174.8447", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-green" },
      item2: { value: "0.74741", color: "color-white" },
      item3: { value: "10.8447", color: "color-white" },
    },
   
    {
      item1: { value: "61,134.11", color: "color-green" },
      item2: { value: "0.64741", color: "color-white" },
      item3: { value: "2.8447", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-green" },
      item2: { value: "0.64741", color: "color-white" },
      item3: { value: "2.8447", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-green" },
      item2: { value: "0.64741", color: "color-white" },
      item3: { value: "2.8447", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-green" },
      item2: { value: "0.64741", color: "color-white" },
      item3: { value: "2.8447", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-green" },
      item2: { value: "0.64741", color: "color-white" },
      item3: { value: "2.8447", color: "color-white" },
    },
    {
      item1: { value: "61,134.11", color: "color-green" },
      item2: { value: "0.64741", color: "color-white" },
      item3: { value: "2.8447", color: "color-white" },
      divider: true,
    },
   
   
    {
      item1: { value: "61,134.11", color: "color-red" },
      item2: { value: "0.53515", color: "color-white" },
      item3: { value: "174.8447", color: "color-white" },
    },
    
    {
      item1: { value: "61,134.11", color: "color-red" },
      item2: { value: "0.53515", color: "color-white" },
      item3: { value: "174.8447", color: "color-white" },
    },
    
    {
      item1: { value: "61,134.11", color: "color-red" },
      item2: { value: "0.53515", color: "color-white" },
      item3: { value: "174.8447", color: "color-white" },
    },
    
    {
      item1: { value: "61,134.11", color: "color-red" },
      item2: { value: "0.53515", color: "color-white" },
      item3: { value: "174.8447", color: "color-white" },
    },
    
    {
      item1: { value: "61,134.11", color: "color-red" },
      item2: { value: "0.53515", color: "color-white" },
      item3: { value: "174.8447", color: "color-white" },
    },
    
    {
      item1: { value: "61,134.11", color: "color-red" },
      item2: { value: "0.53515", color: "color-white" },
      item3: { value: "174.8447", color: "color-white" },
    },
    
    {
      item1: { value: "61,134.11", color: "color-red" },
      item2: { value: "0.53515", color: "color-white" },
      item3: { value: "174.8447", color: "color-white" },
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
      item2: { value: "0.0000353", color: "color-red" },
      item3: { value: "+4.14%", color: "color-green" },
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
      item2: { value: "0.00000319", color: "color-white" },
      item3: { value: "+2.69%", color: "color-green" },
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
      item2: { value: "0.0000019", color: "color-red" },
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
      item2: { value: "0.0000019", color: "color-red" },
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
      item2: { value: "0.0000019", color: "color-red" },
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
      item2: { value: "0.0000019", color: "color-red" },
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
      item2: { value: "0.0000019", color: "color-red" },
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
      item2: { value: "0.0000353", color: "color-red" },
      item3: { value: "+4.14%", color: "color-green" },
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
      item2: { value: "0.00000319", color: "color-white" },
      item3: { value: "+2.69%", color: "color-green" },
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
      item2: { value: "0.0000019", color: "color-red" },
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
      item2: { value: "0.0000019", color: "color-red" },
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
      item2: { value: "0.0000019", color: "color-red" },
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
      item2: { value: "0.0000019", color: "color-red" },
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
      item2: { value: "0.0000019", color: "color-red" },
      item3: { value: "+2.87%", color: "color-green" },
    },
   
  ];
  const { width } = useWindowSize();
  const [activeTab, setActiveTab] = useState("4h");
  return (
    <div
      className={`d-flex align-items-center w-100 gap-2 w-100 ${width < 1440 && 'flex-wrap'}`}
      style={{ alignItems: "stretch" }}
    >
      <DetailTab
        title="Buy/Sell Orders"
        header={OrderHeader}
        data={OrderData}
        width={width < 1440 ? '100%' : '438px'}
      />
      <div className=" container w-100" style={{ flex: "1 1 auto" }}>
        <div className="d-flex flex-column w-100 gap-3 container">
          <div className="d-flex align-items-center justify-content-between w-100">
          <div className="d-flex align-items-center gap-4">
              <span className="text color-white fontW-700">Chart</span>
              <span className={`text color-gray cursor-pointer ${activeTab === '1s' && 'activeBtn'}`} onClick={() => setActiveTab("1s")}>1s</span>
              <span className={`text color-gray cursor-pointer ${activeTab === '15m' && 'activeBtn'}`} onClick={() => setActiveTab("15m")}>15m</span>
              <span className={`text color-gray cursor-pointer ${activeTab === '1h' && 'activeBtn'}`} onClick={() => setActiveTab("1h")}>1H</span>
              <span className={`text color-gray cursor-pointer ${activeTab === '4h' && 'activeBtn'}`} onClick={() => setActiveTab("4h")}>
                4H
              </span>
              <span className={`text color-gray cursor-pointer ${activeTab === '1d' && 'activeBtn'}`} onClick={() => setActiveTab("1d")}>1D</span>
              <span className={`text color-gray cursor-pointer ${activeTab === '6m' && 'activeBtn'}`} onClick={() => setActiveTab("6m")}>6M</span>
              <span className={`text color-gray cursor-pointer ${activeTab === '1y' && 'activeBtn'}`} onClick={() => setActiveTab("1y")}>1Y</span>
              <span className={`text color-gray cursor-pointer ${activeTab === '5y' && 'activeBtn'}`} onClick={() => setActiveTab("5y")}>5Y</span>
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
      <DetailTab showSearchField showToolbar header={Header2} data={data2}  width={width < 1440 ? '100%' : '438px'}/>
    </div>
  );
};

export default OrderDetail;
