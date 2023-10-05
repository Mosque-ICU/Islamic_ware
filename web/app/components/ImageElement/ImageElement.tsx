"use client";
import React from "react";
import ElementMenuWrapper from "../Craftjs/area/ElementMenuWrapper";
import FormGroup from "../Form/FormGroup";

function ImageElement({ element, onChange, showEditMenu, setShowEditMenu, targetRef, setTransform }) {
  const [errors, setErrors] = React.useState({});

  return (
    <>
      <img
        className="h-full w-full media-wrapper "
        src={element.data?.isUrl ? element.data?.url : element.data?.file || "https://via.placeholder.com/150"}
        loading="lazy"
        alt={element.data?.alt || "image"}
        style={{
          borderRadius: element?.data?.borderRadius ? element?.data?.borderRadius + "px" : "0px",
          height: element?.size?.height || "100%",
          objectFit: element?.data?.objectFit || "cover",
          opacity: element?.data?.opacity || 1,
          filter: element?.data?.filter && element?.data?.filterValue !== "none" ? `${element?.data?.filter}(${element?.data?.filterValue || "50"}%)` : "none",
          boxShadow: element?.data?.shadowColor ? `${element?.data?.shadowColor} 0px 0px 10px ${element?.data?.shadowOpacity || 0.5}` : "none",
        }}
      />
      {showEditMenu && (
        <ElementMenuWrapper
          close={setShowEditMenu}
          element={element}
          targetRef={targetRef}
          options={[
            {
              key: "Content",
              component: (
                <FormGroup
                  className="w-full"
                  altSetModel={true}
                  errors={errors}
                  setErrors={setErrors}
                  fields={[
                    {
                      name: "isUrl",
                      title: "Image URL ?",
                      type: "checkbox",
                    },
                    {
                      name: "url",
                      placeholder: "Image URL",
                      type: "input",
                      maxLength: 1000,
                      hidden: ({ model }) => !model.isUrl,
                    },
                    {
                      name: "altText",
                      placeholder: "Alt text",
                      type: "input",
                      maxLength: 100,
                    },
                    {
                      name: "objectFit",
                      placeholder: "Positioning",
                      type: "nativeSelect",
                      options: [
                        { label: "Cover", value: "cover" },
                        { label: "Contain", value: "contain" },
                        { label: "Fill", value: "fill" },
                        { label: "None", value: "none" },
                        { label: "Scale down", value: "scale-down" },
                      ],
                    },
                    {
                      type: "custom",
                      name: "zindex",
                      component: () => (
                        <>
                          <p>Elevation/Z-index</p>
                          <input
                            className="base-input"
                            type="number"
                            max="10"
                            min="0"
                            value={element.position?.z || 0}
                            onChange={(e) => {
                              setTransform({
                                ...element.position,
                                z: parseInt(e.target.value),
                              });
                            }}
                          />
                        </>
                      ),
                    },
                  ]}
                  model={element.data}
                  setModel={(model) => {
                    onChange(model);
                  }}
                />
              ),
            },
            {
              key: "Style",
              component: (
                <FormGroup
                  className="w-full"
                  altSetModel={true}
                  errors={errors}
                  setErrors={setErrors}
                  fields={[
                    {
                      name: "borderRadius",
                      placeholder: "Border radius",
                      type: "input",
                      subType: "number",
                      max: 100,
                      min: 0,
                    },
                    {
                      name: "opacity",
                      placeholder: "Opacity",
                      type: "input",
                      subType: "number",
                      max: 1,
                      min: 0,
                      step: 0.1,
                    },
                    {
                      name: "shadowColor",
                      label: "Shadow color",
                      type: "input",
                      subType: "color",
                      className: "w-full",
                    },
                    {
                      name: "shadowWidth",
                      placeholder: "Shadow width",
                      type: "input",
                      subType: "number",
                      max: 100,
                      hidden: ({ model }) => !model?.shadowColor,
                      min: 0,
                    },
                    {
                      name: "filter",
                      placeholder: "Filter",
                      type: "nativeSelect",
                      options: [
                        { label: "None", value: "none" },
                        { label: "Blur", value: "blur" },
                        { label: "Brightness", value: "brightness" },
                        { label: "Contrast", value: "contrast" },
                        { label: "Grayscale", value: "grayscale" },
                        { label: "Hue rotate", value: "hue-rotate" },
                        { label: "Invert", value: "invert" },
                        { label: "Saturate", value: "saturate" },
                        { label: "Sepia", value: "sepia" },
                      ],
                    },
                    {
                      name: "filterValue",
                      placeholder: "Filter percentage",
                      type: "input",
                      subType: "number",
                      max: 1000,
                      min: 0,
                      hidden: ({ model }) => !model.filter || model.filter === "",
                    },
                  ]}
                  model={element.data}
                  setModel={(model) => {
                    onChange(model);
                  }}
                />
              ),
            },
          ]}
        ></ElementMenuWrapper>
      )}
    </>
  );
}

export default ImageElement;
