import React from "react";
import ArticleComments from "./ArticleComments";
import Popover from "../Popover/Popover";
import { useEditor } from "@/app/_helpers/web/hooks/useEditor";
import { requestHandler, gqlF } from "@/app/_helpers/web/requestHandler";
import { useArticleStore } from "@/app/_store/store";
import AudioPlayer from "../AudioPlayer/AudioPlayer";

function ArticleViewer({ article, data }) {
  const { init, destoryEditor } = useEditor();
  const [audioUrl, setAudioUrl] = useArticleStore((state) => [state.audioUrl as any, state.setAudioUrl]);
  const [categoryObj, setCategoryObj] = React.useState({});
  const [comments, setComments] = React.useState([]);
  const [showComments, setShowComments] = React.useState(false);
  const [sharePopoverEvent, setSharePopoverEvent] = React.useState(null);
  const [inputFocused, setInputFocused] = React.useState(false);

  React.useEffect(() => {
    init(article?.content, article?.id, true).then((e: any) => {
      console.log(e);
    });

    if (data?.fontFamily && document?.documentElement) {
      document.documentElement.style.setProperty("--font-family", data?.fontFamily);
    }

    if (data?.fontSize && document?.documentElement) {
      document.documentElement.style.setProperty("--font-size", data?.fontSize + "px");
    }

    fetchCategories();

    return () => {
      destoryEditor();
      document.documentElement.style.setProperty("--font-family", "Helvetica Neue, Helvetica, Arial");
      document.documentElement.style.setProperty("--font-size", "16px");
    };
  }, []);

  const fetchCategories = () => {
    requestHandler({
      body: gqlF(
        `query {
      articleCategories {
        id
        label
      }
    }`
      ),
      cacheKey: "articleCategories",
      shouldCache: true,
      returnCache: true,
    }).then((res) => {
      if (res?.data && res?.data?.articleCategories) {
        const mappped = {} as any;

        res?.data?.articleCategories.forEach((c) => {
          mappped[c.id] = c.label;
        });

        setCategoryObj(mappped);
      }
    });
  };

  return (
    <div className="wrap m-10 my-16 flex justify-center align-middle md:px-0">
      {/* Left Grid */}
      <div style={{ width: "1200px" }} className="flex flex-row flex-wrap ">
        <div className="grid grid-cols-1 " style={{ width: "67%" }}>
          {/* Featured Image */}
          <img
            className="h-[260px] w-full rounded
        
        object-cover object-center"
            src={article?.thumbnail}
            alt={article?.title}
          />

          <div className="  mt-3 flex flex-col items-center justify-center">
            <h2 className="text-center text-3xl font-bold text-gray-800 ">{article?.title}</h2>
            <div className="relative mt-2 flex flex-row items-center justify-center">
              <span className="text-sm text-gray-500">{article?.createdAt ? new Date(article?.createdAt).toDateString() : ""}</span>
              <span className="mx-2 text-sm text-gray-500">|</span>
              <span className="text-sm text-gray-500">By {article?.userId}</span>

              <div className="absolute right-[-200%] ">
                <span onClick={(e) => setSharePopoverEvent(e)} className="cursor-pointer text-[12px] text-gray-500 hover:opacity-70">
                  share
                </span>
                <span onClick={() => setShowComments(true)} className="ml-2 cursor-pointer text-[12px] text-gray-500 hover:opacity-70">
                  comments
                </span>
              </div>
            </div>
            <hr className="my-4 w-full border-gray-300" />
            <div className="  ml-[3%] w-[90%] " id="editorjs"></div>
            <div className="flex-column mt-5 flex items-center justify-center">
              <div className="text-m text-gray-500">Share this article:</div>
              <ShareOptions article={article} />
            </div>
          </div>

          {/* Article Meta */}
        </div>

        {/* Right Grid */}
        <div className="grid grid-cols-1 gap-4" style={{ width: "32%" }}>
          {/* Categories */}
          <div className="ml-14">
            {/* <h2 className="mb-4 text-xl font-bold">Categories</h2> */}
            <input
              type="search"
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              style={{ borderColor: inputFocused ? data?.accentColor : "" }}
              className=" focus:shadow-outline w-50 mb-2 h-10 rounded-lg border px-3 text-base text-gray-700 placeholder-gray-600 focus:outline-none"
              placeholder="Search"
            />
            <div className=" flex flex-wrap">
              {article.categoryIds.map((category) => (
                <span
                  key={category}
                  style={{
                    backgroundColor: data?.accentColor || "#000",
                  }}
                  className="mb-2 mr-2 cursor-pointer rounded-md bg-indigo-500 px-2 py-0.5 text-sm text-white shadow-sm transition-all duration-200 hover:bg-indigo-600 hover:shadow-md"
                >
                  {categoryObj[category]}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showComments && <ArticleComments comments={comments} setComments={setComments} close={() => setShowComments(false)} />}
      <Popover plusY={-20} event={sharePopoverEvent} show={sharePopoverEvent !== null} onClose={() => setSharePopoverEvent(null)}>
        <ShareOptions article={article} />
      </Popover>
      {audioUrl && <AudioPlayer url={audioUrl} close={() => setAudioUrl("")} />}
    </div>
  );
}

const ShareOptions = ({ article }) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer">
        <img className="mx-1 h-6 w-6 hover:opacity-50" src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="facebook" />
      </a>
      <a href={`https://twitter.com/intent/tweet?text=${window.location.href}`} target="_blank" rel="noopener noreferrer">
        <img className="mx-1 h-6 w-6 hover:opacity-50" src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="twitter" />
      </a>
      <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`} target="_blank" rel="noopener noreferrer">
        <img className="mx-1 h-6 w-6 hover:opacity-50" src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" />
      </a>
      <a href={`https://wa.me/?text=${window.location.href}`} target="_blank" rel="noopener noreferrer">
        <img className="mx-1 h-6 w-6 hover:opacity-50" src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="whatsapp" />
      </a>

      <a href={`mailto:?subject=${article?.title}&body=${window.location.href}`} target="_blank" rel="noopener noreferrer">
        <img className="mx-1 h-6 w-6 hover:opacity-50" src="https://img.icons8.com/color/48/000000/email--v1.png" alt="email" />
      </a>

      <a href={`https://www.reddit.com/submit?url=${window.location.href}`} target="_blank" rel="noopener noreferrer">
        <img className="mx-1 h-6 w-6 hover:opacity-50" src="https://img.icons8.com/color/48/000000/reddit.png" alt="reddit" />
      </a>
    </div>
  );
};

export default ArticleViewer;
