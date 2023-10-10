import Select from "@/app/components/Select/Select";
import React from "react";

export const ToolbarDropdown = ({ title, value, onChange, options }: any) => {
  return <Select placeholder={title} value={value} options={options} onChange={(e) => onChange(e.target.value)} />;
};
