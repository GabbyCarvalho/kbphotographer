import "../../styles/policy.css"

import hero from "../../assets/policy/hero.jpg"
import photo1 from "../../assets/policy/photoCollage1.jpg"
import photo2 from "../../assets/policy/photoCollage2.jpg"
import photo3 from "../../assets/policy/photoCollage3.png"
import photo4 from "../../assets/policy/photoCollage4.jpg"
import photo5 from "../../assets/policy/photoCollage5.jpg"


export default function Policy () {
    return (
    <>
     <section className="hero">
                <div className="img-wrapper">
                    <img src={hero} alt="" />
                </div>
    </section>

    <section className="policy">
        <div className="policy-wrapper">
            <h2 className="tittle">Privacy Policy</h2>
            <p className="textCenter">Effective Date:12/29/2024</p>
            <p className="textP">At Karina Bittencourt Photographer, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our services, website, and social media platforms.</p>
            <div className="listPolicy">
            <h2>1. Information We Collect</h2>
            <p>• Contact Information: Full name, email address, phone number, and mailing address.</p>
            <p>• Session Information: Details about your photography session, such as location and preferences.</p>
            <p>• Digital Activity: Data from your interactions with our website, gallery platform (Pic-Time), or social media, such as cookies and IP addresses.</p>

            <h2>2. How We Use Your Information</h2>
            <p>• Providing photography services and fulfilling contracts.</p>
            <p>• Scheduling photo sessions and communicating updates.</p>
            <p>• Delivering digital and physical photo products.</p>
            <p>• Responding to inquiries or requests.</p>
            <p>• Sending marketing communications (only if consented to).</p>
            <p>• Improving our services and customer experience.</p>

            <h2>3. Sharing Your Information</h2>
            <p className="textP">We do not sell or rent your personal information to third parties. However, we may share your data with trusted partners when necessary, such as:</p>
            <p>• Service Providers: Labs for prints, gallery platforms, or scheduling tools.</p>
            <p>• Legal Obligations: If required by law or to protect our business.</p>

            <h2>4. How We Protect Your Information</h2>
            <p className="textP">We take your privacy seriously and implement industry-standard security measures to protect your personal data. These include encryption, secure payment gateways, and restricted access to sensitive information.</p>

            <h2>5. Your Rights</h2>
            <p>You have the right to:</p>
            <p>• Request access to or deletion of your personal data.</p>
            <p>• Opt out of marketing communications at any time.</p>
            <p>• Update or correct your personal information.</p>
            <p className="textP">For any privacy-related concerns or to exercise your rights, contact us at hello@kbphotographer.com.</p>

            <h2>6. Use of Cookies and Tracking</h2>
            <p className="textP" >We may use cookies to improve your experience on our website and gather analytics. By continuing to use our website, you consent to this use.</p>

            <h2>7. Third-Party Links</h2>
            <p className="textP">Our website and communications may contain links to third-party websites, such as social media platforms or gallery services. We are not responsible for their privacy practices and recommend reviewing their policies.</p>

            <h2>8. Updates to This Policy</h2>
            <p>This Privacy Policy may be updated periodically. Changes will be posted on our website.</p>
            <p>For more information or assistance, please reach out to us at hello@kbphotographer.com</p>
            <p>Thank you for trusting Karina Bittencourt Photographer with your memories!</p>


    
            </div>
        </div>

    </section>

    <section className="photoCollage">
            <div className="footerCollage">
    
                <div className="frame img-1">
                    <img src={photo1} />
                </div>
    
                <div className="frame img-2">
                    <img src={photo2} />
                </div>
    
                <div className="frame img-3">
                    <img src={photo3}  />
                </div>
    
                <div className="frame img-4">
                    <img src={photo4} />
                </div>
    
                <div className="frame img-5">
                    <img src={photo5} />
                </div>
                         
            </div>
        </section>
    
    </>
    )
}