import React from "react";
import QuranExplorer from "./QuranExplorer";
import { quranExplorerData } from "./QuranExplorer.data";
import Button from "../Button/Button";

function QuranSelectedVerses({ onDataChange, verses = [], readOnly = false, insertVerses }) {
  const [selectedVerses, setSelectedVerses] = React.useState([]);
  const [showQuranExplorer, setShowQuranExplorer] = React.useState(false);
  const [presetIndex, setPresetIndex] = React.useState(null);
  const [firstLoad, setFirstLoad] = React.useState(false);

  React.useEffect(() => {
    setSelectedVerses(verses);
  }, []);

  const addVerse = (verse, text) => {
    console.log(verse, text);
    setSelectedVerses([...selectedVerses, verse]);
    onDataChange([...selectedVerses, verse]);
    insertVerses(text);
  };

  const spliceVerse = (index) => {
    const newVerses = [...selectedVerses];
    newVerses.splice(index, 1);
    setSelectedVerses(newVerses);
    onDataChange(newVerses);
  };

  return (
    <div>
      <div className="-mt-2 mb-5 flex flex-row flex-wrap ">
        {selectedVerses.map((verse, i) => {
          return (
            <Label
              key={i}
              verse={verse}
              readOnly={readOnly}
              spliceVerse={() => spliceVerse(i)}
              onClick={(verse) => {
                !firstLoad && setFirstLoad(true);
                setPresetIndex({ surah: verse.surah, ayah: verse.ayah });
                setShowQuranExplorer(true);
              }}
            />
          );
        })}
      </div>
      {!readOnly && (
        <Button
          className="mb-1"
          size="sm"
          onClick={() => {
            !firstLoad && setFirstLoad(true);
            setShowQuranExplorer(true);
          }}
        >
          Open Quran Explorer
        </Button>
      )}
      {firstLoad && (
        <div style={{ display: showQuranExplorer ? "initial" : "none" }}>
          <QuranExplorer
            addVerse={(verse, text) => addVerse(verse, text)}
            readOnly={readOnly}
            close={() => {
              setShowQuranExplorer(false);
              // setPresetIndex(null)
            }}
            presetIndex={presetIndex}
          />
        </div>
      )}
    </div>
  );
}

const Label = ({ verse, onClick, spliceVerse, readOnly }) => {
  const [hovering, setHovering] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      title="Click to View in Quran Explorer"
      onClick={() => {
        onClick(verse);
      }}
      className="relative mb-1 mr-1 flex w-fit cursor-pointer flex-col rounded-md bg-gray-100 px-2 py-1 text-[13.5px] shadow-md hover:bg-gray-200 hover:shadow-lg"
    >
      Surah {quranExplorerData.surahOptions[verse.surah - 1].label} ({verse.surah}) : {verse.ayah}
      {!readOnly && hovering && (
        <div
          title="Remove Verse"
          onClick={(e) => {
            e.stopPropagation();
            spliceVerse();
          }}
          className="absolute right-[-5px] top-[-13px] mr-1 mt-1 transition-all duration-300 ease-in-out"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 hover:text-gray-700" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" className="fill-current" d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" className="fill-current" d="M10 2a8 8 0 100 16 8 8 0 000-16zM2 10a8 8 0 1116 0 8 8 0 01-16 0z" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default QuranSelectedVerses;
