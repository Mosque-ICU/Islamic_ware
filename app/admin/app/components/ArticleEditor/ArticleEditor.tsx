"use client";

import { parseDataIfString } from "@/app/_helpers/web/formatters";
import { useEditor } from "@/app/_helpers/web/hooks/useEditor";
import { useEstablishment } from "@/app/_helpers/web/hooks/useEstablishment";
import React from "react";
import ArticleViewer from "../ArticleViewer/ArticleViewer";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import Button from "../Button/Button";
import ArticleEditorSidebar from "./ArticleEditorSidebar";
import ArticleEmbeds from "./ArticleEmbeds";
import { useArticleStore } from "@/app/_store/store";

function ArticleEditor({ article, updateArticle, setLoading, loading, establishmentPublicId }) {
  const [audioUrl, setAudioUrl] = useArticleStore((state) => [state.audioUrl as any, state.setAudioUrl]);

  const { init, returnBlocks, destoryEditor } = useEditor();
  const { currentEstablishment } = useEstablishment();
  const [curArticle, setCurArticle] = React.useState(null);
  const [categoryIdsCheck, setCategoryIdsCheck] = React.useState({
    current: [],
    currentString: "",
    new: [],
    deleted: [],
  });
  const [editor, setEditor] = React.useState(false);
  const [showSidebar, setShowSidebar] = React.useState(false);
  const [showArticlePreview, setShowArticlePreview] = React.useState(false);
  const [showEmbeds, setShowEmbeds] = React.useState(false);
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    setArticle();
    return () => {
      destoryEditor();
    };
  }, []);

  React.useEffect(() => {
    // if (JSON.stringify(curArticle?.categoryIds) !== categoryIdsCheck?.currentString) {
    //   const newCats = [] as number[];
    //   const deleted = [] as number[];
    //   curArticle?.categoryIds?.forEach((cat: any) => {
    //     if (!categoryIdsCheck.current.includes(cat)) {
    //       newCats.push(cat);
    //     }
    //   });
    //   categoryIdsCheck.current.forEach((cat: any) => {
    //     if (!curArticle?.categoryIds.includes(cat)) {
    //       deleted.push(cat);
    //     }
    //   });
    //   setCategoryIdsCheck({
    //     current: curArticle?.categoryIds,
    //     currentString: JSON.stringify(curArticle?.categoryIds),
    //     new: newCats,
    //     deleted,
    //   });
    // }
  }, [curArticle?.categoryIds]);

  const setArticle = async () => {
    let curArticle = { ...article };
    const categoryIds = await parseDataIfString(curArticle.categoryIds);
    const attachments = await parseDataIfString(curArticle.attachments);
    setCategoryIdsCheck({
      ...categoryIdsCheck,
      current: categoryIds,
      currentString: JSON.stringify(categoryIds),
    });
    setCurArticle({ ...curArticle, categoryIds, attachments });

    initArticle();
  };

  const initArticle = async () => {
    let content = null;
    try {
      content = article?.content != " " ? JSON.parse(article?.content) : null;
    } catch (e) {
      console.log(e);
    }
    setTimeout(() => {
      init(content);
    }, 50);
  };

  const onSave = async () => {
    const blocks = await returnBlocks();

    const data = {
      ...curArticle,
      content: JSON.stringify(blocks),
      attachments: JSON.stringify(curArticle.attachments),
    };
    delete data.createdAt;
    delete data.userId;
    delete data.id;
    delete data.__typename;

    data.new = categoryIdsCheck.new;
    data.deleted = categoryIdsCheck.deleted;

    setLoading(true);
    updateArticle(data);
    console.log(blocks);
  };
  const onShowPreview = async () => {
    const blocks = await returnBlocks();
    setCurArticle({ ...curArticle, content: blocks });
    setShowArticlePreview(true);
  };

  const onShowEditor = () => {
    init(curArticle.content).then((e: any) => {
      setEditor(e);
    });
    setShowArticlePreview(false);
  };

  if (!currentEstablishment) return null;
  return (
    <div className="mt-1 h-full w-full">
      <div className="flex h-[40px] items-center justify-center border-b border-gray-300 bg-white ">
        <div className="absolute left-5 flex items-center"></div>
        <h1>
          <input
            type="text"
            placeholder="Title"
            value={curArticle?.title}
            onChange={(e) => setCurArticle({ ...curArticle, title: e.target.value })}
            className=" w-full min-w-[800px] border-none bg-transparent text-2xl outline-none"
          />
        </h1>
        <div className="absolute right-5 flex items-center">
          <Button variant="secondary" size="sm" className="mr-2" onClick={() => setShowEmbeds(true)}>
            Embeds
          </Button>
          <Button variant="secondary" size="sm" className="mr-2" onClick={onShowPreview}>
            Preview
          </Button>
          <Button variant="secondary" size="sm" className="mr-2" onClick={() => setShowSidebar(true)}>
            Article settings
          </Button>
          <Button onClick={onSave} size="sm" loading={loading}>
            Save Changes
          </Button>
        </div>
      </div>
      {showArticlePreview ? null : <div className=" border border-gray-300 bg-white p-4 shadow-sm" id="editorjs"></div>}
      {showSidebar && (
        <ArticleEditorSidebar close={() => setShowSidebar(false)} curArticle={curArticle} setCurArticle={setCurArticle} data={data} setData={setData} />
      )}

      {showArticlePreview && (
        <>
          <span className="fixed right-6 top-3" style={{ zIndex: 99999 }}>
            <Button variant="secondary" size="sm" onClick={() => onShowEditor()}>
              X
            </Button>
          </span>
          <div className="modal-center  " style={{ minWidth: "100vw", minHeight: "100vh" }}>
            <ArticleViewer article={curArticle} data={data} />
          </div>
          <div className="modal-overlay" onClick={() => onShowEditor()} />
        </>
      )}

      {showEmbeds && <ArticleEmbeds publicId={establishmentPublicId} article={curArticle} close={() => setShowEmbeds(false)} />}

      {audioUrl && !showArticlePreview && <AudioPlayer url={audioUrl} close={() => setAudioUrl("")} />}
    </div>
  );
}

export default ArticleEditor;
