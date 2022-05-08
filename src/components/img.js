import Image from "next/image";

export default function Img({ src, alt, className }) {
  const imgWidth = src.naturalWidth;
  const imgHeight = src.naturalHeight;
  return (
    <div className={`image-container ${className ? className : ""}`}>
      <Image
        src={src}
        alt={alt}
        width={imgWidth}
        height={imgHeight}
        layout="responsive"
        quality={100}
        priority
      />
    </div>
  );
}
