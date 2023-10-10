import React from 'react'
import { Tooltip } from 'react-tooltip'

const audioUrl = 'https://audio.qurancdn.com/'

function QuranWord({ word, text = false, setAudioUrl, setSelectedAyah }) {
  return (
    <>
      <div
        className="alMushaf  hover:bg-indigo-100"
        onClick={() =>
          text
            ? setSelectedAyah &&
              word.audio_url &&
              setSelectedAyah(word.verse_id)
            : setAudioUrl(audioUrl + word.audio_url)
        }
      >
        {text ? (
          <p
            data-tooltip-content={
              word.translation?.text +
              ' | ' +
              (word?.transliteration?.text || '')
            }
            data-tooltip-id={`word-${word.id}`}
            className="inline-block cursor-pointer p-1 text-[23px]"
          >
            {word?.text_indopak}
          </p>
        ) : (
          <img
            className="inline-block h-[75px] cursor-pointer"
            data-tooltip-content={
              word.translation?.text +
              ' | ' +
              (word?.transliteration?.text || '')
            }
            data-tooltip-id={`word-${word.id}`}
            src={`https://static.qurancdn.com/images/${word.text}`}
            alt={word.text_uthmani}
          ></img>
        )}
      </div>
      <Tooltip id={`word-${word.id}`} />
    </>
  )
}

export default QuranWord
