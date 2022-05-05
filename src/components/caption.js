import React from "react";

export default function Caption(props) {
  return (
    <span className={`caption ${props.size} ${props.className}`}>
      {props.children}
    </span>
  );
}
