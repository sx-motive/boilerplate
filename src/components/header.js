import React from "react";
import { useRouter } from "next/router";
import { navPrimary as nav } from "../../data";
import Button from "./button";

export default function Header() {
  const router = useRouter();

  return (
    <header className="header" data-scroll-section>
      <div className="logo">Denis Kunitsyn</div>
      <ul className="header-menu">
        {nav.map((item, i) => (
          <li key={i} className={router.pathname === item.path ? "active" : ""}>
            <Button link={item.path} className="skew">
              {item.title}
            </Button>
          </li>
        ))}
      </ul>
    </header>
  );
}
