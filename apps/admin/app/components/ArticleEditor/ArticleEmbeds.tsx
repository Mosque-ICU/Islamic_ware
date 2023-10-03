import React from "react";

function ArticleEmbeds({ close, article, publicId }) {
  // const link = `http${process.env.NODE_ENV === "development" ? "" : "s"}://${publicId}${
  //   process.env.AUTH_ORIGIN || "mosque.icu"
  // }/article/${article.title.replace(/\s+/g, "-")}/${article.id}`;

  const [embedText, setEmbedText] = React.useState(`<iframe src="${"link"}" width="100%" height="900" ></iframe>`);

  //   const [embedTextTimigs, setEmbedTextTimimgs] = React.useState(
  //     `<iframe src="${clientURL}/prayertimes?embed=timings" width="100%" height="900" ></iframe>`
  //   )
  return (
    <>
      <div className="modal-center">
        <div className="h-[90vh] w-[90vw] p-8">
          <h2> Embeds </h2>

          {/* <p className="mt-5">Timings Only</p>
          <hr />
          <input
            className="w-full"
            value={embedTextTimigs}
            onChange={(e) => setEmbedTextTimimgs(e.target.value)}
          />
          <div dangerouslySetInnerHTML={{ __html: embedTextTimigs }}></div> */}

          <p className="mt-5">Full</p>
          <hr />
          {/* <a href={link}>{link}</a> */}

          <input className="w-full" value={embedText} onChange={(e) => setEmbedText(e.target.value)} />
          <div dangerouslySetInnerHTML={{ __html: embedText }}></div>
        </div>
      </div>
      <div onClick={close} className="modal-overlay"></div>
    </>
  );
}

export default ArticleEmbeds;
