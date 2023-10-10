import React from "react";
import ImageOptions from "../ImageOptions";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import PrayerTimeTable from "../PrayerTimeTable/PrayerTimeTable";
import { toHijri } from "hijri-date/lib/safe";

import { TemplateProps } from "../PrayerTimesScreen";
import Editor from "../../Editor/Editor";

function BaseScreenTemplate({
  theme,
  showTopMessageEditor,
  showSubMessageEditor,
  setShowTopMessageEditor,
  setShowSubMessageEditor,
  showImageEditor,
  editOptions,
  images,
  onlyShowTimings,
  styles,
  setShowImageEditor,
  topMessage,
  subMessage,
  currentImage,
  currentTime,
  prayerTime,
  nextPrayer,
  prayerTimes,
}: TemplateProps) {
  const HijriDate = toHijri(new Date(prayerTime?.date));

  return (
    <div
      onClick={() => {
        showTopMessageEditor && setShowTopMessageEditor(false);
        showSubMessageEditor && setShowSubMessageEditor(false);
      }}
      className={`flex h-full w-full flex-row ${styles.wrapper} `}
      style={{ backgroundColor: theme.backgroundColor, overflow: "auto" }}
    >
      {showImageEditor && <ImageOptions setImages={editOptions.setImages} images={images} setShowImageEditor={setShowImageEditor} />}

      {!onlyShowTimings && (
        <div className={` shadow ${styles.leftView} `} style={{ backgroundColor: theme.backgroundColor }}>
          <div className="mb-1 mt-5 flex items-center justify-center text-center" style={{ color: theme.textColor }}>
            <p dangerouslySetInnerHTML={{ __html: topMessage }}></p>
            {editOptions?.setTopMessage && (
              <PencilSquareIcon
                className="ml-2 mr-2 h-5 w-5 cursor-pointer text-indigo-500 hover:text-gray-700"
                aria-hidden="true"
                title='Edit "Top Message"'
                onClick={() => setShowTopMessageEditor(true)}
              />
            )}
          </div>

          {showTopMessageEditor && (
            <div className="absolute left-0 top-[10%] z-50 m-4 h-fit  w-[60%] rounded-lg bg-white shadow-lg" onClick={(e) => e.stopPropagation()}>
              <Editor
                title="Edit Top Message"
                value={topMessage}
                onChange={(content) => {
                  editOptions.setTopMessage(content);
                }}
                onCancel={() => setShowTopMessageEditor(false)}
              />
            </div>
          )}

          <div className="relative mt-10">
            {editOptions?.setImages && (
              <PencilSquareIcon
                className="absolute right-[6px] ml-2 mr-2 h-5 w-5 cursor-pointer text-indigo-500 hover:text-gray-700"
                aria-hidden="true"
                title='Edit "Top Message"'
                onClick={() => setShowImageEditor(true)}
              />
            )}
            <img
              src={images[currentImage]}
              alt={`Image ${currentImage + 1}`}
              className="mx-auto w-full rounded-lg object-contain shadow-md"
              style={{ minHeight: "75vh", maxHeight: "75vh" }}
            />
          </div>

          <div className="mt-10 flex flex flex-row justify-center">
            <p style={{ color: theme.textColor }} dangerouslySetInnerHTML={{ __html: subMessage }}></p>
            {editOptions?.setSubMessage && (
              <PencilSquareIcon
                className="ml-2 mr-2 h-5 w-5 cursor-pointer text-indigo-500 hover:text-gray-700"
                aria-hidden="true"
                title='Edit "Sub Message"'
                onClick={() => setShowSubMessageEditor(true)}
              />
            )}
          </div>
        </div>
      )}
      {showSubMessageEditor && (
        <div className="absolute bottom-[60px] left-0 z-50 m-4 h-fit  w-[60%] rounded-lg bg-white shadow-lg" onClick={(e) => e.stopPropagation()}>
          <Editor
            title="Edit Top Message"
            value={subMessage}
            onChange={(content) => {
              editOptions.setSubMessage(content);
            }}
            onCancel={() => showSubMessageEditor(false)}
          />
        </div>
      )}
      <div
        className={`h-full  overflow-hidden  shadow sm:rounded-lg ${onlyShowTimings ? styles.fullView : styles.rightView} `}
        style={{ backgroundColor: theme.backgroundColor }}
      >
        <div className="container  mx-auto">
          <div
            className="m-4 rounded-lg p-1 shadow-lg"
            style={{
              color: theme.timeCardTextColor,
              backgroundColor: theme.timeCardColor,
            }}
          >
            <h1 className="mb-1 mt-2 text-center font-bold  " style={{ fontSize: "3vw" }}>
              <span>{currentTime}</span>
            </h1>
            <p className="f mb-8 text-center" style={{ color: theme.timeCardTextColor, fontSize: "2vw" }}>
              {prayerTime?.date} - {HijriDate.date}/{HijriDate.month}/{HijriDate.year}
            </p>
          </div>

          <PrayerTimeTable
            prayerTime={prayerTime}
            theme={theme}
            nextPrayer={nextPrayer}
            editOptions={editOptions}
            prayerTimes={prayerTimes}
            currentTime={currentTime}
          />
          <hr />
          <div className="mt-5">
            <h1 style={{ color: theme.textColor, fontSize: "1.5vw" }} className="mb-1 text-center font-bold ">
              Next Jamaat
            </h1>
            <h2 className="f mb-5 text-center " style={{ color: theme.textColor, fontSize: "2.5vw" }}>
              {nextPrayer.name} - {nextPrayer.time}
            </h2>

            <h2 className="f mb-5 text-center " style={{ color: theme.textColor, fontSize: "1.5vw" }}>
              {prayerTime?.bottom_message}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BaseScreenTemplate;
