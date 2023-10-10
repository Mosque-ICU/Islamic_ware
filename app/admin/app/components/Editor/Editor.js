"use client";

import { Component } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
// import "quill/dist/quill.bubble.css"; // adding css styles for `snow` theme
import { SnowTheme } from "quill-color-picker-enhance";
import FormGroup from "../Form/FormGroup";

import ImageResize from "quill-image-resize-module-react";

import ElementMenuWrapper from "../Craftjs/area/ElementMenuWrapper";

Quill.register("themes/snow-quill-color-picker-enhance", SnowTheme);

Quill.register("modules/imageResize", ImageResize);

const fontSizeArr = [
  "calc(0.75em + 0.5vw)",
  "calc(0.875em + 0.5vw)",
  "calc(1em + 0.5vw)",
  "calc(1.125em + 0.5vw)",
  "calc(1.25em + 0.5vw)",
  "calc(1.375em + 0.5vw)",
  "calc(1.5em + 0.5vw)",
  "calc(1.75em + 0.5vw)",
  "calc(2em + 0.5vw)",
  "calc(2.25em + 0.5vw)",
  "calc(2.5em + 0.5vw)",
  "calc(2.75em + 0.5vw)",
  "calc(3em + 0.5vw)",
  "calc(3.25em + 0.5vw)",
  "calc(3.5em + 0.5vw)",
  "calc(3.75em + 0.5vw)",
  "calc(4em + 0.5vw)",
  "calc(4.25em + 0.5vw)",
  "calc(4.5em + 0.5vw)",
  "calc(4.75em + 0.5vw)",
  "calc(5em + 0.5vw)",
  "calc(5.25em + 0.5vw)",
  "calc(5.5em + 0.5vw)",
  "calc(5.75em + 0.5vw)",
  "calc(6em + 0.5vw)",
  "calc(6.25em + 0.5vw)",
  "calc(6.5em + 0.5vw)",
  "calc(6.75em + 0.5vw)",
  "calc(7em + 0.5vw)",
  "calc(7.25em + 0.5vw)",
  "calc(7.5em + 0.5vw)",
  "calc(7.75em + 0.5vw)",
  "calc(8em + 0.5vw)",
];

// const fontSizeArr = [
//   "8px",
//   "10px",
//   "12px",
//   "14px",
//   "16px",
//   "18px",
//   "20px",
//   "22px",
//   "24px",
//   "26px",
//   "28px",
//   "30px",
//   "32px",
//   "34px",
//   "36px",
//   "38px",
//   "40px",
//   "42px",
//   "44px",
//   "46px",
//   "48px",
//   "50px",
//   "52px",
//   "54px",
//   "56px",
//   "58px",
//   "60px",
//   "62px",
//   "64px",
//   "66px",
//   "68px",
//   "70px",
//   "72px",
//   "74px",
//   "76px",
//   "78px",
//   "80px",
//   "82px",
//   "84px",
//   "86px",
//   "88px",
//   "90px",
//   "92px",
//   "94px",
//   "96px",
//   "98px",
//   "100px",
// ];

var Size = Quill.import("attributors/style/size");
Size.whitelist = fontSizeArr;
Quill.register(Size, true);

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "align",
  "color",
  "background",
  "script",
  "code-block",
];

/*
 * Simple editor component that takes placeholder text as a prop
 */
