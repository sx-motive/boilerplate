import React, { useEffect, useState } from "react";
import useScript from "../utils/useScript";
import { useRouter } from "next/router";

import { navPrimary as nav } from "../../data";

import Button from "../components/button";

export default function Layout({ children }) {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();

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
      <header className="header">
        <div className="logo">motive</div>
        <ul className="header-menu">
          {nav.map((item, i) => (
            <li
              key={i}
              className={router.pathname === item.path ? "active" : ""}
            >
              <Button className="skew" link={item.path}>
                {item.title}
              </Button>
            </li>
          ))}
        </ul>
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
      </header>
      <div className="page" data-barba="container">
        {children}
      </div>

      <footer className="footer" data-scroll-section>
        Footer
      </footer>

      <div className={`menu ${isOpen ? "-open" : ""}`}>
        <div className="wrapper"></div>
        <div className="bg" />
      </div>
    </main>
  );
}
