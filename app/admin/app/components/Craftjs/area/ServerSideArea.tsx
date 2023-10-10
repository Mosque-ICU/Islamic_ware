import React from "react";
import ServerElementSwitch from "./ServerElementSwitch";

function ServerSideArea({ data, siteData, i }) {
  return (
    <div
      style={{
        height: data?.height ? data.height + "px" : "600px",
        backgroundColor:
          data?.backgroundColor || siteData?.defaultColorIndexes?.sectionBackground
            ? siteData?.siteColors[siteData?.defaultColorIndexes?.sectionBackground]
            : "initial",

        position: "relative",
        opacity: data?.opacity || 1,
        boxSizing: "border-box",
        backgroundSize: data?.backgroundSize || "cover",
        backgroundImage: `url(${data?.backgroundImage || ""})`,
        boxShadow: `${data?.backgroundOverlay ? "inset 0 0 0 1000px " + data?.backgroundOverlay + "50" : ""}`,
        margin: `${data?.margin?.top || 0}px ${data?.margin?.right || 0}px ${data?.margin?.bottom || 0}px ${data?.margin?.left || 0}px`,
        padding:
          data?.padding === "full"
            ? data.paddingFull + "px"
            : data.padding === "side"
            ? `
          ${data?.padding?.top || 0}px ${data?.padding?.right || 0}px ${data?.padding?.bottom || 0}px ${data?.padding?.left || 0}px`
            : "",
        border: data?.borderType ? `${data?.borderWidth}px ${data?.borderType} ${data?.borderColor || "black"}` : "none",
        animation: data?.animation
          ? `${data?.animation} ${data?.animationDuration || 1}s 
            ${data?.animationDelay || 0}s ${data?.animationIterationCount || 1} ${data?.animationDirection || "normal"} ${data?.animationFillMode || "none"} ${
              data?.animationPlayState || "running"
            }`
          : "",
      }}
      className={` w-full area-wrapper  ${data?.backgroundParallax === "fixed" ? "bg-fixed" : data?.backgroundParallax === "Animate" ? "bg-local" : ""} ${
        i === 0 ? "mt-20" : ""
      }  `}
    >
      {data?.backgroundOverlay && (
        <div style={{ boxShadow: `${data?.backgroundOverlay ? "inset 0 0 0 1000px " + data?.backgroundOverlay + "50" : ""}` }} className="sectionLayer"></div>
      )}
      {data.elements &&
        data.elements.map((element, i) => {
          return (
            <div
              className={`absolute element-wrapper  ${element?.type === "image" || element?.type === "video" ? "media-wrapper" : ""} `}
              style={{
                top: element.position.y,
                left: element.position.x,
                zIndex: element.position.z,
                width: element.size.width,
                height: element.size.height,
              }}
              key={element.id}
            >
              <ServerElementSwitch element={element} readOnly elementIndex={i} siteData={siteData} />
            </div>
          );
        })}
    </div>
  );
}

export default ServerSideArea;
