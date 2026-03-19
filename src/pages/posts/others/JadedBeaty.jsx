import PicTimePost from "../../../components/PicTimePost";
import HoneyBookEmbed from "../../../components/HoneyBookEmbed";

export default function JadedBeauty() {
    return(
        <>
        <PicTimePost
        embedCode={`<template data-pt-type='blog' data-pt-slideshowid='682d6fc393e6ac016c333d91' ></template><script src='https://kbphotographer.pic-time.com/-jadedbeautymar25/slideswebcomponentembed.js/682d6fc393e6ac016c333d91?features=pinterest&filtertags=' type='text/javascript' data-pt-scriptslideshowid='682d6fc393e6ac016c333d91'></script>`} />

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