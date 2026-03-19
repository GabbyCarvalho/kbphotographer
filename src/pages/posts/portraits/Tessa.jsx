import PicTimePost from "../../../components/PicTimePost";
import HoneyBookEmbed from "../../../components/HoneyBookEmbed";

export default function Tessa() {
    return(
        <>
        <PicTimePost
        embedCode={`<template
        data-pt-type="blog"
        data-pt-slideshowid="66f24c150680401878137ea1"
      ></template>
      <script
        src="https://kbphotographer.pic-time.com/-tessa_dog_portraits/slideswebcomponentembed.js/66f24c150680401878137ea1?features=pinterest&filtertags="
        type="text/javascript"
        data-pt-scriptslideshowid="66f24c150680401878137ea1"
      ></script>`} />

      <section className="formSection">
                          
        <h2 className="titlePlanning"> Let's Chat! </h2>
              
          <div className="contactForm">
              <HoneyBookEmbed 
                pid="6621a6daa1587f00085ab204"
                placementId="6621a6daa1587f00085ab204-1"
              />
                          
          </div>    
      </section>
        </>
    )
}