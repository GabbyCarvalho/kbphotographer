import PicTimePost from "../../../components/PicTimePost";
import HoneyBookEmbed from "../../../components/HoneyBookEmbed";

export default function ProposingAtLilyLake() {
    return(
        <>
        <PicTimePost
        embedCode={` <template
        data-pt-type="blog"
        data-pt-slideshowid="68083156db2dc21e0c2ee93f"
      ></template>
      <script
        src="https://kbphotographer.pic-time.com/-blogs/slideswebcomponentembed.js/68083156db2dc21e0c2ee93f?features=pinterest&filtertags="
        type="text/javascript"
        data-pt-scriptslideshowid="68083156db2dc21e0c2ee93f"
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