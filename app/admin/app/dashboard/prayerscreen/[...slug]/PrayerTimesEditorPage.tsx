"use client";
import React, { useState } from "react";
import Image from "next/image";

import { publicId } from "@/app/_helpers/web/formatters";
import { useEstablishment } from "@/app/_helpers/web/hooks/useEstablishment";
import { prayerTimesService } from "@/app/_helpers/web/services/prayerTimes.service";
import Button from "@/app/components/Button/Button";
import PrayertimesScreen from "@/app/components/PrayerTimes/PrayerTimesScreen";
import { ShareIcon } from "@heroicons/react/24/outline";
import Loader from "@/app/components/Loader/Loader";
import Link from "next/link";

import styles from "./PrayerTimesEditorPage.module.css";
import PrayerThemeSidebar from "./PrayerThemeSidebar";
import EmbedModal from "./EmbedModal";

function PrayerTimesEditorPage() {
  const { currentEstablishment, loading } = useEstablishment();

  const [topMessage, setTopMessage] = React.useState(``);
  const [showEmbeds, setShowEmbeds] = React.useState(false);
  const [subMessage, setSubMessage] = React.useState(`
    <p>
    Please kindly switch off your mobile phones and maintain a quiet atmosphere while inside the Mosque
    </p>
`);
  const [theme, setTheme] = React.useState({
    backgroundColor: "#FFFFFF",
    textColor: "#374151",
    highlightColor: "#6366f1",
    timeCardColor: "#f3f4f6",
    timeCardTextColor: "#374151",
    fontFamily: "helvetica",
    template: "base",
  });
  const [lastFont, setLastFont] = React.useState("helvetica");
  const [onThemeEdit, setOnThemeEdit] = React.useState(false);
  const [images, setImages] = React.useState([]);
  const [prayerTimes, setPrayerTimes] = useState([]);
  const [curIndex, setCurIndex] = useState(0);
  // const [prayerTime, setPrayerTime] = useState({})

  React.useEffect(() => {
    const prayerTimes = prayerTimesService.getPrayerTimes();

    setPrayerTimes(prayerTimes);
    setImages(prayerTimesService.getImages());

    return () => {
      document.documentElement.style.setProperty("--font-family", "Helvetica Neue, Helvetica, Arial");
    };
  }, []);

  React.useEffect(() => {
    if (prayerTimes && prayerTimes.length > 0) {
      //check data
      const curDate = new Date().toLocaleDateString();

      // const curTimeStamp = new Date(new Date().toLocaleDateString()).getTime()
      // const curPrayerTime = prayerTimes.find(
      //   (p) => p.timestamp === curTimeStamp
      // )
      const curPrayerTimeIndex = prayerTimes.findIndex((p) => p.date === curDate);

      setCurIndex(curPrayerTimeIndex && curPrayerTimeIndex > -1 ? curPrayerTimeIndex : 0);
      // console.log(curPrayerTime)
      // setPrayerTime(curPrayerTime || prayerTimes[0] || {})
    }
  }, [prayerTimes]);

  React.useEffect(() => {
    if (currentEstablishment && !topMessage) {
      setTopMessage(`<h1>Prayer Times for ${currentEstablishment.name}</h1>`);
    }
  }, [currentEstablishment]);

  React.useEffect(() => {
    if (theme && theme.fontFamily !== lastFont) {
      document.documentElement.style.setProperty("--font-family", theme?.fontFamily);
      setLastFont(theme?.fontFamily);
    }
  }, [theme]);

  if (loading) return <Loader />;
  else if (!currentEstablishment && !loading) {
    return null;
  }

  return (
    <>
      <div className="h-full w-full">
        <div className=" position-sticky top-0  z-10 flex h-[40px] w-full flex-row justify-between border-b border-gray-300 bg-gray-100 shadow-sm">
          <div className="ml-2 flex items-center">
            <Link href={`/dashboard/home/${publicId(currentEstablishment)}`}>
              {/* <span className="sr-only">Your Company</span> */}
              <Image src="/logo.png" alt="Mosque ICU Logo" className="w-auto" width={120} height={120} priority />
            </Link>
          </div>
          <div className="mr-2 flex items-center">
            <button
              onClick={() => setShowEmbeds(true)}
              className="0 mr-2 rounded-md border  border-transparent px-2 py-1 text-sm text-indigo-800 hover:bg-indigo-200 focus:outline-none"
              title='Embed "Prayer Times"'
            >
              <ShareIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <Button variant="secondary" size="sm" className="mr-2" onClick={() => setOnThemeEdit(true)}>
              Theme settings
            </Button>
            <Button size="sm">Save Changes</Button>
          </div>
        </div>

        <div className={styles.prayerTimesWrapper} style={{ fontFamily: theme?.fontFamily + "!important" }}>
          {prayerTimes.length > 0 && (
            <PrayertimesScreen
              topMessage={topMessage}
              subMessage={subMessage}
              theme={theme}
              images={images}
              prayerTimes={prayerTimes}
              prayerTime={prayerTimes[curIndex]}
              currentEstablishment={currentEstablishment}
              editOptions={{
                setTopMessage,
                setSubMessage,
                setImages,
                setPrayerTimes,
              }}
            />
          )}
        </div>
        {onThemeEdit && <PrayerThemeSidebar theme={theme} setTheme={setTheme} close={() => setOnThemeEdit(false)} />}
      </div>
      {showEmbeds && <EmbedModal close={() => setShowEmbeds(false)} />}
    </>
  );
}

export default PrayerTimesEditorPage;
