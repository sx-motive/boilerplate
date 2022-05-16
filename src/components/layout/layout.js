import React, { useEffect } from "react";
import useScript from "../../utils/useScript";

import Header from "./header";
import Footer from "./footer";
import Menu from "./menu";

export default function Layout({ children }) {
  useScript(
    "https://cdn.jsdelivr.net/gh/sx-motive/cdn@master/scripts/cursor.js"
  );

  useEffect(() => {
    let scroll;

    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        lerp: 0.05,
        smoothMobile: true,
        resetNativeScroll: true,
      });
    });

    return () => {
      scroll.destroy();
    };
  });

  return (
    <main className="main" data-scroll-container>
      <Header />
      {children}
      <Footer />
      {/*<Menu />*/}
    </main>
  );
}
