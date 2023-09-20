import React from "react";
import styles from "./ListingSection.module.css";
import { TableComponet } from "../../sub-components/table/Table";
import {useWindowSize} from "react-use";

function ListingComponent() {
  const { width } = useWindowSize();

  return (
    <div className={`container d-flex flex-column w-100 gap-3 p-3`}>
      <div className={`d-flex align-items-center gap-5 ${width < 1440 && 'flex-wrap'}`}>
        <span className="text fontW-600 color-active cursor-pointer">
          Open Orders(3)
        </span>
        <span className="text fontW-600 color-white cursor-pointer">
        Order History
        </span>
        <span className="text fontW-600 color-white cursor-pointer">
        Trade History
        </span>
        <span className="text fontW-600 color-white cursor-pointer">
          Funds
        </span>
      </div>
      <TableComponet/>
    </div>
  );
}

export default ListingComponent;
