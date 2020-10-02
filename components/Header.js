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
      <div className="connect">
        <Link href="/inscription">
          <a>
            <span>Inscription</span>
          </a>
        </Link>
        <Link href="/connection">
          <a>
            <span>Connection</span>
          </a>
        </Link>
      </div>
    </nav>

    <style jsx>{`
      nav {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        text-decoration: none;
        margin-top: 2rem 0 0 0;
      }
      nav > .ul > ul {
        list-style: none;
        display: flex;
        justify-self: flex-start;
      }
      nav > .ul > ul > li {
        padding: 0 0.5rem 0.5rem 1rem;
      }
      nav > .ul > ul > li > a {
        font-family: arboria, sans-serif;
        font-weight: 500;
        font-style: normal;
        letter-spacing: 0.25em;
      }
      nav .connect {
        display: flex;
        justify-self: flex-end;
        align-self: center;
      }
      .connect a > span {
        padding: 1rem;
      }

      @media (max-width: 1076px) {
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
