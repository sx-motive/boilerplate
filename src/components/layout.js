import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <header className="header">Header</header>
      {children}
      <footer className="footer" data-scroll-section>
        Footer
      </footer>
      <div className="menu">Menu</div>
    </>
  );
}
