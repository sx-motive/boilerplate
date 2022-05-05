import React from "react";
import Image from "next/image";

export default function Img(props) {
  return (
    <div className="image-container">
      <Image
        className="image"
        src={props.src}
        alt={props.alt}
        layout="responsive"
        width="100%"
        height="100%"
        quality={100}
        priority
      />
    </div>
  );
}
