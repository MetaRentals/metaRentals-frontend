import Link from "next/link";
import React from "react";
import { ConnectButton } from "web3uikit";
import style from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navbarContainer}>
        <div className={style.navbarLogo}>
         <Link href = "/">
         <a><span>MetaRentals</span></a>
         </Link>
        </div>
        <div className={style.navbarListContainer}>
          <div className={style.navbarList}>
            <ul>
              <li>
                <Link href="/marketplace">
                  <a>Marketplace</a>
                </Link>{" "}
              </li>
              <li>
                <Link href="#roadmap">
                  <a>Roadmap</a>
                </Link>{" "}
              </li>
              <li>
                <Link href="#whitepaper">
                  <a>Whitepaper</a>
                </Link>
              </li>
              <li>
                <Link href="#team">
                  <a>Team</a>
                </Link>
              </li>

              <li>
                <Link href="/join">
                  <a>Join DAO</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={style.connectBtn}>
            <ConnectButton chainId="4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
