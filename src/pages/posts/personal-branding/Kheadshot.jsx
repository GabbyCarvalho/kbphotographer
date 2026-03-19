import PicTimePost from "../../../components/PicTimePost";
import HoneyBookEmbed from "../../../components/HoneyBookEmbed";

export default function Kheadshot() {
    return(
        <>
        <PicTimePost
        embedCode={` 
      <template
        data-pt-type="blog"
        data-pt-slideshowid="68b924856c61890b49619c66"
      ></template>
      <script
        src="https://kbphotographer.pic-time.com/-ksignatureheadshotbroomfield/slideswebcomponentembed.js/68b924856c61890b49619c66?features=pinterest&filtertags="
        type="text/javascript"
        data-pt-scriptslideshowid="68b924856c61890b49619c66"
      ></script> `} />

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