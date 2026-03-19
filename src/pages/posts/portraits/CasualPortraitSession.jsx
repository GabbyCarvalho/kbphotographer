import PicTimePost from "../../../components/PicTimePost";
import HoneyBookEmbed from "../../../components/HoneyBookEmbed";

export default function CasualPortraitSession() {
    return(
        <>
        <PicTimePost
        embedCode={`<template
        data-pt-type="blog"
        data-pt-slideshowid="6832ada6e44cb518b4ce66e5"
      ></template>
      <script
        src="https://kbphotographer.pic-time.com/-mportrait/slideswebcomponentembed.js/6832ada6e44cb518b4ce66e5?features=pinterest&filtertags="
        type="text/javascript"
        data-pt-scriptslideshowid="6832ada6e44cb518b4ce66e5"
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