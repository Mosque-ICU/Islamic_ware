import { HeartIcon, PencilIcon } from "@heroicons/react/24/outline";
import React from "react";
import UploadComponent from "./UploadPageComponents";
import { niceBytes } from "@/app/_helpers/web/formatters";
import { deletePublicFile, downloadFile } from "@/app/_helpers/web/utils";
import Button from "@/app/components/Button/Button";

const publicUrl = "https:mosqueicu-public.s3.eu-west-2.amazonaws.com/";

function FileSidebar({ setCurrentFile, hash, currentFile, pathname, setUploads }) {
  const onDelFile = async () => {
    try {
      const res = await deletePublicFile(currentFile.key);
      if (res) {
        if (currentFile.type.startsWith("image")) {
          setUploads((prev) => ({
            ...prev,
            images: prev.images.filter((file) => file.key != currentFile.key),
          }));
        } else if (currentFile.type.startsWith("video")) {
          setUploads((prev) => ({
            ...prev,
            videos: prev.videos.filter((file) => file.key != currentFile.key),
          }));
        } else if (currentFile.type.startsWith("audio")) {
          setUploads((prev) => ({
            ...prev,
            audio: prev.audio.filter((file) => file.key != currentFile.key),
          }));
        } else {
          setUploads((prev) => ({
            ...prev,
            other: prev.other.filter((file) => file.key != currentFile.key),
          }));
        }

        setCurrentFile(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <aside
      style={{
        width: hash == "#Create" && "100%",
        paddingLeft: hash == "#Create" && "15%",
        paddingRight: hash == "#Create" && "15%",
      }}
      className="w-fit overflow-y-auto border-l border-gray-200 bg-white p-8 lg:block"
    >
      <div className="space-y-6 pb-16">
        {hash != `#Create` && (
          <>
            <p
              onClick={() => {
                setCurrentFile();
              }}
            >
              close
            </p>

            <div className=" block w-full  rounded-lg">
              <div className="mb-4 flex justify-between ">
                <h2 className="text-lg font-medium text-gray-900">{currentFile.name}</h2>
                <div className=" flex flex-row">
                  {/* @Hossam Add some  sort of confirm option for delteting and changing to public private */}

                  {currentFile.public ? (
                    <Button className="ml-10 mr-2" size="sm" fullWidth>
                      Make File Private
                    </Button>
                  ) : (
                    <Button className="ml-10 mr-2" fullWidth>
                      Make File Public
                    </Button>
                  )}

                  <Button style={{ background: "red" }} size="sm" onClick={onDelFile} className="  bg-red-500">
                    Delete
                  </Button>
                </div>
              </div>
              {currentFile.cat === "image" ? (
                <img
                  style={{
                    height: "57vh",
                    width: "70vh",
                    objectFit: "contain",
                  }}
                  src={publicUrl + currentFile.key}
                  alt=""
                />
              ) : currentFile.cat === "video" || currentFile.cat === "audio" ? (
                <video
                  style={{
                    height: "50vh",
                    width: "70vh",
                    objectFit: "cover",
                  }}
                  src={publicUrl + currentFile.key}
                  alt=""
                  controls
                />
              ) : currentFile.cat === "pdf" ? (
                <object
                  style={{
                    height: "50vh",
                    width: "70vh",
                    objectFit: "cover",
                  }}
                  data={publicUrl + currentFile.key}
                  type="application/pdf"
                ></object>
              ) : (
                <div className="flex h-96 flex-col items-center justify-center">
                  <p className="text-lg font-medium text-gray-900">{currentFile.name} is not supported</p>

                  <Button onClick={() => downloadFile(publicUrl + currentFile.key, currentFile.name)} className="mt-2">
                    Download to view
                  </Button>
                </div>
              )}
            </div>
          </>
        )}
        <div>
          {hash != "#Create" && currentFile ? (
            <>
              <div className=" flex items-start justify-between">
                <div></div>
                <button
                  type="button"
                  className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <HeartIcon className="h-6 w-6" aria-hidden="true" />
                  <span className="sr-only">Favorite</span>
                </button>
              </div>
              <div>
                <div>
                  <p className="text-sm font-medium text-gray-500">{niceBytes(currentFile.size)}</p>
                  <p className="text-sm font-medium text-gray-500">{currentFile.type}</p>

                  <p className="text-sm font-medium text-gray-500">Uploaded by: {currentFile.userId}</p>

                  <p className="text-sm font-medium text-gray-500">{currentFile.public ? "Public" : "Private"}</p>

                  <p className="text-sm font-medium text-gray-500">Uploaded at: {new Date(currentFile.createdAt).toLocaleString()}</p>

                  <p className="text-sm font-medium text-gray-500">Last updated: {new Date(currentFile.updatedAt).toLocaleString()}</p>
                </div>
              </div>
              <div>
                <h3 className="mt-3 font-medium text-gray-900">Description</h3>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-sm italic text-gray-500">Add a description to this image.</p>
                  <button
                    type="button"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <PencilIcon className="h-5 w-5" aria-hidden="true" />
                    <span className="sr-only">Add description</span>
                  </button>
                </div>
              </div>

              {/* <div>
                <h3 className="font-medium text-gray-900">Shared with</h3>
              </div> */}
            </>
          ) : (
            <UploadComponent>
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                <div className="sm:col-span-6">
                  <h2 className="text-xl font-medium text-slate-900">Information</h2>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-slate-900">
                    name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="sm:col-span-6">
                  {/*  a description  is mandatory to train dataset to get ai to recognise images and sort them this is xyz */}
                  <label htmlFor="description" className="block text-sm font-medium leading-6 text-slate-900">
                    Description
                  </label>
                  <p className="mt-3 text-xs text-slate-500">Required</p>
                  <div className="mt-2">
                    <input required id="description" name="description" className="base-input" defaultValue={""} />
                  </div>
                  <p className="mt-3 text-sm text-slate-500">Brief description for your upload.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-y-6 pt-8 sm:grid-cols-6 sm:gap-x-6">
                <div className="sm:col-span-6">
                  <h2 className="text-xl font-medium text-slate-900">Extra Information</h2>
                  <p className="mt-1 text-sm text-slate-500">This information will be used to categorize and display your media.</p>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="country" className="block text-sm font-medium leading-6 text-slate-900">
                    Type
                  </label>
                  <select name="type" className="mt-2 block w-full base-input">
                    <option>Sermon</option>
                    <option>Recitation</option>
                    <option>Tutorial</option>
                    <option>Discussion</option>
                    <option>Program</option>
                    <option>Prayer</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-x-3">
                <button
                  type="submit"
                  className="flex-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {hash == "#Create" ? "Upload" : "Download"}
                </button>
                <button
                  onClick={() => {
                    window.location.replace(pathname);
                  }}
                  type="button"
                  className="flex-1  rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  {hash == "#Create" ? "Cancel" : "Delete"}
                </button>
              </div>
            </UploadComponent>
          )}
        </div>
      </div>
    </aside>
  );
}

export default FileSidebar;
