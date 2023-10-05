import { BackspaceIcon } from "@heroicons/react/24/outline";
import React, { Suspense } from "react";
import { Copy, Delete, Edit, Trash } from "react-feather";
import ElementSwitch from "./ElementSwitch";

const Moveable = React.lazy(() => import("react-moveable"));

type Props = {
  element: any;
  wrapperRef: any;
  setElements: any;
  setTransform: any;
  readOnly?: boolean;
  setSize: any;
  elementIndex: number;
  onChange: () => void;
  duplicateElement: (id: number, e) => void;
  deleteElement: (id: number) => void;
  isHovering: boolean;
  setIsHovering: any;
  siteData: any;
  showEditMenu?: number | null;
  setShowEditMenu?: (id: number) => void;
};

function ElementWrapper({
  element,
  wrapperRef,
  setElements,
  setTransform,
  readOnly = false,
  setSize,
  elementIndex = 0,
  onChange,
  duplicateElement,
  deleteElement,
  isHovering,
  setIsHovering,
  showEditMenu,
  siteData,
  setShowEditMenu,
}: Props) {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const moveableRef = React.useRef<Moveable>(null);
  const [isFocused, setIsFocused] = React.useState(false);
  const [startUp, setStartUp] = React.useState(true);
  const [onDelete, setOnDelete] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);
  const [dragging, setDragging] = React.useState(false);

  const handleClickOutside = (event: { target: any }) => {
    // @ts-ignore
    if (targetRef?.current && !targetRef.current.contains(event.target)) {
      if (dragging) return;
      setIsFocused(false);
      setClicked(false);
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      setStartUp(false);
    }, 1000);
  }, []);

  React.useLayoutEffect(() => {
    if (element?.size && targetRef.current) {
      targetRef.current.style.width = element?.size.width ? element?.size.width : "200px";
      targetRef.current.style.height = element?.size.height ? element?.size.height : "175px";

      targetRef.current.style.zIndex = element?.position?.z || 0;
    }

    if (element?.position && targetRef.current) {
      console.log("transform", element?.position);
      targetRef.current.style.top = element?.position.y;
      targetRef.current.style.left = element?.position.x;
    }

    if (!readOnly) {
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
    }
  }, [readOnly]);

  const formatGuideLines = () => {
    const guideLines = [];
    for (let i = 0; i < wrapperRef.current?.offsetWidth; i += wrapperRef.current?.offsetWidth / 100) {
      guideLines.push(0, 25, {
        pos: i,
        className: "secondary",
      });

      guideLines.push(25, 0, {
        pos: i,
        className: "secondary",
      });
    }
    return guideLines;
  };

  const onTransform = React.useCallback(
    (e) => {
      e.target.style.transform = e.transform;
      //convert pixels to percentage
      const x = ((e.left / wrapperRef.current?.offsetWidth) * 100).toFixed(2);
      const y = ((e.top / wrapperRef.current?.offsetHeight) * 100).toFixed(2);

      e.target.style.left = x + "%";
      e.target.style.top = y + "%";
      e.target.style.transform = "none";

      setTransform({ x: x + "%", y: y + "%", z: element?.position?.z || 0 });
    },
    [setTransform]
  );

  return (
    <>
      {(isFocused || isHovering) && !readOnly && (
        <>
          <div
            className="card flex flex-row items-center rounded-md bg-white/10 p-2 shadow-lg border border-gray-500/50"
            style={{
              position: "absolute",
              left: targetRef.current?.offsetLeft,
              top: targetRef.current?.offsetTop - 40,
              zIndex: 999999,
            }}
            onMouseEnter={(e) => {
              setIsFocused(element.id);
              setIsHovering(element.id);
            }}
            onMouseLeave={(e) => {
              setIsFocused(false);
              setIsHovering(false);
            }}
          >
            <Edit
              className="h-[16px]  min-w-[16px]  cursor-pointer hover:text-indigo-600"
              onClick={(e) => {
                e.stopPropagation();
                setShowEditMenu(showEditMenu === element.id ? null : element.id);
              }}
            />
            <Copy className="h-[16px]  min-w-[16px]  cursor-pointer hover:text-indigo-600 " onClick={(e) => duplicateElement(element.id, e)} />
            {!onDelete ? (
              <Trash
                onClick={(e) => {
                  e.stopPropagation();
                  setOnDelete(true);
                }}
                className="h-[16px]  min-w-[16px] cursor-pointer text-red-500 hover:text-red-700 "
              />
            ) : (
              <div onClick={() => deleteElement(element.id)} className="flex flex-row ">
                <span
                  className="ml-1 mr-1 cursor-pointer text-sm font-bold text-red-500 hover:text-red-700
                
                "
                >
                  Confirm delete
                </span>
                <BackspaceIcon
                  className="h-4  cursor-pointer text-gray-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOnDelete(false);
                  }}
                />
              </div>
            )}
            <span className="  ml-2 rounded bg-indigo-500  px-1 py-[1.5px] text-xs font-semibold uppercase text-white">{element?.type}</span>
          </div>
        </>
      )}

      <div
        className={` absolute m-0  p-0   element-wrapper
        ${element.media || element.type === "image" ? "media-wrapper" : ""}
        ${
          !readOnly
            ? "cursor-pointer hover:border-gray-300 hover:shadow-lg hover:outline-none hover:ring-2 hover:ring-indigo-500 focus:border-gray-300 focus:shadow-lg  focus:outline-none focus:ring-2 focus:ring-indigo-500"
            : ""
        }`}
        style={{
          zIndex: !readOnly && showEditMenu === element.id ? 999999 : element?.position?.z || 0,
        }}
        onClick={(e) => {
          if (readOnly || showEditMenu) return;
          // e.stopPropagation()
          setIsFocused(element.id);
          setClicked(true);
        }}
        onContextMenu={(e) => {
          e.stopPropagation();
        }}
        onDoubleClick={(e) => {
          if (readOnly || showEditMenu) return;
          setIsFocused(true);
          setClicked(true);
        }}
        onMouseEnter={(e) => {
          if (readOnly || showEditMenu) return;
          console.log("hovering");
          setIsFocused(element.id);
          setIsHovering(element.id);
        }}
        onDragStart={(e) => {
          if (readOnly || showEditMenu) return;
          !clicked && setClicked(true);
          setDragging(true);
        }}
        onDragEnd={(e) => {
          if (readOnly || showEditMenu) return;
          setDragging(false);
        }}
        onMouseLeave={(e) => {
          if (readOnly || showEditMenu) return;
          !clicked && setIsFocused(false);
          setIsHovering(false);
        }}
        ref={targetRef}
      >
        <ElementSwitch
          element={element}
          readOnly={readOnly}
          onChange={onChange}
          isFocused={clicked}
          deleteElement={deleteElement}
          setElements={setElements}
          elementIndex={elementIndex}
          isHovering={isHovering}
          startUp={startUp}
          targetRef={targetRef}
          showEditMenu={showEditMenu === element.id}
          setShowEditMenu={setShowEditMenu}
          siteData={siteData}
          setTransform={(size) => {
            setTransform(size);
            targetRef.current.style.zIndex = size.z;
          }}
          setSize={setSize}
        />
      </div>

      {/* @ts-ignore */}
      <Suspense fallback={""}>
        {isFocused && !readOnly && !showEditMenu /* @ts-ignore */ && (
          <Moveable
            target={targetRef}
            draggable={readOnly ? false : true} // @ts-ignore
            innerRef={moveableRef}
            ref={moveableRef}
            edge={!readOnly}
            throttleDrag={1}
            startDragRotate={0}
            throttleDragRotate={0}
            resizable={clicked && !readOnly}
            // rotatable={clicked && !readOnly}
            verticalGuidelines={!readOnly && formatGuideLines()}
            horizontalGuidelines={!readOnly && formatGuideLines()}
            snappable={!readOnly}
            bounds={{
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              position: "css",
            }}
            snapCenter={!readOnly}
            onDrag={(e) => {
              onTransform(e);
            }}
            onDragStart={() => {
              if (!isFocused) setIsFocused(true);
            }}
            onDragEnd={(e) => {
              if (!isFocused) setIsFocused(false);
            }}
            onRotateStart={({ target, clientX, clientY }) => {
              // console.log('onRotateStart', target)
            }}
            onRender={(e) => {}}
            onResize={(e) => {
              //convert pixels to percentage
              const width = ((e.width / wrapperRef.current?.offsetWidth) * 100).toFixed(2);
              const height = ((e.height / wrapperRef.current?.offsetHeight) * 100).toFixed(2);

              e.target.style.width = width + "%";
              e.target.style.height = height + "%";

              setSize({ width: width + "%", height: e.height + "px" });
            }}
          />
        )}
      </Suspense>
    </>
  );
}

export default ElementWrapper;
