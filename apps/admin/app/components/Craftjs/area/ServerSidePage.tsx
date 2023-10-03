import React from "react";
import ServerSideArea from "./ServerSideArea";
import Nav from "../nav";

function ServerSidePage({ site }) {
  return (
    <>
      <Nav siteName={site.label} readOnly={true} />
      <>
        {site.SitePages[0].content.map((area, i) => (
          <ServerSideArea data={area.data} siteData={site.siteData} i={i} key={area.id} />
        ))}
      </>
    </>
  );
}

export default ServerSidePage;