class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: "", showHtml: true, errors: {} };
    this.handleChange = this.handleChange.bind(this);
    this.quillRef = null;
    this.reactQuillRef = null;
    this.handleChange = this.handleChange.bind(this);
    this.attachQuillRefs = this.attachQuillRefs.bind(this);
  }

  handleChange(html, delta, source, editor) {
    // this.setState({ editorHtml: html })#
    this.props.onChange(html);
  }

  componentDidMount() {
    //get the quill instance
    // const quill = this.reactQuillRef.getModule("toolbar").addHandler("color", (value) => {
    //   // if the user clicked the custom-color option, show a prompt window to get the color
    //   if (value == "custom-color") {
    //     value = prompt("Enter Hex/RGB/RGBA");
    //   }
    //   quillEditor.format("color", value);
    // });
  }

  componentDidUpdate(prevProps) {
    this.attachQuillRefs();

    if (prevProps.toggleHtml !== this.props.toggleHtml && !this.props.toggleHtml) {
      console.log("toggleHtml changed");
      setTimeout(() => {
        // this.reactQuillRef.focus();
      }, 0);
    }
  }

  componentDidMount() {
    this.attachQuillRefs();
  }

  attachQuillRefs() {
    // Ensure React-Quill reference is available:
    if (typeof this.reactQuillRef?.getEditor !== "function") return;
    // Skip if Quill reference is defined:
    if (this.quillRef != null) return;

    const quillRef = this.reactQuillRef.getEditor();
    if (quillRef != null) this.quillRef = quillRef;
  }

  showColorPicker(value) {
    console.log("showColorPicker", value, this.quillRef);
    if (value === "custom-color") {
      var picker = document.getElementById("custom-color");
      if (!picker) {
        picker = document.createElement("input");
        picker.id = "custom-color";
        picker.type = "color";
        picker.style.position = "fixed";
        picker.style.zIndex = "10000";
        picker.style.top = "50vh";
        picker.style.left = "50vw";
        picker.value = "#FF0000";
        document.body.appendChild(picker);

        picker.addEventListener(
          "change",
          function () {
            console.log("quillouuyuiy", this.quill);
            this.quill.format("color", picker.value);
          },
          false
        );
      }
      picker.click();
    } else {
      this.quill.format("color", value);
    }
  }

  render() {
    return (
      <>
        <div
          style={{
            color: this.props.defaultColor || "black",
            backgroundColor: this.props.element.data?.color || "inherit",
            backgroundImage: this.props.element.data?.isGradient
              ? `linear-gradient(${element.data?.gradientDeg}deg, ${element.data?.gradientLeft}, ${element.data?.gradientRight})`
              : "",
            borderRadius: this.props.element?.data?.borderRadius ? this.props.element?.data?.borderRadius + "px" : "0px",
            height: this.props.element?.size?.height || "100%",
          }}
        >
          {this.props.toggleHtml || this.props.readOnly ? (
            <div
              style={{
                padding: "0px",
                alignContent: "center",
              }}
              dangerouslySetInnerHTML={{ __html: this.props.value }}
            />
          ) : (
            <>
              <ReactQuill
                theme={"snow-quill-color-picker-enhance"}
                onChange={this.handleChange}
                toolbar={{
                  ...Editor.modules.toolbar,
                }}
                preserveWhitespace={true}
                defaultColor={this.props.defaultColor || "black"}
                value={this.props.value}
                formats={formats}
                ref={(el) => {
                  if (el) {
                    this.reactQuillRef = el;
                    el.focus();
                  }
                }}
                modules={{
                  toolbar: {
                    container: [
                      [{ font: this.props.fonts || [] }],
                      [{ size: fontSizeArr }],
                      // [{ header: [1, 2, 3, 4, 5, 6, false] }],
                      ["bold", "italic", "underline", "strike"],
                      [
                        {
                          color: this.props.colors ? ["", ...this.props.colors, "custom-picker"] : [],
                        },
                        { background: [] },
                      ],
                      [{ script: "sub" }, { script: "super" }],
                      ["blockquote"],
                      [{ list: "ordered" }, { list: "bullet" }],
                      [{ align: [] }],

                      ["link", "video"],
                      ["clean"],
                    ],
                  },
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                bounds={".app"}
                placeholder={this.props.placeholder}
              />
            </>
          )}
        </div>

        {this.props.showEditMenu && (
          <ElementMenuWrapper
            close={this.props.setShowEditMenu}
            element={this.props.element}
            targetRef={this.props.targetRef}
            options={[
              {
                key: "Content",
                component: (
                  <div>
                    {" "}
                    <p>Elevation/Z-index</p>
                    <input
                      className="base-input"
                      type="number"
                      max="10"
                      min="0"
                      value={this.props.element.position?.z || 0}
                      onChange={(e) => {
                        this.props.setTransform({
                          ...this.props.element.position,
                          z: parseInt(e.target.value),
                        });
                      }}
                    />
                    <FormGroup
                      className="w-full h-fit-content"
                      altSetModel={true}
                      errors={this.state.errors}
                      setErrors={(errors) => this.setState({ errors })}
                      fields={[
                        {
                          name: "borderRadius",
                          placeholder: "Border radius",
                          type: "input",
                          subType: "number",
                          max: 100,
                        },
                        {
                          name: "color",
                          label: "Background color",
                          type: "input",
                          subType: "color",
                          className: "w-full",
                          hidden: ({ model }) => model.isGradient,
                        },
                        {
                          name: "isGradient",
                          title: "Gradient Background ?",
                          type: "checkbox",
                        },
                        {
                          name: "gradientLeft",
                          label: "Gradient left",
                          type: "input",
                          subType: "color",
                          className: "w-full",
                          hidden: ({ model }) => !model.isGradient,
                        },
                        {
                          name: "gradientRight",
                          label: "Gradient right",
                          type: "input",
                          subType: "color",
                          className: "w-full",
                          hidden: ({ model }) => !model.isGradient,
                        },
                        {
                          name: "gradientDeg",
                          label: "Gradient degrees",
                          type: "input",
                          subType: "number",
                          max: 360,
                          hidden: ({ model }) => !model.isGradient,
                        },
                      ]}
                      model={this.props.element.data}
                      setModel={(model) => {
                        this.props.onChangeData(model);
                        // onChange(model);
                      }}
                    />
                  </div>
                ),
              },
            ]}
          ></ElementMenuWrapper>
        )}
      </>
    );
  }
}

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],

    ["bold", "italic", "underline", "strike"],
    [
      // { list: 'ordered' },
      // { list: 'bullet' },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
  imageResize: {
    parchment: Quill.import("parchment"),
    modules: ["Resize", "DisplaySize"],
  },
};

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = ["header", "font", "size", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image", "video"];

export default Editor;
