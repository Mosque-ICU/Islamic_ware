"use client";

import { errorMessage, handleErrors, handleSuccess, niceBytes } from "./formatters";
import { getCachData, gqlF, requestHandler } from "./requestHandler";

export async function upload(files, isPublic = true, maxSize = 23483023) {
  if (!files || files.length === 0) return;

  const user = await getCachData("currentUser", true);
  const formData = new FormData();

  let tooBigFiles = "";

  files.forEach((file) => {
    if (file.fileSize > maxSize) tooBigFiles += file.name + ", ";
    else formData.append("files", file.source);
  });

  if (tooBigFiles) {
    errorMessage(`The following files are above ${niceBytes(maxSize)} and will not be uploaded: ${tooBigFiles}`);
  }

  const result = await fetch(process.env.FILE_URL + `upload?id=${user?.userId}&public=${isPublic}`, {
    method: "POST",
    body: formData,
    credentials: "include",
  })
    .then((response) => response.json())
    .then((data) => {
      if (data?.error) {
        errorMessage(data.error);
        throw data.error;
      }
      handleSuccess("Files uploaded successfully");
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
      errorMessage("Something went wrong");
      throw error;
    });

  return result;
}

export const getFiles = async (page = 1, lastId = 0) => {
  const response = await requestHandler({
    shouldCache: lastId === 0 ? true : false,
    returnCache: true,
    cacheKey: `files-${lastId}`,
    body: gqlF(
      `  query FileQuery($page: Int!) {
            paginatedFiles(page: $page, limit: 200 , lastId : ${lastId} ) {
            files {
              id
              name
              key
              folderId
              size
              type
              public
              userId
              createdAt
              updatedAt
            }
            total
          }
        }`,
      { page: page }
    ),
  });

  if (response?.data?.paginatedFiles) {
    return response.data.paginatedFiles;
  } else {
    handleErrors(response);
    throw response;
  }
};

export const getRecentlyViewedFiles = async (page = 1, lastId = 0) => {
  const response = await requestHandler({
    shouldCache: lastId === 0 ? true : false,
    returnCache: true,
    cacheKey: `paginatedViewedFiles-${lastId}`,
    body: gqlF(
      `  query FileQuery($page: Int!) {
            paginatedViewedFiles(page: $page, limit: 200 , lastId : ${lastId} ) {
            files {
              id
              name
              key
              folderId
              size
              type
              public
              userId
              createdAt
              updatedAt
            }
            total
          }
        }`,
      { page: page }
    ),
  });

  if (response?.data?.paginatedFiles) {
    return response.data.paginatedFiles;
  } else {
    handleErrors(response);
    throw response;
  }
};

export const filterFiles = async (name) => {
  const response = await requestHandler({
    cacheKey: `searchFiles-${name}`,
    body: gqlF(
      `  query FilefilterQuery($name: String!) {
            searchFiles(name $name ) {
              id
              name
              key
              folderId
              size
              type
              public
              userId
              createdAt
              updatedAt
          }
        }`,
      { name: name }
    ),
  });
  if (response?.data) {
    return response.data;
  } else {
    handleErrors(response);
    throw response;
  }
};

export const updateFile = async (id, data) => {
  const input = { ...data };
  delete data.cat;
  const response = await requestHandler({
    body: gqlF(
      `  metuation UpdateFilsMut($id: Int!,$input: UpdateFileInput!) {
            updateFiles(id: $id, input: $input) {
              success
            }
            `,
      { id: id, input: input }
    ),
  });

  if (response?.success) {
    return response;
  } else {
    handleErrors(response);
    throw response;
  }
};

export const deletePublicFile = async (fileKey) => {
  const user = await getCachData("currentUser", true);

  const result = (await fetch(process.env.FILE_URL + `delete-public-file/${fileKey}?id=${user?.userId}`, {
    method: "GET",
    credentials: "include",
  })) as any;
  const data = await result.json();

  if (data?.error) {
    errorMessage(data.error);
    throw data.error;
  }

  return data;
};

export const deletePrivateFile = async (fileKey) => {
  const user = await getCachData("currentUser", true);

  const result = (await fetch(process.env.FILE_URL + `delete-private-file/${fileKey}?id=${user?.userId}`, {
    method: "GET",
    credentials: "include",
  })) as any;
  const data = await result.json();

  if (data?.error) {
    errorMessage(data.error);
    throw data.error;
  }

  return data;
};

export const makeFilePublic = async (fileKey) => {
  const user = await getCachData("currentUser", true);

  const result = (await fetch(process.env.FILE_URL + `make-file-public/${fileKey}?id=${user?.userId}`, {
    method: "GET",
    credentials: "include",
  })) as any;
  const data = await result.json();

  if (data?.error) {
    errorMessage(data.error);
    throw data.error;
  }

  return data;
};

export const makeFilePrivate = async (fileKey) => {
  const user = await getCachData("currentUser", true);

  const result = (await fetch(process.env.FILE_URL + `make-file-private/${fileKey}?id=${user?.userId}`, {
    method: "GET",
    credentials: "include",
  })) as any;
  const data = await result.json();

  if (data?.error) {
    errorMessage(data.error);
    throw data.error;
  }

  return data;
};

export function downloadFile(url, fileName) {
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    })
    .catch((error) => {
      console.error("Error downloading file:", error);
    });
}

export const sendEmail = async (body) => {
  const user = await getCachData("currentUser", true);

  const result = await fetch(process.env.FILE_URL + `send-email?id=${user?.userId}`, {
    method: "POST",
    body: JSON.stringify(body),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await result.json();

  if (data?.error) {
    return errorMessage(data?.error || "Something went wrong");
  }

  handleSuccess("Email sent successfully");
  return data;
};
