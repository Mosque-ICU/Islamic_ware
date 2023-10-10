"use client";

import { handleErrors, handleSuccess } from "@/app/_helpers/web/formatters";
import { useEstablishment } from "@/app/_helpers/web/hooks/useEstablishment";
import { requestHandler, removeFromCache } from "@/app/_helpers/web/requestHandler";
import ArticleEditor from "@/app/components/ArticleEditor/ArticleEditor";
import Loader from "@/app/components/Loader/Loader";
import Nav from "@/app/components/Nav/Nav";
import React from "react";

function ArticlesEditorPage() {
  const { currentEstablishment, publicEstablishmentId } = useEstablishment();
  const [articleId, setArticleId] = React.useState<number | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [article, setArticle] = React.useState(null);

  React.useEffect(() => {
    const id = window.location.href.split("?id=")[1];
    setArticleId(parseInt(id));
  }, []);

  React.useEffect(() => {
    if (currentEstablishment && articleId) {
      fetchArticle();
    }
  }, [currentEstablishment, articleId]);

  const fetchArticle = async () => {
    const response = await requestHandler({
      shouldCache: true,
      returnCache: true,
      type: "get",
      route: "articles/single?id=" + articleId,
    });

    setLoading(false);

    if (!response.errors) {
      setArticle(response);
    } else handleErrors(response);
  };

  const updateArticle = async (data: { id: any; establishmentPublicId: null }) => {
    setLoading(true);
    data.id = articleId;
    data.establishmentPublicId = publicEstablishmentId;
    const response = await requestHandler({
      type: "put",
      body: data,
      route: "articles",
    });

    setLoading(false);

    if (!response.errors) {
      handleSuccess("Article updated successfully");
      removeFromCache(`articles/single?id=${articleId}`);
    } else handleErrors(response);
  };

  return (
    <>
      {loading && <Loader />}
      <div className=" min-h-screen">
        <Nav currentEstablishment={currentEstablishment} establishemntLogin={() => {}} />
        {article ? (
          <div className="page-wrapper">
            <ArticleEditor
              article={article}
              loading={loading}
              setLoading={setLoading}
              updateArticle={updateArticle}
              establishmentPublicId={publicEstablishmentId}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default ArticlesEditorPage;
