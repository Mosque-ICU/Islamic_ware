import React from "react";
import { Button } from "./button";

export default {
  title: "Components/Button",
  component: Button,
};

interface ButtonProps {
  label: string;
}

export const ButtonComponent = (args: ButtonProps) => (
  <Button {...args}>{args.label}</Button>
);

ButtonComponent.args = {
  label: "Continue",
};
