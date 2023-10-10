import { FieldsType } from "@/app/_helpers/web/webTypes/FormTypes";
import React from "react";
import Form from "../Form/Form";

const baseFields = [
  {
    type: "select",
    name: "categoryIds",
    multiple: true,
    isCreatable: true,
    placeholder: "Add or Create Category",
    createKey: "createArticleCategory",
    createInput: "CreateArticleCategoryInput",
    queryKey: "articleCategories",
    query: `query {
      articleCategories {
        id
        label
      }
    }`,
  },
  {
    type: "custom",
    component({ model, field, fields }) {
      return (
        <>
          <img src={model.thumbnail} alt="Thumbnail" className="mb-4 h-[300px] w-full object-contain" />
        </>
      );
    },
  },
  {
    type: "input",
    subType: "url",
    name: "thumbnail",
    placeholder: "Thumbnail Url",
    required: true,
    maxLength: 500,
  },
  {
    type: "checkbox",
    name: "showAuthor",
    title: "Show Author",
  },
  {
    type: "checkbox",
    name: "showDate",
    title: "Show Date",
  },

  {
    type: "checkbox",
    name: "allowComments",
    title: "Allow Comments",
  },
] as FieldsType[];

const dataFields = [
  {
    type: "input",
    subType: "color",
    name: "accentColor",
    label: "Accent Colour",
    className: "w-full h-10",
  },
  {
    type: "select",
    name: "fontFamily",
    placeholder: "Font Family",
    label: "Font Family",
    options: [
      { label: "Helvetica", value: "helvetica" },
      { label: "Arial", value: "arial" },
      { label: "Times New Roman", value: "times new roman" },
      { label: "Courier New", value: "courier new" },
      { label: "Verdana", value: "verdana" },
      { label: "Georgia", value: "georgia" },
      { label: "Palatino", value: "palatino" },
      { label: "Garamond", value: "garamond" },
      { label: "Bookman", value: "bookman" },
      { label: "Comic Sans MS", value: "comic sans ms" },
      { label: "Trebuchet MS", value: "trebuchet ms" },
      { label: "Arial Black", value: "arial black" },
      { label: "Impact", value: "impact" },
      { label: "Lucida Sans Unicode", value: "lucida sans unicode" },
      { label: "Tahoma", value: "tahoma" },
      { label: "Courier", value: "courier" },
      { label: "Lucida Console", value: "lucida console" },
    ],
  },
  {
    type: "input",
    subType: "number",
    name: "fontSize",
    defaultValue: 16,
    placeholder: "Font Size (px)",
    label: "Font Size (px)",
  },
  {
    type: "custom",
    component: () => {
      return <hr className="my-2" />;
    },
  },
  {
    type: "checkbox",
    name: "showSidebar",
    title: "Show Sidebar",
  },
  {
    type: "select",
    name: "sidebarPosition",
    placeholder: "Sidebar Position",
    label: "Sidebar Position",
    options: [
      { label: "Left", value: "left" },
      { label: "Right", value: "right" },
    ],
    hidden({ model }) {
      return !model.showSidebar;
    },
  },
  {
    type: "checkbox",
    name: "showCategory",
    title: "Show Categories",
  },
  {
    type: "checkbox",
    name: "showSearch",
    title: "Show article search",
  },

  // {
  //   type: 'custom',
  //   component: () => {
  //     return <hr className="my-2" />
  //   },
  // },
  // {
  //   type: 'checkbox',
  //   name: 'showAuthor',
  //   title: 'Show Author',
  // },
  // {
  //   type: 'checkbox',
  //   name: 'showDate',
  //   title: 'Show Date',
  // },

  // {
  //   type: 'checkbox',
  //   name: 'allowComments',
  //   title: 'Allow Comments',
  // },
];

function ArticleEditorSidebar({ curArticle, setCurArticle, close, data, setData }) {
  return (
    <>
      <div className="sidebar-right slideLeft hide-scrollbar">
        <div className=" bg-gray-100 p-4">
          <h2>
            <span className="text-2xl font-bold">Article Settings</span>
          </h2>
        </div>
        <div className="mt-2 flex h-full flex-col p-4">
          <p className="my-2 font-bold">Local Settings</p>
          <hr className="mb-2" />
          <Form model={curArticle} setModel={setCurArticle} className="min-h-[550px] " fields={[{ fields: baseFields }]} />
          <hr className="mt-5" className="" />
          <p className="my-2 font-bold">Global Settings (Preview to see changes) </p>
          <hr className="" />
          <Form model={data} setModel={setData} fields={[{ fields: dataFields }]} />
        </div>
      </div>
      <div className="sidebar-overlay" style={{ backgroundColor: "transparent" }} onClick={close}></div>
    </>
  );
}

export default ArticleEditorSidebar;
