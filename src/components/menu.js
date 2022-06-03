import React, { useState } from "react";

export default function Menu() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        className="burger-wrap"
        id="cursor-stick-area"
        onClick={() => setOpen(!isOpen)}
        data-magnetic
        data-cursor-stick="#cursor-stick-area"
        data-cursor="-exclusion -menu"
      >
        <div className={`burger ${isOpen ? "-open" : ""}`}></div>
      </div>
      <div className={`menu ${isOpen ? "-open" : ""}`}>
        <div className="wrapper"></div>
        <div className="bg" />
      </div>
    </>
  );
}
