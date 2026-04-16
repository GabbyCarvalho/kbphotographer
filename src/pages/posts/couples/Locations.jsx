import PicTimePost from "../../../components/PicTimePost";
import HoneyBookEmbed from "../../../components/HoneyBookEmbed";

export default function Locations() {
    return(
        <>
        <PicTimePost
       embedCode={`
        <template
          data-pt-type="blog"
          data-pt-slideshowid="667ce6f25276c62088b1b993"
        ></template>

        <script
          src="https://kbphotographer.pic-time.com/-landscapes/slideswebcomponentembed.js/667ce6f25276c62088b1b993?features=pinterest&filtertags="
          type="text/javascript"
          data-pt-scriptslideshowid="667ce6f25276c62088b1b993"
        ></script>
      `} />

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