"use client";
import { unmountComponentAtNode } from "react-dom";
// import { unmountComponentAtNode } from "react-dom";

import { getReactRoots, setFormWidth, setReactRoots } from "../formatters";
import { addToCache, getCachData } from "../requestHandler";
import { EmbedInputTool } from "@/app/components/EditorTools/EmbedInputTool";
import { QuranExplorerTool } from "@/app/components/EditorTools/QuranExplorerTool";

let timeout: string | number | NodeJS.Timeout | null | undefined = null;
let editor: any;

export const useEditor = () => {
  const init = async (data: any = {}, id: number | string = "", readonly = false, hasEditor = false, formWidth = 0) => {
    console.log(data);
    try {
      const cachedEditorJs = await getCachData("cachedEditorJs");
      let Editorjs = cachedEditorJs?.Editorjs;
      let DragDrop = cachedEditorJs?.DragDrop;
      let embed = cachedEditorJs?.embed;
      let table = cachedEditorJs?.table;
      let nestedList = cachedEditorJs?.nestedList;
      let warning = cachedEditorJs?.warning;
      let code = cachedEditorJs?.code;
      let linkTool = cachedEditorJs?.linkTool;
      let image = cachedEditorJs?.image;
      let header = cachedEditorJs?.header;
      let quote = cachedEditorJs?.quote;
      let marker = cachedEditorJs?.marker;
      let checklist = cachedEditorJs?.checklist;
      let delimiter = cachedEditorJs?.delimiter;
      let inlineCode = cachedEditorJs?.inlineCode;
      let simpleImage = cachedEditorJs?.simpleImage;
      let inlineTemplate = cachedEditorJs?.inlineTemplate;
      let color = cachedEditorJs?.color;

      if (formWidth) setFormWidth(formWidth);
      try {
        const roots = getReactRoots();
        if (roots.length > 0) {
          roots.forEach((root: any) => {
            unmountComponentAtNode(root);
          });
          setReactRoots([]);
        }
      } catch (e) {
        console.log(e);
      }

      if (timeout) clearTimeout(timeout);

      if (!Editorjs) {
        Editorjs = await require("@editorjs/editorjs").default;
        DragDrop = await require("editorjs-drag-drop");
        embed = await require("@editorjs/embed");
        table = await require("@editorjs/table");
        nestedList = await require("@editorjs/nested-list");
        warning = await require("@editorjs/warning");
        code = await require("@editorjs/code");
        linkTool = await require("@editorjs/link");
        image = await require("@editorjs/image");
        header = await require("@editorjs/header");
        quote = await require("@editorjs/quote");
        marker = await require("@editorjs/marker");
        checklist = await require("@editorjs/checklist");
        delimiter = await require("@editorjs/delimiter");
        inlineCode = await require("@editorjs/inline-code");
        simpleImage = await require("@editorjs/simple-image");
        inlineTemplate = await require("editorjs-inline-template");
        color = await require("editorjs-text-color-plugin");

        setTimeout(() => {
          addToCache("cachedEditorJs", {
            Editorjs,
            DragDrop,
            embed,
            table,
            nestedList,
            warning,
            code,
            linkTool,
            image,
            header,
            quote,
            marker,
            checklist,
            delimiter,
            inlineCode,
            simpleImage,
            inlineTemplate,
            color,
          });
        }, 1000);
      }

      if (hasEditor && editor) {
        if (data?.time) await editor.render(data);
        else
          await editor.render({
            time: Date.now(),
            version: "2.18.0",
            blocks: [
              {
                type: "paragraph",
                data: {
                  text: "<a></a>",
                },
              },
            ],
          });
      } else {
        editor = await new Editorjs({
          holder: "editorjs",
          readOnly: readonly,
          autofocus: true,
          //allow input to be saved in sanitizor

          tools: {
            // template: {
            //   class: TemplateInlineTool,
            //   inlineToolbar: true,
            //   shortcut: 'CMD+SHIFT+k',
            //   config: {},
            // },
            // button: ButtonTool,
            // AreaTool: AreaTool,
            // paragraph: {
            //   class: CustomParagraph,
            //   inlineToolbar: true,
            // },
            embed: {
              class: embed,
              config: {
                services: {
                  youtube: true,
                  coub: true,
                },
              },
            },

            // code: code,
            quranExplorer: QuranExplorerTool,
            linkTool: {
              class: linkTool,
              config: {
                endpoint: "http://localhost:8910/api/link",
              },
            },

            // image: image,
            image: simpleImage,
            table,
            EmbedInputTool: EmbedInputTool,
            nestedList,

            header: {
              class: header,
              inlineToolbar: true,
              shortcut: "CMD+SHIFT+H",
            },
            quote: {
              class: quote,
              inlineToolbar: true,
              shortcut: "CMD+SHIFT+O",
            },
            Color: {
              class: color, // if load from CDN, please try: window.ColorPlugin
              config: {
                colorCollections: ["#EC7878", "#9C27B0", "#673AB7", "#3F51B5", "#0070FF", "#03A9F4", "#00BCD4", "#4CAF50", "#8BC34A", "#CDDC39", "#FFF"],
                defaultColor: "#FF1300",
                type: "text",
                customPicker: true, // add a button to allow selecting any colour
              },
            },
            Marker: {
              class: color, // if load from CDN, please try: window.ColorPlugin
              config: {
                defaultColor: "#FFBF00",
                type: "marker",
                icon: `<svg fill="#000000" height="200px" width="200px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M17.6,6L6.9,16.7c-0.2,0.2-0.3,0.4-0.3,0.6L6,23.9c0,0.3,0.1,0.6,0.3,0.8C6.5,24.9,6.7,25,7,25c0,0,0.1,0,0.1,0l6.6-0.6 c0.2,0,0.5-0.1,0.6-0.3L25,13.4L17.6,6z"></path> <path d="M26.4,12l1.4-1.4c1.2-1.2,1.1-3.1-0.1-4.3l-3-3c-0.6-0.6-1.3-0.9-2.2-0.9c-0.8,0-1.6,0.3-2.2,0.9L19,4.6L26.4,12z"></path> </g> <g> <path d="M28,29H4c-0.6,0-1-0.4-1-1s0.4-1,1-1h24c0.6,0,1,0.4,1,1S28.6,29,28,29z"></path> </g> </g></svg>`,
              },
            },

            checklist: {
              class: checklist,
              inlineToolbar: true,
            },
            delimiter: {
              class: delimiter,
              shortcut: "CMD+SHIFT+D",
            },
            warning,

            inlineCode: {
              class: inlineCode,
            },
          },
          data: data,
          onReady: () => {
            new DragDrop(editor);
          },

          onChange: (e: Event, d: any) => {},

          configs: {
            id: id,
          },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  return {
    init,
    destoryEditor: () => {
      if (editor) editor.destroy();
    },
    returnBlocks: async () => {
      if (editor) {
        const blocks = await editor.save();
        return blocks;
      }
    },
    returnHtml: async () => {
      // if (editor) {
      //     const blocks = await editor.save()
      //     const html = await toHtml(blocks)
      //     return html
      // }
    },
  };
};
