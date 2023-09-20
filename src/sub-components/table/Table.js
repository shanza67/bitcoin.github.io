import React, { useMemo, useEffect, useState } from "react";
import down from "../../images/vectorDown.svg";
import dellIcon from "../../images/delete.svg";
import styles from "./Table.module.css";
const header = [
  { heading: "Date" },
  { heading: "Pair" },
  {
    heading: (
      <div className={`d-flex align-items-center cursor-pointer gap-2`}>
        <span className={`text color-gray`}>Type </span>
        <img src={down} alt="" />
      </div>
    ),
  },
  {
    heading: (
      <div className={`d-flex align-items-center cursor-pointer gap-2`}>
        <span className={`text color-gray`}>Side </span>
        <img src={down} alt="" />
      </div>
    ),
  },
  { heading: "Price" },
  { heading: "Amount" },
  { heading: "Total" },
  { heading: "Trigger Conditions" },
  { heading: " " },
];
const data = [
  {
    data: [
      { value: "11-05 16:41:15" },
      { value: "BTC/USDT" },
      { value: "Limit" },
      { value: " " },
      { value: "60,500.11" },
      { value: "0.1 BTC" },
      { value: "$1500" },
      { value: "Mark Price>=60.50011" },
      {
        value: (
          <div className="d-flex align-items-center justify-content-end gap-4 w-100">
            <button
              className={`d-flex align-items-center gap-2 btn-style text`}
            >
              View
            </button>
            <img src={dellIcon} alt="" className="cursor-pointer"/>
          </div>
        ),
      },
    ],
  },
  {
    data: [
      { value: "11-05 16:41:15" },
      { value: "BTC/USDT" },
      { value: "Limit" },
      { value: " " },
      { value: "60,500.11" },
      { value: "0.1 BTC" },
      { value: "$1500" },
      { value: "Mark Price>=60.50011" },
      {
        value: (
          <div className="d-flex align-items-center justify-content-end gap-4 w-100">
            <button
              className={`d-flex align-items-center gap-2 btn-style text`}
            >
              View
            </button>
            <img src={dellIcon} alt="" className="cursor-pointer"/>
          </div>
        ),
      },
    ],
  },
  {
    data: [
      { value: "11-05 16:41:15" },
      { value: "BTC/USDT" },
      { value: "Limit" },
      { value: " " },
      { value: "60,500.11" },
      { value: "0.1 BTC" },
      { value: "$1500" },
      { value: "Mark Price>=60.50011" },
      {
        value: (
          <div className="d-flex align-items-center justify-content-end gap-4 w-100">
            <button
              className={`d-flex align-items-center gap-2 btn-style text`}
            >
              View
            </button>
            <img src={dellIcon} alt="" className="cursor-pointer"/>
          </div>
        ),
      },
    ],
  }
];

export const TableComponet = () => {
 
  return (
    <div className="w-100 overflow-auto">
      {/* <table
          borderless
          className={` main-table rounded-top `}
         
        >
          <thead className="">
            {headerGroups.map((headerGroup, idx) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={idx}>
                {headerGroup.headers.map((column, idx) => (
                  <th {...column.getHeaderProps()} key={idx}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps(formatRowProps && formatRowProps(row))}
                  key={i}
                  style={{ cursor: rowCursor }}
                >
                  {row.cells.map((cell, idx) => {
                    return (
                      <td key={idx} {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table> */}
      <table className={`w-100 ${styles.customeTable}`}  style={{minWidth:"1440px"}} >
        <thead>
          <tr>
            {header?.map((item, idx) => {
              return <th key={idx}>{item.heading}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((row, idx) => {
            console.log("row" , row)
            return (
              <tr>
                {row.data.map((item, idx) => {
                  return <td>{item.value} </td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

TableComponet.displayName = "TableComponent";
