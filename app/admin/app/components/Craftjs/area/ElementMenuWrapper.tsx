import React from "react";

function ElementMenuWrapper({ element, options, close, targetRef }) {
  const [renderedIndex, setRenderedIndex] = React.useState(0);

  return (
    <>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "absolute",
          left: 100,
          // top: targetRef ? targetRef.current?.offsetTop + "px" : "0px",

          zIndex: 999999,
        }}
      >
        <div
          style={{ bottom: "200px" }}
          className=" slideLeft relative w-[300px] items-center overflow-hidden overflow-hidden rounded-md border border-gray-200 bg-white p-2 drop-shadow-lg "
        >
          <div className="flex flex-row items-center ">
            {options.map((option, i) => {
              return (
                <div
                  key={option.key}
                  className={`flex flex-row mx-1  ${renderedIndex === i ? "text-indigo-500 font-semibold border-b-1 border-indigo-500 " : ""}`}
                  onClick={() => {
                    setRenderedIndex(i);
                  }}
                >
                  <div className="flex flex-row items-center">
                    {option.icon}
                    <span className="ml-[10px]">{option.key}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <hr />

          <div className="flex-column mt-2 flex w-full min-w-[255px] p-2">{options[renderedIndex].component}</div>
        </div>
      </div>
      <div className="z-9999 fixed inset-0" onClick={() => close(null)} />
    </>
  );
}

export default ElementMenuWrapper;
