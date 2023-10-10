import React, { useState } from "react";
import styled from "styled-components";

import { SidebarItem } from "./SidebarItem";

// import CustomizeIcon from "src/assets/icons/customize.svg";
// import LayorsIcons from "src/assets/icons/layers.svg";
import FormGroup from "@/app/components/Form/FormGroup";

import { SwatchIcon, LinkIcon, PhotoIcon, VideoCameraIcon, MapIcon } from "@heroicons/react/20/solid";
import { RectangleGroupIcon, RectangleStackIcon } from "@heroicons/react/24/outline";
import Button from "@/app/components/Button/Button";
import { Sliders, Square } from "react-feather";

export const SidebarDiv = styled.div<{ enabled: boolean }>`
  width: 320px;
  opacity: ${(props) => (props.enabled ? 1 : 0)};
  background: transparent;
  margin-right: ${(props) => (props.enabled ? 0 : -280)}px;
  border-radius: 6px;
  overflow: auto;
`;

export const SectionSidebar = ({ setEditSectionIndex, onDataChange, sidebarIndex, currentPage }) => {
  const [visible, setVisible] = useState({
    background: true,
    colours: false,
    layers: false,
    animations: false,
    sizing: false,
    visibliity: false,
  });

  const [errors, setErrors] = useState({});

  return (
    <SidebarDiv enabled={true} className="sidebar slideLeft">
      <span
        data-inview="slideInLeft"
        onClick={() => setEditSectionIndex(-1)}
        className="relative relative left-[20px] top-[15px] z-10  cursor-pointer  font-semibold text-gray-500"
      >
        Close
      </span>
      <div className="slideLeft mt-8 flex h-full flex-col px-2">
        <SidebarItem
          // @ts-ignore
          icon={"/icons/customize.svg"}
          title={"Background & Styles"}
          height="h-fit"
          visible={visible.background}
          onChange={(val) => setVisible({ ...visible, background: val })}
        >
          <div className="mt-5 px-3">
            <FormGroup
              className="relative mt-2 justify-between"
              altSetModel={true}
              errors={errors}
              setErrors={setErrors}
              fields={[
                {
                  name: "backgroundType",
                  label: "Type",
                  type: "toggle",
                  iconOptions: [
                    { value: "link", icon: <LinkIcon /> },
                    { value: "color", icon: <SwatchIcon /> },
                    { value: "image", icon: <PhotoIcon /> },
                    { value: "video", icon: <VideoCameraIcon /> },
                    { value: "map", icon: <MapIcon /> },
                  ],
                  wrapperHorizontal: true,
                },

                {
                  name: "backgroundImage",
                  placeholder: "Image url",
                  label: "Image",
                  type: "input",
                  maxLength: 1000,
                  hidden: ({ model }) => model.backgroundType !== "link",
                },
                {
                  name: "backgroundColor",
                  label: "Colour",
                  type: "input",
                  subType: "color",
                  className: "w-[140px]",
                  wrapperHorizontal: true,
                  hidden: ({ model }) => model.backgroundType !== "color",
                },
                {
                  name: "backgroundSize",
                  label: "Format",
                  type: "nativeSelect",
                  options: [
                    { value: "", label: "Cover" },
                    { value: "contain", label: "Contain" },
                    { value: "auto", label: "Auto" },
                  ],
                  wrapperHorizontal: true,
                },
                {
                  name: "backgroundParallax",
                  label: "Parallax",
                  type: "nativeSelect",
                  defaultValue: "",
                  wrapperHorizontal: true,
                  options: [
                    { value: "", label: "none" },
                    { value: "Animate", label: "Animate" },
                    { value: "fixed", label: "Fixed" },
                  ],
                },
                {
                  name: "opacity",
                  label: "Opacity",
                  type: "input",
                  subType: "number",
                  className: "w-[140px]",
                  max: 1,
                  min: 0,
                  step: 0.05,
                  wrapperHorizontal: true,
                  defaultValue: 1,
                },
              ]}
              model={currentPage?.content[sidebarIndex]?.data || {}}
              setModel={function (model: any): void {
                onDataChange(model);
              }}
            />
            {/* <p>Sizes</p>

  
   
          </div>
        </SidebarItem>
        <SidebarItem
          // @ts-ignore
          icon={"/icons/layers.svg"}
          title="Layers"
          height={!toolbarVisible ? "full" : "45%"}
          visible={layersVisible}
          onChange={(val) => setLayerVisible(val)}
        >
          <div className="">{/* <Layers expandRootOnLoad={true} /> */}
          </div>
        </SidebarItem>

        <SidebarItem
          // @ts-ignore
          icon={"/icons/customize.svg"}
          title={"Colours"}
          height="h-fit"
          visible={visible.colours}
          onChange={(val) => setVisible({ ...visible, colours: val })}
        >
          <div className="mt-5 px-3">
            <FormGroup
              className="relative mt-2 justify-between"
              altSetModel={true}
              errors={errors}
              setErrors={setErrors}
              fields={[
                {
                  name: "backgroundOverlay",
                  label: "Overlay",
                  type: "input",
                  subType: "color",
                  className: "w-[140px]",
                  wrapperHorizontal: true,
                },
                {
                  name: "borderType",
                  label: "Border Type",
                  type: "nativeSelect",
                  options: [
                    { value: "", label: "None" },
                    { value: "solid", label: "Solid" },
                    { value: "dashed", label: "Dashed" },
                    { value: "dotted", label: "Dotted" },
                  ],
                  wrapperHorizontal: true,
                },

                {
                  name: "borderColor",
                  label: "Border Color",
                  type: "input",
                  subType: "color",
                  className: "w-[140px]",
                  wrapperHorizontal: true,
                  hidden: ({ model }) => !model.borderType,
                },
                {
                  name: "borderWidth",
                  label: "Border Width",
                  defaultValue: 1,
                  type: "input",
                  subType: "number",
                  className: "w-[140px]",
                  max: 10,
                  wrapperHorizontal: true,
                  hidden: ({ model }) => !model.borderType,
                },
                {
                  name: "boxShadow",
                  label: "Shadow",
                  type: "input",
                  subType: "color",
                  className: "w-[140px]",
                  wrapperHorizontal: true,
                },
                {
                  name: "boxShadowWidth",
                  label: "Shadow Width",
                  defaultValue: 5,
                  type: "input",
                  subType: "number",
                  className: "w-[140px]",
                  step: 0.5,
                  min: 0,
                  max: 10,
                  wrapperHorizontal: true,
                  hidden: ({ model }) => !model.boxShadow,
                },
              ]}
              model={currentPage?.content[sidebarIndex]?.data || {}}
              setModel={function (model: any): void {
                onDataChange(model);
              }}
            />
          </div>
        </SidebarItem>

        <SidebarItem
          // @ts-ignore
          icon={"/icons/customize.svg"}
          title={"Sizing"}
          height="h-fit"
          visible={visible.sizing}
          onChange={(val) => setVisible({ ...visible, sizing: val })}
        >
          <div className="mt-5 px-3">
            <FormGroup
              className="relative mt-2 justify-between"
              altSetModel={true}
              errors={errors}
              setErrors={setErrors}
              fields={[
                {
                  name: "height",
                  label: "Height (px)",
                  type: "input",
                  subType: "number",
                  className: "w-[140px]",
                  max: 10000,
                  min: 0,
                  wrapperHorizontal: true,
                  defaultValue: 600,
                },
                {
                  name: "padding",
                  label: "Paddings",
                  labelClass: "font-semibold",
                  type: "toggle",
                  iconOptions: [
                    { value: "full", icon: <Square className="w-4 h-4 relative top-[1px] left-[1px]" /> },

                    { value: "side", icon: <Sliders className="w-4 h-4 relative top-[1px] left-[1px]" /> },
                  ],
                  wrapperHorizontal: true,
                },
                {
                  name: "paddingFull",
                  label: "Padding size (px)",
                  type: "input",
                  subType: "number",
                  className: "w-[140px]",
                  wrapperHorizontal: true,
                  hidden: ({ model }) => model.padding !== "full",
                },
                {
                  name: "paddingTop",
                  label: "Padding top (px)",
                  type: "input",
                  wrapperHorizontal: true,
                  subType: "number",
                  hidden: ({ model }) => model.padding !== "side",
                },
                {
                  name: "paddingRight",
                  label: "Padding right (px)",
                  wrapperHorizontal: true,
                  type: "input",
                  subType: "number",
                  hidden: ({ model }) => model.padding !== "side",
                },
                {
                  name: "paddingBottom",
                  label: "Padding bottom (px)",
                  type: "input",
                  subType: "number",
                  wrapperHorizontal: true,

                  hidden: ({ model }) => model.padding !== "side",
                },
                {
                  name: "paddingLeft",
                  label: "Padding left (px)",
                  type: "input",
                  wrapperHorizontal: true,

                  subType: "number",
                  hidden: ({ model }) => model.padding !== "side",
                },
                {
                  name: "margin",
                  label: "Margins",
                  labelClass: "font-semibold",
                  type: "toggle",
                  iconOptions: [
                    { value: "full", icon: <Square className="w-4 h-4 relative top-[1px] left-[1px]" /> },
                    { value: "side", icon: <Sliders className="w-4 h-4 relative top-[1px] left-[1px]" /> },
                  ],
                  wrapperHorizontal: true,
                },

                {
                  name: "marginFull",
                  label: "Margin size (px)",
                  type: "input",
                  defaultValue: 0,
                  subType: "number",
                  className: "w-[140px]",
                  wrapperHorizontal: true,
                  hidden: ({ model }) => model.margin !== "full",
                },
                {
                  name: "marginTop",
                  label: "Margin top (px)",
                  type: "input",
                  subType: "number",
                  defaultValue: 0,
                  className: "w-[140px]",
                  wrapperHorizontal: true,
                  hidden: ({ model }) => model.margin !== "side",
                },
                {
                  name: "marginRight",
                  label: "Margin right (px)",
                  type: "input",
                  subType: "number",
                  defaultValue: 0,
                  className: "w-[140px]",
                  wrapperHorizontal: true,
                  hidden: ({ model }) => model.margin !== "side",
                },
                {
                  name: "marginBottom",
                  label: "Margin bottom (px)",
                  type: "input",
                  subType: "number",
                  defaultValue: 0,
                  className: "w-[140px]",
                  wrapperHorizontal: true,
                  hidden: ({ model }) => model.margin !== "side",
                },
                {
                  name: "marginLeft",
                  label: "Margin left (px)",
                  type: "input",
                  subType: "number",
                  defaultValue: 0,
                  className: "w-[140px]",
                  wrapperHorizontal: true,
                  hidden: ({ model }) => model.margin !== "side",
                },
              ]}
              model={currentPage?.content[sidebarIndex]?.data || {}}
              setModel={function (model: any): void {
                onDataChange(model);
              }}
            />
          </div>
        </SidebarItem>

        <SidebarItem
          // @ts-ignore
          icon={"/icons/customize.svg"}
          title={"Animations"}
          height="h-fit"
          visible={visible.animations}
          onChange={(val) => setVisible({ ...visible, animations: val })}
        >
          <div className="mt-5 px-3">
            <FormGroup
              className="relative mt-2 "
              altSetModel={true}
              errors={errors}
              setErrors={setErrors}
              fields={[
                {
                  name: "animation",
                  label: "Animation",
                  type: "nativeSelect",
                  options: [
                    { value: "", label: "None" },
                    { value: "fadeIn", label: "Fade In" },
                    { value: "slideLeft", label: "Slide Left" },
                    { value: "scaleIn", label: "Scale In" },
                    { value: "scaleOut", label: "Scale Out" },
                    { value: "slideIn", label: "Slide In" },
                    { value: "slideOut", label: "Slide Out" },
                    { value: "slideInRight", label: "Slide In Right" },
                    { value: "slideOutRight", label: "Slide Out Right" },
                    { value: "slideInLeft", label: "Slide In Left" },
                    { value: "slideOutLeft", label: "Slide Out Left" },
                    { value: "slideInUp", label: "Slide In Up" },
                    { value: "slideOutUp", label: "Slide Out Up" },
                    { value: "slideInDown", label: "Slide In Down" },
                    { value: "slideOutDown", label: "Slide Out Down" },
                  ],
                  wrapperHorizontal: true,
                },
                {
                  name: "animationDuration",
                  label: "Duration (s)",
                  type: "input",
                  subType: "number",
                  className: "w-[140px]",
                  wrapperHorizontal: true,
                  defaultValue: 1,
                  max: 10,
                  step: 0.1,
                  hidden: ({ model }) => !model.animation,
                },

                {
                  name: "animationDelay",
                  label: "Delay (s)",
                  type: "input",
                  subType: "number",
                  className: "w-[140px]",
                  wrapperHorizontal: true,
                  defaultValue: 0,
                  max: 10,
                  step: 0.1,
                  hidden: ({ model }) => !model.animation,
                },
                {
                  name: "",
                  type: "custom",
                  hidden: ({ model }) => !model.animation,
                  component: ({ model }: any) => {
                    return (
                      <Button
                        className=""
                        size="sm"
                        onClick={() => {
                          onDataChange({ ...model, animation: "" });
                          setTimeout(() => {
                            onDataChange({ ...model, animation: model.animation });
                          }, 0);
                        }}
                      >
                        Play Animation
                      </Button>
                    );
                  },
                },
              ]}
              model={currentPage?.content[sidebarIndex]?.data || {}}
              setModel={function (model: any): void {
                onDataChange(model);
              }}
            />
          </div>
        </SidebarItem>

        <SidebarItem
          icon={"/icons/customize.svg"}
          title={"Visibility"}
          height="h-fit"
          visible={visible.visibliity}
          onChange={(val) => setVisible({ ...visible, visibliity: val })}
        >
          <div className="mt-5 px-3">
            <FormGroup
              className="relative mt-2 "
              altSetModel={true}
              errors={errors}
              setErrors={setErrors}
              fields={[
                {
                  name: "hideCondition",
                  label: "Hide condition",
                  type: "nativeSelect",
                  wrapperHorizontal: true,
                  options: [
                    { value: "", label: "None" },
                    { value: "hideMobile", label: "Hide on mobile" },
                    { value: "hideDesktop", label: "Hide on desktop" },
                  ],
                },
              ]}
              model={currentPage?.content[sidebarIndex]?.data || {}}
              setModel={function (model: any): void {
                onDataChange(model);
              }}
            />
          </div>
        </SidebarItem>

        {/* <Carbonads /> */}
      </div>
    </SidebarDiv>
  );
};
