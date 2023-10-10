"use client";
import React, { useState, ChangeEvent } from "react";
import { useResizeDetector } from "react-resize-detector";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Button from "../Button/Button";

const types = [
  { name: "Website", value: "website" },
  { name: "Image", value: "image" },
  { name: "Video", value: "video" },
  { name: "Audio", value: "audio" },
];

type Props = {
  dataUrl: string;
  dataSizes: { width: number; height: number };
  onDataChange: (url: string, sizes: { width: number; height: number }, type: "website" | "video" | "image" | "audio") => void;
  readOnly: boolean;
  type: "website" | "video" | "image" | "audio";
  isFocused?: boolean;
};

const EmbedInput = ({
  dataUrl = "",
  dataSizes = { width: 700, height: 400 },
  onDataChange,
  readOnly = false,
  type = "website",
  noTimeout = false,
  isFocused = true,
}: Props) => {
  const { width, height, ref } = useResizeDetector();

  const timeout = React.useRef<any>(null);
  React.useEffect(() => {
    console.log("timeout");
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      onDataChange(selectedUrl, { width, height }, embedType);
    }, 1000);
  }, [height, width]);

  const [url, setUrl] = useState<string>("");
  const [selectedUrl, setSelectedUrl] = useState<string>("");
  const [showInput, setShowInput] = useState<boolean>(true);
  const [embedType, setEmbedType] = useState<"website" | "video" | "image" | "audio">("website");

  React.useEffect(() => {
    console.log(dataUrl);
    if (dataUrl) {
      setSelectedUrl(dataUrl);
      setShowInput(false);
    }
    if (type) setEmbedType(type);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Check if the URL is a YouTube URL
    if (e.target.value.includes("youtube.com/watch")) {
      // Convert the URL to an embed URL
      const videoId = e.target.value.split("v=")[1];
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;

      // Set the URL to the embed URL
      setUrl(embedUrl);
      setEmbedType("website");
    } else {
      setUrl(e.target.value);
    }
  };

  const handleConfirm = () => {
    setSelectedUrl(url);
    setUrl("");
    setShowInput(false);
    onDataChange(url, { width, height }, embedType);
  };

  const handleToggleInput = () => {
    setUrl(selectedUrl);
    setShowInput(!showInput);
  };

  const embedSwitch = () => {
    switch (embedType) {
      case "image":
        return <img className=" w-full py-3" src={selectedUrl} loading="lazy" ref={ref} />;
      case "video":
        return (
          <video className=" w-full py-3" controls ref={ref}>
            <source src={selectedUrl} />
          </video>
        );
      case "audio":
        return (
          <audio className=" w-full py-3" controls ref={ref}>
            <source src={selectedUrl} />
          </audio>
        );
      case "website":
        return <object height="100%" width="100%" data={selectedUrl} ref={ref} />;
      default:
        null;
    }
  };

  return (
    <div className="mt-1 flex flex-col items-center">
      {showInput && !readOnly ? (
        <>
          {" "}
          <div className="flex w-full flex-row flex-wrap">
            {types.map((type, i) => (
              <button
                key={type.value}
                onClick={() => setEmbedType(type.value as any)}
                style={{
                  borderTopLeftRadius: i === 0 ? 6 : 0,
                  borderTopRightRadius: i === 3 ? 6 : 0,
                }}
                className={`${
                  embedType === type.value ? "bg-indigo-500 text-white " : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                } flex-1 px-2  py-2 text-sm font-medium transition-all duration-200`}
              >
                {type.name}
              </button>
            ))}
          </div>
          <div className=" mb-1 flex w-full">
            <input
              type="text"
              id="embed-url"
              style={{ borderRadius: 0, borderBottomLeftRadius: 6 }}
              value={url}
              onChange={handleChange}
              placeholder="Embed url"
              className="base-input  w-full"
            />
            <Button
              style={{
                borderRadius: 0,
                borderBottomRightRadius: 6,
              }}
              onClick={handleConfirm}
              disabled={!url}
            >
              Confirm
            </Button>
          </div>
        </>
      ) : (
        !readOnly &&
        isFocused && (
          <div className="z-99999 absolute top-[-2px] mb-4 flex w-full items-center justify-between">
            <p className="font-medium text-gray-700">{selectedUrl}</p>
            <PencilSquareIcon className="h-5 w-5 cursor-pointer text-gray-600 transition-all duration-200 hover:text-gray-900" onClick={handleToggleInput} />
          </div>
        )
      )}

      <div
        className={`mb-5 mt-5 w-full overflow-auto rounded-md ${embedType !== "audio" && "border"} border-gray-200 `}
        style={{
          resize: readOnly ? "none" : "both",
          width: dataSizes.width || width,
          height: dataSizes.height || height,
        }}
      >
        {selectedUrl && embedSwitch()}
        <div />
      </div>
    </div>
  );
};

export default EmbedInput;
