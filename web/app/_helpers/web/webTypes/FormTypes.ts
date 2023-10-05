import { CSSProperties } from "styled-components";

type hiddenDisabledParams = {
  model: any;
  field: FieldsType;
  fields: FieldsType[];
};

type ComponentParams = hiddenDisabledParams & {
  onChange: (e, field) => void;
  errors: any;
  setFocusedModels: (focusedModels: any) => void;
  setErrors: (errors: any) => void;
};

export type FieldsType = {
  name: string;
  label?: string;
  placeholder?: string;
  title?: string;
  labelStyle?: CSSProperties;
  type: "input" | "textarea" | "select" | "nativeSelect" | "checkbox" | "radio" | "date" | "custom" | "toggle" | "file";
  subType?:
    | "text"
    | "number"
    | "email"
    | "password"
    | "phone"
    | "url"
    | "file"
    | "color"
    | "range"
    | "time"
    | "week"
    | "month"
    | "datetime-local"
    | "hidden"
    | "search"
    | "toggle";
  options?: {
    disabled?: boolean;
    value: string;
    label: string;
  }[];
  required?: boolean;
  disabled?: (props: hiddenDisabledParams) => boolean | boolean;
  className?: string;
  hidden?: (props: hiddenDisabledParams) => boolean | boolean;
  component?: (props: ComponentParams) => void;
  minLength?: number;
  maxLength?: number;
  multiple?: boolean;
  max?: number;
  min?: number;
  autoFocus?: boolean;
  pattern?: string;
  step?: number;
  rows?: number;
  cols?: number;
  wrap?: string;
  autoComplete?: string;
  autoCorrect?: string;
  autoCapitalize?: string;
  spellCheck?: string;
  description?: string;
  wrapperClassName?: string;
  defaultValue?: any;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (e: any) => void;
  onKeyPress?: (e: any) => void;
  onClick?: (e: any) => void;
  onDoubleClick?: (e: any) => void;
  onContextMenu?: (e: any) => void;
  onDrag?: (e: any) => void;
  onDragEnd?: (e: any) => void;
  onDragEnter?: (e: any) => void;
  onDragExit?: (e: any) => void;
  onDragLeave?: (e: any) => void;
  onDragOver?: (e: any) => void;
  onDragStart?: (e: any) => void;
  onDrop?: (e: any) => void;
  onMouseDown?: (e: any) => void;
  onMouseEnter?: (e: any) => void;
  onMouseLeave?: (e: any) => void;
  onMouseMove?: (e: any) => void;
  onMouseOut?: (e: any) => void;
  onMouseOver?: (e: any) => void;
  onMouseUp?: (e: any) => void;
  onScroll?: (e: any) => void;
  onWheel?: (e: any) => void;
  onCopy?: (e: any) => void;
  onCut?: (e: any) => void;
  onPaste?: (e: any) => void;
  onCompositionEnd?: (e: any) => void;
  onCompositionStart?: (e: any) => void;
  onCompositionUpdate?: (e: any) => void;
  onSelect?: (e: any) => void;
  onInput?: (e: any) => void;
  onInvalid?: (e: any) => void;
  onSubmit?: (e: any) => void;
  onReset?: (e: any) => void;
  onToggle?: (e: any) => void;
  onToggleOff?: (e: any) => void;
  onToggleOn?: (e: any) => void;
  onToggleChange?: (e: any) => void;
  onToggleClick?: (e: any) => void;
  onToggleDoubleClick?: (e: any) => void;
  onToggleContextMenu?: (e: any) => void;
  onToggleDrag?: (e: any) => void;
  onToggleDragEnd?: (e: any) => void;
  onToggleDragEnter?: (e: any) => void;
  onToggleDragExit?: (e: any) => void;
  onToggleDragLeave?: (e: any) => void;
  onToggleDragOver?: (e: any) => void;
  onToggleDragStart?: (e: any) => void;
  onToggleDrop?: (e: any) => void;
  onToggleMouseDown?: (e: any) => void;
  onToggleMouseEnter?: (e: any) => void;
  onToggleMouseLeave?: (e: any) => void;
  onToggleMouseMove?: (e: any) => void;
  onToggleMouseOut?: (e: any) => void;
  onToggleMouseOver?: (e: any) => void;
  onToggleMouseUp?: (e: any) => void;
  onToggleScroll?: (e: any) => void;
  onToggleWheel?: (e: any) => void;
  onToggleCopy?: (e: any) => void;
  onToggleCut?: (e: any) => void;
  onTogglePaste?: (e: any) => void;
  onToggleCompositionEnd?: (e: any) => void;
  onToggleCompositionStart?: (e: any) => void;
  onToggleCompositionUpdate?: (e: any) => void;
  onToggleSelect?: (e: any) => void;
  onToggleInput?: (e: any) => void;
  onToggleInvalid?: (e: any) => void;
  onToggleSubmit?: (e: any) => void;
  onToggleReset?: (e: any) => void;
  onToggleFocus?: (e: any) => void;
  onToggleBlur?: (e: any) => void;
};
