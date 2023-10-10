import React from "react";
function EmbedModal({ close }) {
  const [embedText, setEmbedText] = React.useState(`<iframe src="${process.env.NEXT_PUBLIC_APP_URL}/prayertimes" width="100%" height="900" ></iframe>`);

  const [embedTextTimigs, setEmbedTextTimimgs] = React.useState(
    `<iframe src="${process.env.NEXT_PUBLIC_APP_URL}/prayertimes?embed=timings" width="100%" height="900" ></iframe>`
  );
  return (
    <>
      <div className="modal-center">
        <div className="h-[90vh] w-[90vw] p-8">
          <h2> Embeds </h2>

          <p className="mt-5">Timings Only</p>
          <hr />
          <input className="w-full" value={embedTextTimigs} onChange={(e) => setEmbedTextTimimgs(e.target.value)} />
          <div dangerouslySetInnerHTML={{ __html: embedTextTimigs }}></div>

          <p className="mt-5">Full</p>
          <hr />
          <input className="w-full" value={embedText} onChange={(e) => setEmbedText(e.target.value)} />
          <div dangerouslySetInnerHTML={{ __html: embedText }}></div>
        </div>
      </div>
      <div onClick={close} className="modal-overlay"></div>
    </>
  );
}

export default EmbedModal;
