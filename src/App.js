import React from "react";
import Header from "./components/header/Header";
import Toolbar from "./components/toolbar/Toolbar";
import OrderDetail from "./components/OrdersDetail/OrderDetails";
import TradeDetail from "./components/tradeDetail/TradeDetail";

function App() {
  return (
    <div className= {`d-flex flex-column w-100 gap-5` }  >
    <Header/>
    <Toolbar/>
    <OrderDetail/>
    <TradeDetail/>
    </div>
  );
}

export default App;
