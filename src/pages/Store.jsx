import ExternalEmbed from "../components/ExternalEmbed"
import HoneyBookEmbed from "../components/HoneyBookEmbed"
import PicTimePost from "../components/PicTimePost"


export default function Store () {
    return (
        <>
        <PicTimePost
        embedCode={`<script src='https://embedding.pic-time.com/pictures/scripts/compiled/artgalleryembed.js'></script><iframe frameborder='0' id='pictimeIntegration' src='https://gallery.kbphotographer.com/art?headless=true' style='width:100%;height:100%'></iframe>`} />

        <div className="contactForm">
            <HoneyBookEmbed 
            pid="6621a6daa1587f00085ab204"
            placementId="6621a6daa1587f00085ab204-1"
                        />
                                    
        </div>    
        </>
       
    )
}