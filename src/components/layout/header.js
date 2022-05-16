import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { navPrimary as nav } from "../../../data";

export default function Header() {
  const router = useRouter();

  return (
    <header className="header">
      <div className="logo">motive</div>
      <ul className="header-menu">
        {nav.map((item, i) => (
          <li key={i} className={router.pathname === item.path ? "active" : ""}>
            <Link href={item.path}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
