import React from "react";
import { ToolbarDropdown } from "./ToolbarDropdown";
import { ToolbarTextInput } from "./ToolbarTextInput";

export type ToolbarItemProps = {
  prefix?: string;
  label?: string;
  full?: boolean;
  propKey?: string;
  index?: number;
  children?: React.ReactNode;
  type: string;
  onChange?: (value: any) => any;
};

export const ToolbarItem = ({ full = false, propKey, type, onChange, index, ...props }: ToolbarItemProps) => {
  return null;
  // <div className={`mb-2 ${full ? "col-span-12" : "col-span-6"}`}>
  //   {["text", "color", "bg", "number"].includes(type) ? (
  //     <ToolbarTextInput
  //       {...props}
  //       type={type}
  //       value={value}
  //       onChange={(value) => {
  //         setProp((props: any) => {
  //           if (Array.isArray(propValue)) {
  //             props[propKey][index] = onChange ? onChange(value) : value;
  //           } else {
  //             props[propKey] = onChange ? onChange(value) : value;
  //           }
  //         }, 500);
  //       }}
  //     />
  //   ) : type === "slider" ? (
  //     <div>
  //       {props.label && <h4 className="text-light-gray-2 text-sm">{props.label}</h4>}
  //       <input
  //         type="range"
  //         className="w-full"
  //         value={parseInt(value) || 0}
  //         onChange={(event) => {
  //           const sliderValue = event.target.value;
  //           setProp((props: any) => {
  //             if (Array.isArray(propValue)) {
  //               props[propKey][index] = onChange ? onChange(sliderValue) : sliderValue;
  //             } else {
  //               props[propKey] = onChange ? onChange(sliderValue) : sliderValue;
  //             }
  //           }, 1000);
  //         }}
  //       />
  //     </div>
  //   ) : type === "radio" ? (
  //     <div>
  //       {props.label && <h4 className="text-light-gray-2 text-sm">{props.label}</h4>}
  //       <div className="flex">
  //         {React.Children.map(props.children, (child, childIndex) => (
  //           <label className="mr-2">
  //             <input
  //               type="radio"
  //               className="mr-1"
  //               value={child}
  //               checked={child === value}
  //               onChange={(event) => {
  //                 const radioValue = event.target.value;
  //                 setProp((props: any) => {
  //                   props[propKey] = onChange ? onChange(radioValue) : radioValue;
  //                 });
  //               }}
  //             />
  //             {child}
  //           </label>
  //         ))}
  //       </div>
  //     </div>
  //   ) : type === "select" ? (
  //     <ToolbarDropdown value={value || ""} onChange={(value) => setProp((props: any) => (props[propKey] = onChange ? onChange(value) : value))} {...props} />
  //   ) : null}
  // </div>
};
