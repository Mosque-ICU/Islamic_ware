// import styled, { keyframes } from "styled-components";
import React from "react";
import styles from "./spinner.module.css";
function Spinner(props) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" stroke="#000" className={styles.loader}>
      {/* <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)" stroke-width="2">
          <circle stroke-opacity=".25" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18" />
        </g>
      </g> */}
    </svg>
  );
}

export default Spinner;
