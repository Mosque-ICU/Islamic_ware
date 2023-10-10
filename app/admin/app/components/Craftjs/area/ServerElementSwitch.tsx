import dynamic from "next/dynamic";

const EmbedInput = dynamic(() => import("@/app/components/EmbedInput/EmbedInput"));
const ButtonElement = dynamic(() => import("@/app/components/Button/ButtonElement"));

type Props = {
  element: any;
  readOnly?: boolean;
  onChange: (v: string) => void;
  deleteElement: (id: number) => void;
  isFocused?: boolean;
  setElements?: any;
  elementIndex?: number;
  isHovering?: boolean;
  showEditMenu?: boolean;
  setShowEditMenu?: (v: number) => void;
  setSize?: (v: any) => void;
  setTransform?: (v: any) => void;
  targetRef?: React.MutableRefObject<HTMLDivElement>;
  siteData?: any;
};

const ServerElementSwitch = ({
  element,
  readOnly = false,
  siteData = null,
  isFocused = false,
  onChange = () => {},
  setShowEditMenu = () => {},
  setSize = () => {},
  setTransform = () => {},
  targetRef = null,
  elementIndex = 0,
  isHovering = false,
  showEditMenu = false,
}: Props) => {
  return (
    // @ts-ignore
    <>
      {element.type === "text" && ( // @ts-ignore
        <div
          style={{
            padding: "5px",
            alignContent: "center",
            color: siteData.siteColors[siteData?.defaultColorIndexes?.textColor] || "black",
            backgroundColor: element.data?.color || "inherit",
            backgroundImage: element.data?.isGradient
              ? `linear-gradient(${element.data?.gradientDeg}deg, ${element.data?.gradientLeft}, ${element.data?.gradientRight})`
              : "",
            borderRadius: element?.data?.borderRadius ? element?.data?.borderRadius + "px" : "0px",
            height: element?.size?.height || "100%",
          }}
          dangerouslySetInnerHTML={{ __html: element.data.value || "" }}
        />
      )}

      {element.type === "background" && ( // @ts-ignore
        <div
          style={{
            backgroundColor: element.data?.color || "inherit",
            backgroundImage: element.data?.isGradient
              ? `linear-gradient(${element.data?.gradientDeg}deg, ${element.data?.gradientLeft}, ${element.data?.gradientRight})`
              : "",
            borderRadius: element?.data?.borderRadius ? element?.data?.borderRadius + "px" : "0px",
            height: element?.size?.height || "100%",
          }}
        ></div>
      )}

      {element.type === "image" && ( // @ts-ignore
        <img
          className="h-full w-full  "
          src={element.data?.isUrl ? element.data?.url : element.data?.file || "https://via.placeholder.com/150"}
          loading="lazy"
          alt={element.data?.alt || "image"}
          style={{
            borderRadius: element?.data?.borderRadius ? element?.data?.borderRadius + "px" : "0px",
            height: element?.size?.height || "100%",
            objectFit: element?.data?.objectFit || "cover",
            opacity: element?.data?.opacity || 1,
            filter:
              element?.data?.filter && element?.data?.filterValue !== "none" ? `${element?.data?.filter}(${element?.data?.filterValue || "50"}%)` : "none",
            boxShadow: element?.data?.shadowColor ? `${element?.data?.shadowColor} 0px 0px 10px ${element?.data?.shadowOpacity || 0.5}` : "none",
          }}
        />
      )}

      {element.type === "video" && ( // @ts-ignore
        <video
          className="h-full w-full  "
          src={element.data?.isUrl ? element.data?.url : element.data?.file || "https://via.placeholder.com/150"}
          aria-describedby="video-description"
          controls={element.data?.controls || false}
          autoPlay={element.data?.autoPlay || false}
          loop={element.data?.loop || false}
          muted={element.data?.muted || false}
          style={{
            borderRadius: element?.data?.borderRadius ? element?.data?.borderRadius + "px" : "0px",
            height: element?.size?.height || "100%",
            objectFit: element?.data?.objectFit || "cover",
            opacity: element?.data?.opacity || 1,
            filter:
              element?.data?.filter && element?.data?.filterValue !== "none" ? `${element?.data?.filter}(${element?.data?.filterValue || "50"}%)` : "none",
          }}
        />
      )}

      {element.type === "button" && ( // @ts-ignore
        <ButtonElement element={element} readOnly siteData={siteData} />
      )}

      {element.type === "embed" && ( // @ts-ignore
        <EmbedInput element={element} readOnly />
      )}
    </>
  );
};

export default ServerElementSwitch;
