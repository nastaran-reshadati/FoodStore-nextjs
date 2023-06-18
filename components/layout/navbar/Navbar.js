import React from "react";
import NavbarItems from "./NavbarItems";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <Link href="/">
            <a className="navbar-brand-custom">
              <h3>فود استور</h3>
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <NavbarItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
