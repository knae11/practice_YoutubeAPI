import React from "react";
import { useRef } from "react";
import styles from "./header.module.css";
function Header({ onSearch }) {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    value && onSearch(value);
    inputRef.current.value = "";
  };
  const handleClick = () => {
    handleSearch();
  };
  const handleKey = (e) => {
    //keyboard event에서 e.key로 어떤 키가 눌리는지 확인이 가능(이거 처음에 어떻게 확인하는지 아직도 의문)
    if (e.key === "Enter") {
      handleSearch();
    }
  };
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
        <input
          onKeyPress={handleKey}
          ref={inputRef}
          className={styles.input}
          type="text"
        />
        <button onClick={handleClick} className={styles.button}>
          Search
        </button>
      </div>
    </header>
  );
}

export default Header;
