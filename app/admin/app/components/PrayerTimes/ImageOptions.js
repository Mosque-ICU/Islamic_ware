import React, { useState } from 'react'

const ImageOptions = ({ setShowImageEditor, images, setImages }) => {
  const [curIndex, setCurIndex] = useState(null)

  const [numberImages, setNumberImages] = useState(5)

  const handleImageChange = () => {
    // Handle image change logic here
  }

  return (
    <>
      <div className="modal-center">
        <div className="h-[90vh] w-[90vw] p-8">
          <div className="mb-5 mt-2">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Set Number of Images
            </label>
            <input
              className=" base-input w-[200px] "
              type="number"
              value={numberImages}
              onChange={(e) => setNumberImages(e.target.value)}
            />
            <hr className="mt-5" />
          </div>
          {curIndex !== null && (
            <div className="mb-7 mt-2">
              <img
                src={images[curIndex]}
                alt="Selected Image"
                className="mb-4 h-80 w-full object-contain"
              />
              <div className="flex flex-col items-center justify-center">
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Image {curIndex + 1} URL
                </label>
                <input
                  className="base-input w-full "
                  value={images[curIndex] || ''}
                  onChange={(e) => {
                    const newImages = [...images]
                    newImages[curIndex] = e.target.value
                    setImages(newImages)
                  }}
                />
                {/* <button
                  className="focus:shadow-outline mr-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                  onClick={handleImageChange}
                >
                  Replace
                </button>
                <button
                  className="focus:shadow-outline mr-4 rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700 focus:outline-none"
                  onClick={() => setImage(null)}
                >
                  Delete
                </button> */}
                {/* <a
                  href={images[curIndex]}
                  download
                  className="focus:shadow-outline rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 focus:outline-none"
                >
                  Download
                </a> */}
              </div>
            </div>
          )}
          <hr className="mb-5" />
          <div className="flex flex-wrap justify-center">
            {Array(parseInt(numberImages))
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="mb-4 mr-4 min-w-[200px] cursor-pointer rounded-lg border border-gray-300 p-4 hover:border-gray-400 hover:bg-gray-100"
                  onClick={() => setCurIndex(index)}
                >
                  {images[index] ? (
                    <img
                      src={images[index]}
                      alt={`Image ${index + 1}`}
                      className="h-48 w-full object-contain"
                    />
                  ) : (
                    <span> Click to add image url </span>
                  )}
                  <div className="mt-2 text-lg font-bold">
                    Image {index + 1}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div
        onClick={() => setShowImageEditor(false)}
        className="modal-overlay"
      ></div>
    </>
  )
}
export default ImageOptions
