import React from "react";

function Loader() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "absolute",
        zIndex: 1000,
      }}
    >
      <div id="container">
        <svg viewBox="0 0 100 100">
          <defs>
            <filter id="shadow">
              <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="rgb(55 48 163)" />
            </filter>
          </defs>
          <circle
            id="spinner"
            // style="fill:transparent;stroke:#dd2476;stroke-width: 7px;stroke-linecap: round;filter:url(#shadow);"
            style={{
              fill: "transparent",
              stroke: "rgb(99 102 241)",
              strokeWidth: "2px",
              strokeLinecap: "round",
              filter: "url(#shadow)",
            }}
            cx="50"
            cy="50"
            r="45"
          />
        </svg>
      </div>
    </div>
  );
}

export default Loader;
