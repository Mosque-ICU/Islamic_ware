"use client";

import React from "react";
// import { navigate, routes } from "@redwoodjs/router";

import toast from "react-hot-toast";

import humanize from "humanize-string";

export let fomrWidth = 400;

export const setFormWidth = (width: number) => {
  fomrWidth = width;
};

export let reactRootIds = [];

export const getReactRoots = () => {
  return reactRootIds;
};

export const setReactRoots = (ids: never[]) => {
  reactRootIds = ids;
};

export const setNewRootId = (id: any) => {
  reactRootIds.push(id);
};

const MAX_STRING_LENGTH = 150;

export const formatEnum = (values: string | any[]) => {
  let output = "";

  if (Array.isArray(values)) {
    const humanizedValues = values.map((value) => humanize(value));
    output = humanizedValues.join(", ");
  } else if (typeof values === "string") {
    output = humanize(values);
  }

  return output;
};

export const publicId = (currentEstablishment: { name: string }) => {
  if (!currentEstablishment?.name) return null;
  return currentEstablishment.name.replace(/\s/g, "");
};

export const jsonDisplay = (obj: any) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  );
};

export const truncate = (value: string) => {
  let output = value?.toString() ?? "";

  if (output.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + "...";
  }

  return output;
};

export const jsonTruncate = (obj: any) => {
  return truncate(JSON.stringify(obj, null, 2));
};

export const timeTag = (dateTime: string | number | Date | undefined) => {
  let output = "";

  if (dateTime) {
    //@ts-ignore
    output = (
      <time dateTime={dateTime} title={dateTime}>
        {new Date(dateTime).toUTCString()}
      </time>
    );
  }

  return output;
};

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export const checkboxInputTag = (checked: boolean | undefined) => {
  return <input type="checkbox" checked={checked} disabled />;
};

export const parseDataIfString = (value: string) => {
  if (typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }
  return value;
};

export const copyToClipboard = (textToCopy: string, cb: () => void) => {
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      cb();
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
};

const checkUnAuth = (message: string) => {
  if (message === "Unauthenticated") {
    // navigate(routes.home());
    return null;
  }
};

export const handleSuccess = (successMessage: string) => {
  toast.success(successMessage || "Success");
};

export const errorMessage = (error: string) => {
  toast.error(error);
};

export const handleErrors = (response: { errors: any; message: string }) => {
  if (response?.errors) {
    checkUnAuth(response.message);
    toast.error(response.message || "Something went wrong");
  } else {
    toast.error("Something went wrong");
  }
};

const units = ["bytes", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];

export function niceBytes(x: string | number) {
  let l = 0,
    n = parseInt(x, 10) || 0;

  while (n >= 1024 && ++l) {
    n = n / 1024;
  }

  return n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + units[l];
}

export const isPercentage = (val: string) => typeof val === "string" && val.indexOf("%") > -1;

export const percentToPx = (value: any, comparativeValue: number) => {
  if (value.indexOf("px") > -1 || value === "auto" || !comparativeValue) return value;
  const percent = parseInt(value);
  return (percent / 100) * comparativeValue + "px";
};
export const pxToPercent = (value: any, comparativeValue: number) => {
  const val = (Math.abs(value) / comparativeValue) * 100;
  if (value < 0) return -1 * val;
  else return Math.round(val);
};
export const getElementDimensions = (element: HTMLElement) => {
  const computedStyle = getComputedStyle(element);

  let height = element.clientHeight,
    width = element.clientWidth; // width with padding

  height -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
  width -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);

  return {
    width,
    height,
  };
};

export const capitalize = (text: string) => {
  if (!text) return text;
  return text[0].toUpperCase() + text.substr(1, text.length);
};
export const weightDescription = (weight: number) => (weight === 400 ? "Regular" : weight === 500 ? "Medium" : "Bold");

export function encodeNestedJsonToBase64(data: string) {
  const base64Str = btoa(data);
  return base64Str;
}

export function decodeBase64ToNestedJson(base64Str: string) {
  const jsonStr = atob(base64Str);
  return jsonStr;
}

export const checkRequiredAndErrs = (model: any, setErrors: (arg0: (errors: any) => any) => any, errors) => {
  console.log("model", model, errors);
  for (const key of Object.keys(model)) {
    if (!model[key]) {
      return setErrors((errors: any) => ({
        ...errors,
        [key]: `${key} is required`,
      }));
    }
  }

  for (const key of Object.keys(errors)) {
    console.log("key", key);
    if (errors[key]) return false;
  }

  return true;
};

export const elevationOptions = [
  { value: 0, label: "0" },
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
  { value: 9, label: "9" },
  { value: 10, label: "10" },
];
