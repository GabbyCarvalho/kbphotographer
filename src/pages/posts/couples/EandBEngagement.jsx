import PicTimePost from "../../../components/PicTimePost";
import HoneyBookEmbed from "../../../components/HoneyBookEmbed";

export default function EandBEngagement() {
    return(
        <>
        <PicTimePost
        embedCode={`
   
      <template
        data-pt-type="blog"
        data-pt-slideshowid="683e448a64c26c1b70a2b16a"
      ></template>
      <script
        src="https://kbphotographer.pic-time.com/-ebengagementkeystonecoloradoarapahoebasinskiresort/slideswebcomponentembed.js/683e448a64c26c1b70a2b16a?features=pinterest&filtertags="
        type="text/javascript"
        data-pt-scriptslideshowid="683e448a64c26c1b70a2b16a"
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