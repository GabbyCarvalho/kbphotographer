import "../../styles/BecomeVendor.css"
import HoneyBookEmbed from "../../components/HoneyBookEmbed"
import { Link } from "react-router-dom";


export default function BecomeVendor() {
    return (
    <>
        <div className="vendors">
            <h2 className="tittle">Interested in working together? </h2>
        </div>

        <div className="vendorsForm-Sec">
            <div className="vendorsForm">
                <p className="textVendors">I love collaborating with like-minded creatives and businesses that share a passion for storytelling, adventure, and genuine connections. Whether you offer unique handmade products, stunning event services, or anything that aligns with the moments I capture, I’d love to learn more about you! You can be featured on my <Link to="/vendors-list">vendors list</Link>. Let’s create something meaningful together. Fill out the form below to introduce yourself, and let’s chat about how we can collaborate.</p>
            </div>
          <div className="honeyBook-vendorForm">
            <HoneyBookEmbed
                pid="6621a6daa1587f00085ab204"
                placementId="6621a6daa1587f00085ab204-9"
            />
            </div> 
            

        </div>

        


         </>
    


    )   
}