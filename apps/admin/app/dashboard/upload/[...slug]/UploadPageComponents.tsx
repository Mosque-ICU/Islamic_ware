import React, { useState } from "react";

import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { useEstablishment } from "@/app/_helpers/web/hooks/useEstablishment";
import { getFiles, upload } from "@/app/_helpers/web/utils";
import Button from "@/app/components/Button/Button";
import { UploadPageCellEachLayout } from "./UploadPageCell";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const publicUrl = "https:mosqueicu-public.s3.eu-west-2.amazonaws.com/";

export const UploadPageComponentView = ({ setCurrentFile, showUploader, setShowUploader, uploads, setUploads, options, setOptions }) => {
  const { currentEstablishment } = useEstablishment();
  const [files, setFiles] = useState([]);
  const [currentLength, setCurrentLength] = React.useState(0);
  const [uploading, setUploading] = useState(false);

  const onSetUploads = (uploads, upload = false) => {
    const uploadTypes = {
      images: [],
      videos: [],
      audio: [],
      other: [],
    };

    let count = 0;

    for (let file of uploads) {
      count++;
      if (file.type.startsWith("image")) {
        file.cat = "image";
        uploadTypes.images.push(file);
      } else if (file.type.startsWith("video")) {
        file.cat = "video";
        uploadTypes.videos.push(file);
      } else if (file.type.startsWith("audio")) {
        file.cat = "audio";
        uploadTypes.audio.push(file);
      } else {
        file.cat = "other";
        uploadTypes.other.push(file);
      }
    }

    if (upload) {
      setUploads((prev) => ({
        images: [...uploadTypes.images, ...prev.images],
        videos: [...uploadTypes.videos, ...prev.videos],
        audio: [...uploadTypes.audio, ...prev.audio],
        other: [...uploadTypes.other, ...prev.other],
      }));
    } else {
      setUploads((prev) => ({
        images: [...prev.images, ...uploadTypes.images],
        videos: [...prev.videos, ...uploadTypes.videos],
        audio: [...prev.audio, ...uploadTypes.audio],
        other: [...prev.other, ...uploadTypes.other],
      }));
    }

    setCurrentLength((prev) => prev + count);
  };

  const fetchUploads = async () => {
    const response = await getFiles(options.page, files.length > 0 ? files[files.length - 1].id : 0);

    onSetUploads(response.files || []);
    setOptions({ ...options, total: response.total });
  };

  const onUpload = async () => {
    if (!files.length) return;
    setUploading(true);
    try {
      const result = await upload(files);
      setUploading(false);
      onSetUploads(result, true);
      setOptions({ ...options, total: result.length + result.length });
      setShowUploader(false);
      setFiles([]);
    } catch (error) {
      setUploading(false);
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchUploads();
  }, []);

  if (!currentEstablishment) return null;

  return (
    <>
      <div>
        {["images", "videos", "audio", "other"].map((type) => (
          <div className="mb-3">
            <h2 className="mb-2">{type}</h2>
            <ul
              // role="list"
              className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-5 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-6"
            >
              {uploads[type].length !== 0 ? (
                uploads[type].map((upload) => (
                  <div
                    onClick={() => {
                      setCurrentFile(upload);
                    }}
                  >
                    <UploadPageCellEachLayout name={upload.originalname} key={upload.key} source={publicUrl + upload.key} current={undefined} file={upload} />
                  </div>
                ))
              ) : (
                <div>No {type} found</div>
              )}
            </ul>
          </div>
        ))}

        <hr className=" mb-2 mt-2" />
        <p>
          Total files: {currentLength} / {options.total}
        </p>
      </div>

      {showUploader && (
        <>
          <div className="sidebar-right relative  p-3 ">
            <FilePond
              files={files}
              // maxFiles={1}
              onupdatefiles={setFiles}
              allowMultiple={true}
              maxFiles={5}
              labelIdle='Drag & Drop your file or <span class="filepond--label-action">Browse</span>'
            />
            <Button disabled={uploading} onClick={onUpload} className="absolute bottom-4">
              <span>Upload</span>
            </Button>
          </div>
          <div onClick={() => setShowUploader(false)} className="sidebar-overlay"></div>
        </>
      )}

      {uploading && (
        <div style={{ zIndex: 99999 }} className="slideInLeft fixed right-5 top-5 rounded-lg  bg-gray-200 p-4 font-semibold shadow-md">
          <p>Uploading...</p>
        </div>
      )}
    </>
  );
};

export default UploadPageComponentView;
