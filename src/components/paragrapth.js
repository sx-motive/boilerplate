import React from "react";

export default function Paragrapth(props) {
  return (
    <p className={`paragrapth ${props.size} ${props.className}`}>
      {props.children}
    </p>
  );
}
