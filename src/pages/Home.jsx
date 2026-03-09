import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import ScrollItem from "../components/ScrollIItem";
import "swiper/css";
import "../styles/home.css";
import img10 from "../assets/home/img10.png";
import img11 from "../assets/home/img11.webp";
import img12 from "../assets/home/img12.webp";
import img13 from "../assets/home/img13.webp";
import img14 from "../assets/home/img14.png";
import img16 from "../assets/home/img16.png";
import img17 from "../assets/home/img17.webp";
import img18 from "../assets/home/img18.png";
import img24 from "../assets/home/img24.png";
import ka from "../assets/home/ka-half.webp";
import headshotsGif from "../assets/home/headshots.gif";
import lifestyleGif from "../assets/home/lifestyle.gif";
import weddingGif from "../assets/home/wedding.gif";
import review1 from "../assets/home/review1.png";
import review2 from "../assets/home/review2.png";
import review3 from "../assets/home/review3.png";
import review4 from "../assets/home/review4.png";
import review5 from "../assets/home/review5.png";


export default function Home() {
    return (
    <>
    <ScrollItem>
    <section className="home-carousel">
    <Swiper
  modules={[Autoplay]}
  speed={2500}
  autoplay={{ delay: 4500, disableOnInteraction: false }}
  loop={true}
  slidesPerView={1}
>
  <SwiperSlide>
    <img src={img10} />
  </SwiperSlide>
  <SwiperSlide>
    <img src={img11} />
  </SwiperSlide>
  <SwiperSlide>
    <img src={img12} />
  </SwiperSlide>
  <SwiperSlide>
    <img src={img13}/>
  </SwiperSlide>
  <SwiperSlide>
    <img src={img14} />
  </SwiperSlide>
  <SwiperSlide>
    <img src={img16} />
  </SwiperSlide>
  <SwiperSlide>
    <img src={img24}/>
  </SwiperSlide>
  <SwiperSlide>
    <img src={img17} />
  </SwiperSlide>
  <SwiperSlide>
    <img src={img18} />
  </SwiperSlide>
</Swiper>

</section>
</ScrollItem>


<ScrollItem>
 <div className="moreAboutMeArea">
    <div className="aboutText">
    <h2 className="tittle">Inspired by adventure, emotion, and natural light</h2>
    <p>I’m Karina, and I love Colorado, these mountains, and the stories people create while exploring it. I want your photos to feel like you, even when we’re standing on the peak or a fourteener or racing down a slope at a local ski resort. I know light, the secret spots, and how to make even the coldest days feel fun and natural. Whether it’s an engagement proposal, a snowboarding adventure, or a family session, I’ll be there to make sure your Colorado story is captured beautifully, authentically, honestly, and in the moment.</p>
    <Link to="/about">
        <button className="aboutBtn">More About Me</button>
    </Link>
    </div>
    <div className="photographer">
        <img src={ka} alt="photographer" />
    </div>
 </div>
</ScrollItem>


<ScrollItem>
  <div className="cardsSection">
 <div className="cards">
    <h2 className="tittle">Explore My Work</h2>

        <div className="cardsArea">
          <div className="card">
                <img src={weddingGif} alt="wedding" />
                <h3 className="cardTitle">Couples</h3>

                <div className="cardLinks">
                    <Link to="/engagements">ENGAGEMENT / ELOPMENT</Link>

                
                </div>
        </div>

        <div className="card">
                <img src={headshotsGif} alt="headshots" />
                 <h3 className="cardTitle">Branding</h3>

                <div className="cardLinks">
                    <Link to="/headshots">HEADSHOTS</Link>
                </div>
            </div>

        <div className="card">
                <img src={lifestyleGif} alt="lifestyle" />
                <h3 className="cardTitle">Lifestyle</h3>

                <div className="cardLinks">
                    <Link to="/families">FAMILY</Link>
                    <Link to="/ski">SPORTS</Link>
                </div>
        </div>



    </div>


</div>
</div>
</ScrollItem>


<div className="reviewsArea">
     <section className="reviewcarousel">
        <h2 className="tittle">Reviews</h2>
            <Swiper
                modules={[Autoplay]}
                speed={3500}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                loop={true}
                slidesPerView={1}
                >
                    <SwiperSlide>
                        <img src={review1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={review2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={review3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={review4}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={review5} />
                    </SwiperSlide>
            </Swiper>
    </section>
    <a
        href="https://www.thumbtack.com/co/broomfield/headshots/karina-bittencourt-photographer/service/515883517792149513"
        target="_blank"
        rel="noopener noreferrer"
        className="seeReviewsBtn"
        >
        See all reviews
    </a>

</div>
    </>  
    )
}