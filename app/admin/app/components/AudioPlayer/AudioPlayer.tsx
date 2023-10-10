import { useState, useRef } from 'react'

const playIcon = (
  <svg viewBox="0 0 24 24" className="h-6 w-6">
    <path fill="currentColor" d="M3 22v-20l18 10-18 10z" />
  </svg>
)

const pauseIcon = (
  <svg viewBox="0 0 24 24" className="h-6 w-6">
    <path fill="currentColor" d="M3 22v-20h8v20h-8zM13 2v20h8v-20h-8z" />
  </svg>
)

const AudioPlayer = ({ url, close }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(null)
  const [isSeeking, setIsSeeking] = useState(false)

  React.useEffect(() => {
    if (url) {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }, [url])
  const audioRef = useRef()

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    if (!isSeeking) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration)
  }

  const handleSeek = (event) => {
    const { value } = event.target
    setCurrentTime(value)
    audioRef.current.currentTime = value
  }

  const handleSeekStart = () => {
    setIsSeeking(true)
  }

  const handleSeekEnd = () => {
    setIsSeeking(false)
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0')
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0')
    return `${minutes}:${seconds}`
  }

  return (
    <div
      className="fixed bottom-0 left-0 w-full bg-gray-800 py-[8px] text-white"
      style={{ zIndex: 9999 }}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <button onClick={close} className="mr-3 text-white">
            <svg viewBox="0 0 24 24" className="h-7 w-7">
              <path
                fill="currentColor"
                d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"
              />
            </svg>
          </button>

          {isPlaying ? (
            <button onClick={handlePlayPause} className="text-white">
              {pauseIcon}
            </button>
          ) : (
            <button onClick={handlePlayPause} className="text-white">
              {playIcon}
            </button>
          )}
          <span className="ml-2">{url}</span>
        </div>
        <div className="w-1/4">
          <audio
            ref={audioRef}
            src={url}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          />
          <div className="flex items-center justify-between">
            <div className="text-sm">
              {duration ? formatTime(currentTime) : '00:00'}
            </div>
            <div className="text-sm">
              {duration ? formatTime(duration) : '00:00'}
            </div>
          </div>
          <div className="relative mt-2 h-1 w-full rounded-full bg-gray-500">
            <input
              type="range"
              className="absolute left-0 top-0 h-1 w-full bg-transparent"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleSeek}
              onMouseDown={handleSeekStart}
              onMouseUp={handleSeekEnd}
            />
            <div
              className="absolute left-0 top-0 h-1 rounded-full bg-white"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudioPlayer
