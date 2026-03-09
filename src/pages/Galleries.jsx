import ExternalEmbed from "../components/ExternalEmbed"
import HoneyBookEmbed from "../components/HoneyBookEmbed"

export default function Galleries () {
    return(
        <>
        <ExternalEmbed
            src='https://embedding.pic-time.com/pictures/scripts/compiled/artgalleryembed.js'
            type="script+iframe"
            >
            <iframe
                id="pictimeIntegration"
                src="https://gallery.kbphotographer.com/client?headless=true"
                frameBorder="0"
                style={{ width: "100%", height: "100vh" }}
                title="Pic-Time Gallery"
            />

        </ExternalEmbed>

         <div className="contactForm">
            <HoneyBookEmbed 
                pid="6621a6daa1587f00085ab204"
                placementId="6621a6daa1587f00085ab204-1"
            />
        
        </div>        

        </>
    )
}