import React from "react";
import Link from "next/link";

const Header = () => (
  <header>
    <nav>
      <div className="ul">
        <ul>
          <li>
            <Link href="">
              <a>VETEMENTS</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>MAISON</a>
            </Link>
          </li>
        </ul>
      </div>
      <Link href="/">
        <div className="logo">
          <img src="/logo/kiruGeometrique.png" />
        </div>
      </Link>
      <div className="ul">
        <ul>
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
        grid-template-columns: repeat(3, minmax(0, 1fr));
        text-decoration: none;
        margin-top: 2rem 0 0 0;
      }
      nav .ul > ul {
        list-style: none;
        display: flex;
        justify-self: flex-start;
      }
      nav > .ul > ul > li {
        padding: 0 0.5rem 0.5rem 1rem;
      }
      .logo {
        width: 5rem;
        justify-self: center;
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
