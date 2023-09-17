import React from "react";
import Header from "./components/header/Header";
import Toolbar from "./components/toolbar/Toolbar";
import OrderDetail from "./components/OrdersDetail/OrderDetails";
import TradeDetail from "./components/tradeDetail/TradeDetail";
import ListingComponent from "./components/listingSection/ListingSection";

function App() {
  return (
    <div className= {`d-flex flex-column w-100 gap-2` }  >
    <Header/>
    <Toolbar/>
    <OrderDetail/>
    <TradeDetail/>
    <ListingComponent/>
    </div>
  );
}

export default App;
