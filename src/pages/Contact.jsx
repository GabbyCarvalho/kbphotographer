import HoneyBookEmbed from "../components/HoneyBookEmbed"
import ScrollItem from "../components/ScrollIItem";
import proposal from "../assets/contact/proposal-surprise.jpg"
import couple from "../assets/contact/couple.jpg"
import proposal2 from "../assets/contact/proposal-2.png"
import hero from "../assets/contact/hero.jpg"
import collage1 from "../assets/contact/collage1.png"
import collage2 from "../assets/contact/collage2.jpg"
import collage3 from "../assets/contact/collage3.png"
import collage4 from "../assets/contact/collage4.jpg"
import collage5 from "../assets/contact/collage5.jpg"

import "../styles/contact.css"
export default function Contact () {
    return (
    <>
    <section className="hero">
        <div className="img-wrapper">
            <img src={hero} alt="ka" />
        </div>
    </section>
        <div className="sayYes">
            <h2>Ready to say yes to a lifetime of memories?</h2>
        </div>

    <section className="contactSection">


            <div className="imgBackground">
                <img src={proposal} alt="proposal" className="side-img" />
                
                 <div className="text">
                <ScrollItem>

                    <p> I’m so excited to know that you’ve connected with me and my work! Thank you for getting this far!</p>
                       <br /> 
                    <p> • This is where our journey together begins. To better understand your expectations and learn more about your session or wedding, please fill out the form with all the details.</p>
                        <br />
                    <p> • Just a heads up, my 2026 Spring | Summer schedule is now open. I specialize in capturing daytime, outdoor ceremonies and portraits, starting no later than 5 PM, in locations that align with my artistic and timeless style.</p>
                        <br />
                    <p> • Can’t wait to hear from you! P.S.: Every message is received with care, and I’ll respond within 48 hours! If you haven’t heard back, please check your spam folder. You’re also welcome to reach out to me on Instagram!</p>
                </ScrollItem>
            </div>

        <img src={proposal2} alt="proposal2" className="side-img"/>
            

            </div>
           

       <div className="contactGrid">
        <div className="imageForm">
            <img src={couple} alt="couple" />
        </div> 

            <div className="contactForm">
                <HoneyBookEmbed 
                pid="6621a6daa1587f00085ab204"
                placementId="6621a6daa1587f00085ab204-1"
                />

            </div>        
        </div>
    </section>
    <section className="scheduleVideoForm">
        
        
    </section>

    <section className="photoCollage">
        <div className="footerCollage">

            <div className="frame img-1">
                <img src={collage1} />
            </div>

            <div className="frame img-2">
                <img src={collage2} />
            </div>

            <div className="frame img-3">
                <img src={collage3}  />
            </div>

            <div className="frame img-4">
                <img src={collage4} />
            </div>

            <div className="frame img-5">
                <img src={collage5} />
            </div>
                     
        </div>
    </section>


        
    </>
    )
}

