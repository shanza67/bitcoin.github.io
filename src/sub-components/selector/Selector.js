import React from "react";
import styles from './Selectpr.module.css';
import down from "../../images/vectorDown.svg";

function CustomeSelector({title}) {
  return (
    <>
    
      <select name="cars" id="cars" className={`d-flex align-items-center cursor-pointer gap-2 text ${styles.customSeelector}`} >
        <option value="volvo" style={{color:"black"}}>{title}</option>
        <option value="saab" style={{color:"black"}}>Saab</option>
        <option value="opel" style={{color:"black"}}>Opel</option>
        <option value="audi" style={{color:"black"}}>Audi</option>
      </select>
    </>
  );
}

export default CustomeSelector;
