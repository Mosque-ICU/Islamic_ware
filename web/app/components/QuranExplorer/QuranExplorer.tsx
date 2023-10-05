import React from "react";
import { PlusCircleIcon, ChevronRightIcon, ClipboardIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

import { Tooltip } from "react-tooltip";

import { quranExplorerData } from "./QuranExplorer.data";
import QuranWord from "./QuranWord";

import Select from "../Select/Select";
import { copyToClipboard } from "@/app/_helpers/web/formatters";
import { getCachData, addToCache } from "@/app/_helpers/web/requestHandler";
import { useArticleStore } from "@/app/_store/store";
import toast from "react-hot-toast";
import Button from "../Button/Button";
import Popover from "../Popover/Popover";

let lastPage = 0;

function QuranExplorer({ close, addVerse, presetIndex, readOnly = false }) {
  const [setAudioUrl] = useArticleStore((state) => [state.setAudioUrl]);

  const [selectedSurah, setSelectedSurah] = React.useState(1);
  const [selectedAyah, setSelectedAyah] = React.useState(1);
  const [translationKey, setTranslationKey] = React.useState(20);
  const [curPage, setCurPage] = React.useState(1);
  const [selectedTafsir, setSelectedTafsir] = React.useState("en-tafisr-ibn-kathir");
  const [tafsirsPopoverEvent, setTafsirsPopoverEvent] = React.useState(null);
  const [additionalTafsir, setAdditionalTafsir] = React.useState([]);
  const [currentAyahs, setCurrentAyahs] = React.useState([]);
  const [pageVerses, setPageVerses] = React.useState([]);

  const tafsirRef = React.useRef(null);

  React.useEffect(() => {
    if (presetIndex !== null) {
      setSelectedSurah(presetIndex.surah);
      setSelectedAyah(presetIndex.ayah);
    }
  }, [presetIndex]);

  React.useEffect(() => {
    fetchAyah();
    // setAdditionalTafsir([])
  }, [selectedAyah, selectedSurah, selectedTafsir]);

  React.useEffect(() => {
    fetchVerses();
    console.log(translationKey);
  }, [curPage, translationKey]);

  const fetchAyah = async () => {
    const cached = await getCachData(`tafsir/${selectedSurah}:${selectedAyah}:${selectedTafsir}`);
    if (cached) {
      setCurrentAyahs([cached?.tafsir] || []);
      return tafsirRef.current.scrollTo(0, 0);
    }
    fetch(
      `https://api.qurancdn.com/api/qdc/tafsirs/${selectedTafsir}/by_ayah/${selectedSurah}:${selectedAyah}?locale=en&words=true&word_fields=verse_key%2Cverse_id%2Cpage_number%2Clocation%2Ctext_uthmani%2Ctajweed%2Cqpc_uthmani_hafs&mushaf=11`
    )
      .then((res) => res.json())
      .then((data) => {
        addToCache(`tafsir/${selectedSurah}:${selectedAyah}:${selectedTafsir}`, data);
        setCurrentAyahs([data?.tafsir] || []);
        tafsirRef.current.scrollTo(0, 0);
      });
  };

  const fetchAdditionalTafsir = async (tafsir) => {
    console.log(tafsir);
    const cached = await getCachData(`tafsir/${selectedSurah}:${selectedAyah}:${tafsir}`);
    if (cached) {
      setAdditionalTafsir((prev) => [...prev, cached?.tafsir]);
      return;
    }
    fetch(
      `https://api.qurancdn.com/api/qdc/tafsirs/${tafsir}/by_ayah/${selectedSurah}:${selectedAyah}?locale=en&words=true&word_fields=verse_key%2Cverse_id%2Cpage_number%2Clocation%2Ctext_uthmani%2Ctajweed%2Cqpc_uthmani_hafs&mushaf=11`
    )
      .then((res) => res.json())
      .then((data) => {
        addToCache(`tafsir/${selectedSurah}:${selectedAyah}:${tafsir}`, data);
        setAdditionalTafsir((prev) => [...prev, data?.tafsir]);
      });
  };

  const fetchVerses = async () => {
    const cached = await getCachData(`verses/${curPage}/${translationKey}`);
    if (cached) {
      setPageVerses(cached?.verses || []);
      return;
    }
    fetch(
      `https://api.qurancdn.com/api/qdc/verses/by_page/${curPage}?words=true&per_page=all&translations=${translationKey}&fields=text_uthmani%2Cchapter_id%2Chizb_number%2Ctext_imlaei_simple&reciter=7&word_translation_language=en&word_fields=verse_key%2Cverse_id%2Cpage_number%2Clocation%2Ctext_uthmani%2Ctext_indopak%2Cqpc_uthmani_hafs`
    )
      .then((res) => res.json())
      .then((data) => {
        addToCache(`verses/${curPage}/${translationKey}`, data);
        setPageVerses(data?.verses || []);
      });
  };

  const onAddVerse = () => {
    let curVerse;
    for (const verse of pageVerses) {
      if (verse.verse_number == selectedAyah) {
        curVerse = verse.text_uthmani;
        break;
      }
    }
    addVerse({ surah: selectedSurah, ayah: selectedAyah }, curVerse);
    close();

    // const currentverse = currentAyahs[0]
  };

  return (
    <>
      <div className="modal-center modal-center-large  h-[94vh] p-8 ">
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
              <Select
                className={`min-w-[150px]`}
                value={selectedSurah}
                onChange={(value) => {
                  setSelectedAyah(1);
                  setTimeout(() => {
                    setSelectedSurah(value);
                  }, 0);
                }}
                options={quranExplorerData.surahOptions}
                noClear
              />
              <select className="base-input ml-3" value={selectedAyah} onChange={(e) => setSelectedAyah(e.target.value)}>
                {Array(quranExplorerData.surahOptions[selectedSurah - 1]?.verses)
                  .fill()
                  .map((_, index) => (
                    <option key={index} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
              </select>
              <Select
                className=" ml-5 min-w-[180px]"
                value={selectedTafsir}
                onChange={(value) => setSelectedTafsir(value)}
                options={quranExplorerData.tafsirOptions}
                noClear
              ></Select>
              <Select
                className=" ml-2 min-w-[180px]"
                value={translationKey}
                onChange={(value) => setTranslationKey(value)}
                options={quranExplorerData.translationOptions || []}
                noClear
              ></Select>
            </div>

            <div className="relative bottom-2 flex flex-row">
              <div className="mr-20">
                <Button
                  size="sm"
                  onClick={() => {
                    if (selectedAyah == 1) {
                      setSelectedSurah((prev) => prev - 1);

                      setTimeout(() => {
                        setSelectedAyah(quranExplorerData.surahOptions[selectedSurah - 1]?.verses || 1);
                      }, 0);
                    } else {
                      setSelectedAyah((prev) => prev - 1);
                    }
                  }}
                  disabled={selectedSurah == 1}
                >
                  <ChevronLeftIcon className="h-5 w-5" />
                </Button>
                <Button
                  size="sm"
                  className="ml-2"
                  onClick={() => {
                    if (quranExplorerData.surahOptions[selectedSurah - 1]?.verses > selectedAyah) {
                      setSelectedAyah((prev) => prev + 1);
                    } else {
                      setSelectedSurah((prev) => prev + 1);
                      setSelectedAyah(1);
                    }
                  }}
                >
                  <ChevronRightIcon className="h-5 w-5" />
                </Button>
              </div>
              {!readOnly && (
                <Button onClick={() => onAddVerse()} size="md">
                  Add to article
                </Button>
              )}
            </div>
          </div>
          <div className=" flex w-full  flex-row items-center justify-center" style={{ resize: "vertical" }}>
            {currentAyahs?.map((ayah) => (
              <div className="" key={ayah?.id}>
                <div className="hide-scrollbar mt-2 flex max-h-[25vh] flex-row-reverse flex-wrap overflow-y-scroll p-0.5">
                  {ayah?.verses &&
                    Object.keys(ayah?.verses).map((key) => {
                      const verse = ayah?.verses[key];

                      //get last index of verse
                      const last: any = verse?.words?.[verse?.words?.length - 1];
                      if (last.page_number !== curPage && last.page_number !== lastPage) {
                        lastPage = last.page_number;
                        setCurPage(last.page_number);
                      }

                      return verse?.words?.map((word) => <QuranWord key={word?.id} word={word} setAudioUrl={setAudioUrl} />);
                    })}
                </div>
                <div className="absolute right-2">
                  <ChevronRightIcon />
                </div>

                <hr />
                <div ref={tafsirRef} className="h-[50vh] overflow-y-scroll" style={{ resize: "vertical" }}>
                  <p
                    className="amiri  p-1 text-gray-800"
                    style={{
                      fontSize: selectedTafsir && selectedTafsir.startsWith("en") ? "1rem" : "1.25rem",
                    }}
                    dangerouslySetInnerHTML={{ __html: ayah.text || "" }}
                  ></p>
                </div>
                {additionalTafsir &&
                  additionalTafsir.length > 0 &&
                  additionalTafsir.map((a) => (
                    <div className="mt-5 " key={a?.resource_name}>
                      <div className="ml-1 flex flex-row items-center">
                        <h4>{a?.resource_name}</h4>
                        <Button
                          size="sm"
                          className="m-2"
                          onClick={() => setAdditionalTafsir((prev) => prev.filter((t) => t.resource_name !== a.resource_name))}
                        >
                          Remove
                        </Button>
                      </div>
                      <hr />
                      <div className="h-[50vh] overflow-y-scroll" style={{ resize: "vertical" }}>
                        <p
                          className="amiri  p-1 text-gray-800"
                          style={{
                            fontSize: selectedTafsir && selectedTafsir.startsWith("en") ? "1rem" : "1.25rem",
                          }}
                          dangerouslySetInnerHTML={{ __html: a.text }}
                        ></p>
                      </div>
                    </div>
                  ))}
                <div
                  onClick={(e) => setTafsirsPopoverEvent(e)}
                  data-tooltip-content="View additional tafsir below"
                  data-tooltip-id="additional-tafsir"
                  className="absolute right-2 cursor-pointer  text-xs"
                >
                  <PlusCircleIcon className="h-5 w-5 text-gray-500" />
                </div>
              </div>
            ))}
          </div>
          <hr className="my-4" />

          <div className="  hide-scrollbar flex flex-row  flex-wrap overflow-y-scroll" style={{ resize: "vertical", direction: "rtl" }}>
            {pageVerses?.map((verses) =>
              verses?.words?.map((word) => <QuranWord key={word?.id} word={word} text setAudioUrl={setAudioUrl} setSelectedAyah={setSelectedAyah} />)
            )}
            <ClipboardIcon
              onClick={() => copyToClipboard(pageVerses.map((v) => v.text_uthmani)?.join(" "), () => toast.success("Copied to clipboard!"))}
              data-tooltip-content="Copy verses"
              data-tooltip-id="copy"
              date-tooltip-pos="bottom"
              className="mr-2 mt-2 h-5 w-5 cursor-pointer text-gray-500 hover:text-gray-800"
            />
          </div>

          <hr className="my-4" />
          <div className=" flex flex-row  flex-wrap overflow-y-scroll" style={{ resize: "vertical" }}>
            {pageVerses?.map((verses) =>
              verses.translations?.map((word) => (
                <p key={word?.id} className="m-[2px] text-[16px]  text-gray-800" dangerouslySetInnerHTML={{ __html: word?.text }}></p>
              ))
            )}
          </div>
        </div>
        <a
          data-tooltip-content="Powered by Quran.com Api"
          data-tooltip-id="quran.com/api"
          className="absolute left-1 top-0  cursor-pointer text-xs text-gray-500"
          href="https://quran.api-docs.io/"
          target="_blank"
        >
          Quran.com Api
        </a>
        <Tooltip id="quran.com/api" />
        <Tooltip id="additional-tafsir" />
        <Tooltip id="copy" />
      </div>
      <Popover plusY={-20} event={tafsirsPopoverEvent} show={tafsirsPopoverEvent !== null} onClose={() => setTafsirsPopoverEvent(null)}>
        <select className="base-input" onChange={(e) => fetchAdditionalTafsir(e.target.value)}>
          {quranExplorerData.tafsirOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Popover>
      <div onClick={close} className="modal-overlay"></div>
    </>
  );
}

export default QuranExplorer;
