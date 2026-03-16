import PicTimePost from "../../../components/PicTimePost";
import HoneyBookEmbed from "../../../components/HoneyBookEmbed";

export default function MicroWeddingWa() {
    return(
        <>
        <PicTimePost
        embedCode={`
            <template
            data-pt-type="blog"
            data-pt-slideshowid="667c7c9c5276c41d64ebad50"
            ></template>
            <script
            src="https://kbphotographer.pic-time.com/-weddingwa/slideswebcomponentembed.js/667c7c9c5276c41d64ebad50?features=pinterest&filtertags="
            type="text/javascript"
            data-pt-scriptslideshowid="667c7c9c5276c41d64ebad50"
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