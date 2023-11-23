import React, { useState } from "react";
import logoSmall from "../../assets/png/logo-small.png";
import styles from "./Header.module.scss";
function Header() {
  const [isShowMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar fixed-top">
      <div
        className={`container-fluid d-flex justify-content-md-center ${styles.NavPadding}`}
      >
        <div className={styles.HeaderSpacing}>
          <a className={styles.Titles} href="/">
            HOME
          </a>
        </div>
        <div className={styles.HeaderSpacing}>
          <a href="/" className={styles.Titles}>MARKETPLACE</a>
        </div>
        <div className={styles.HeaderSpacing}>
          <a href="/" className={styles.Titles}>GACHA GAME</a>
        </div>
        <div className={styles.HeaderSpacing}>
          <a className={styles.Titles} href="/white-paper">
            WHITEPAPER
          </a>
        </div>
        <div className={styles.HeaderSpacing}>
          <a className={styles.Titles} href="/contact-us">
            CONTACT US
          </a>
        </div>
        <div
          className={`${styles.Hamburger}`}
          onClick={() => setShowMenu(!isShowMenu)}
        >
          <div className={`${styles.HamburgerStyles}`}></div>
          <div className={`${styles.HamburgerStyles}`}></div>
          <div className={`${styles.HamburgerStyles}`}></div>
        </div>
        {isShowMenu && (
          <div className={`${styles.HamburgerContent}`}>
            <div>
              <a className={`${styles.Titles} ${styles.MenuPadding}`} href="/">
                HOME
              </a>
            </div>
            <div>
              <a href="/" className={`${styles.Titles} ${styles.MenuPadding}`}>
                MARKETPLACE
              </a>
            </div>
            <div>
              <a href="/" className={`${styles.Titles} ${styles.MenuPadding}`}>
                GACHA GAME
              </a>
            </div>
            <div>
              <a
                className={`${styles.Titles} ${styles.MenuPadding}`}
                href="/white-paper"
              >
                WHITEPAPER
              </a>
            </div>
            <div>
              <a
                className={`${styles.Titles} ${styles.MenuPadding}`}
                href="/contact-us"
              >
                CONTACT US
              </a>
            </div>
          </div>
        )}
        <div className={`container-fluid d-flex justify-content-center`}>
          <img alt="" src={logoSmall} className={` ${styles.Mobile}`} />
        </div>
      </div>
    </nav>
  );
}

export default Header;
