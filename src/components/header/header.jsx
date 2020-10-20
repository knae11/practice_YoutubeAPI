import React from "react";
import styles from "./header.module.css";
function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          className={styles.image}
          src="./images/youtubeIcon.png"
          alt="youtube"
        />
        <h2>Youtube</h2>
      </div>
      <div className={styles.search}>
        <input className={styles.input} type="text" />
        <button className={styles.button}>Search</button>
      </div>
    </header>
  );
}

export default Header;
