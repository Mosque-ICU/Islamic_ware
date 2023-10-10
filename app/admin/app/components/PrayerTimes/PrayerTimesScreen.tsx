import React, { useState } from "react";
import BaseScreenTemplate from "./templates/BaseScreenTemplate";
import TransmitScreenTemplate from "./templates/TransmitScreenTemplate";
import styles from "./PrayerTimesScreen.module.css";
import AvalancheScreenTemplate from "./templates/AvalancheScreenTemplate";
import TempestScreenTemplate from "./templates/TempestScreenTemplate";
import { prayerTimesService } from "@/app/_helpers/web/services/prayerTimes.service";

function PrayertimesScreen({ theme, subMessage, topMessage, prayerTimes, images, prayerTime, currentEstablishment, editOptions = null }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [onlyShowTimings, setOnlyShowTimings] = useState(false);
  const [onlyShowImages, setOnlyShowImages] = useState(false);
  const [currentTime, setCurrentTime] = React.useState(
    new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    })
  );

  const [nextPrayer, setNextPrayer] = React.useState({
    name: "Fajr",
    time: "5:00",
  });
  const [showTopMessageEditor, setShowTopMessageEditor] = useState(false);
  const [showSubMessageEditor, setShowSubMessageEditor] = useState(false);
  const [showImageEditor, setShowImageEditor] = useState(false);

  React.useEffect(() => {
    //check embed query params
    const urlParams = new URLSearchParams(window.location.search);
    const embed = urlParams.get("embed");
    if (embed == "timings") {
      setOnlyShowTimings(true);
    }

    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        })
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  React.useEffect(() => {
    if (prayerTime.fajr) {
      onCheckNextPrayer();
    }
    const nextPrayerInterval = setInterval(() => {
      if (prayerTime.fajr) {
        onCheckNextPrayer();
      }
      //check every 10 mins
    }, 600000);

    return () => {
      clearInterval(nextPrayerInterval);
    };
  }, [prayerTime]);

  React.useEffect(() => {
    const imgInterval = setInterval(() => {
      if (images.length > 0) {
        setCurrentImage((prev) => {
          if (prev >= images.length - 1) return 0;
          return prev + 1;
        });
      }
      //check every 10 sec
    }, 10000);

    return () => {
      clearInterval(imgInterval);
    };
  }, [images]);

  const onCheckNextPrayer = () => {
    prayerTimesService.checkNextPrayer(prayerTime, setNextPrayer);
  };

  const templateProps = {
    theme,
    subMessage,
    topMessage,
    prayerTimes,
    images,
    prayerTime,
    editOptions,
    currentImage,
    onlyShowTimings,
    styles,
    currentTime,
    nextPrayer,
    showTopMessageEditor,
    setShowTopMessageEditor,
    showSubMessageEditor,
    setShowSubMessageEditor,
    showImageEditor,
    currentEstablishment,
    setShowImageEditor,
  } as TemplateProps;

  return (
    <>
      {/* TEMPLATES ARE HERE  */}
      {theme.template === "base" && <BaseScreenTemplate {...templateProps} />}
      {/* pass in all props to child with spreadprops */}
      {theme.template === "tr" && <TransmitScreenTemplate {...templateProps} />}
      {theme.template === "Avalanche" && <AvalancheScreenTemplate {...templateProps} />}
      {theme.template === "Tempest" && <TempestScreenTemplate {...templateProps} />}
    </>
  );
}

export default PrayertimesScreen;

export type TemplateProps = {
  theme: any;
  showTopMessageEditor: boolean;
  showSubMessageEditor: boolean;
  setShowTopMessageEditor: (show: boolean) => void;
  setShowSubMessageEditor: (show: boolean) => void;
  showImageEditor: boolean;
  setShowImageEditor: (show: boolean) => void;
  editOptions: any;
  images: any;
  onlyShowTimings: boolean;
  styles: any;
  topMessage: string;
  subMessage: string;
  currentImage: any;
  currentTime: string;
  prayerTime: any;
  nextPrayer: any;
  prayerTimes: any;
  currentEstablishment: any;
};
