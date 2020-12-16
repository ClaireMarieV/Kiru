import React from "react";
import Link from "next/link";

const Header = () => (
  <header>
    <nav>
      <Link href="/">
        <a>
          <div className="logo">
            <img src="/logo/kiru.svg" />
          </div>
        </a>
      </Link>
      <div className="ul">
        <ul>
          <li>
            <Link href="/vetements">
              <a>VETEMENTS</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>MAISON</a>
            </Link>
          </li>

          <li>
            <Link href="/connection">
              <a>Connection</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>

    <style jsx>{`
      nav {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        text-decoration: none;
        margin-top: 2rem 0 0 0;
        border-bottom: 1px solid;
        padding: 1.5rem;
      }
      nav .ul > ul {
        list-style: none;
        display: flex;
        justify-content: flex-end;
      }
      .nav {
        border-left: 1px solid;
      }
      nav > .ul > ul > li {
        padding: 0 0.5rem 0.5rem 1rem;
      }
      .logo {
        width: 5rem;
      }
      .logo img {
        width: 100%;
      }

      @media (max-width: 730px) {
        nav {
          grid-template-rows: repeat(2, minmax(0, 1fr));
        }
        nav > h2 {
          margin-left: 0.5em;
          font-size: 1.5em;
        }
      }
      @media (max-width: 600px) {
        nav {
          display: block;
        }
        nav > .title {
          padding-left: 1.5rem;
        }
        nav > .ul > ul {
          margin: 2rem 0 2rem;
          display: inline-flex;
          padding: 0;
        }
      }
    `}</style>
  </header>
);

export default Header;
