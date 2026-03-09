import { Link } from "react-router-dom";
import ScrollItem from "../components/ScrollIItem";
import "../styles/about.css"
import ka1 from "../assets/about/ka1.jpg";
import kaGif from "../assets/about/ka.gif";
import wa from "../assets/about/wa.jpg";
import kaProposal from "../assets/about/proposal.jpg";
import snowboard from "../assets/about/snowboard.jpg";
import walker from "../assets/about/walker.jpg"


export default function About() {
  return (
    <main className="aboutPage">

        <div className="grid-container">

      
        <h1 className="tittle">Inspired by adventure, emotion, and natural light</h1>
        
        <p className="subtittle">PORTRAIT | WEDDING | BRANDING | LIFESTYLE</p>
     
        <ScrollItem className="img1">
          <img src={ka1} alt="hiking" />
        </ScrollItem>
        <ScrollItem className="text1">
          <h2>Hey there!</h2>
            <p> I'm Karina, the photographer. When I’m not out capturing beautiful moments for my clients, you can find me embracing the great outdoors, reflecting on my journey, and exploring new ways to preserve memories—just like I’ve always done.</p>
        </ScrollItem>

        <ScrollItem className="img2Aboutme">
            <img src={wa} alt="wa" />
        </ScrollItem>
        <ScrollItem className="text2">
            <h2>Why I Do What I Do: Preserving Moments</h2>
          <p>
            Photography has always been my way of capturing moments in time. Growing up, my parents had a chest full of old photos, and I’d love to sit and go through them—those little pieces of the past, frozen in time, felt like treasures. But it wasn’t just the photos; it was the memories and emotions they carried with them. That feeling is what drives me today. I don't go back through my phone gallery to relive memories anymore—I print them, frame them, and keep them around to continue feeling that connection.
          </p>
        </ScrollItem>
      

     
     
        <ScrollItem className="full1">
          <div className="cardBackground">
            <div className="card">
              <h2>The Power of Print: Why I Keep Moments Around</h2>
              <p>
                  There’s something about holding a printed photo in your hands, seeing it on your wall, or flipping through it in an album. It’s tangible. It’s real. And it’s lasting. I don’t want the memories of today to disappear into the abyss of digital storage. I want to keep them alive in my home, in my life, and in my heart. That's why I’m passionate about creating lasting memories for others, too. Whether it’s a photo on your phone or one framed on your wall, those moments are what make life beautiful, and I’m here to help you capture them.
              </p>
            </div>
          </div>
        </ScrollItem>
    

      
        <ScrollItem className="img3">
          <img src={kaProposal} alt="Engagement" />
        </ScrollItem>

        <ScrollItem className="text3">
          <h2>How I Got Engaged and Why It Matters to Me</h2>
          <p>
            Speaking of memories, one of the most special moments in my life happened while hiking in Washington state with my best friend. It was a surprise proposal, and while I’d love to have had photos of it, we were alone in that moment. That experience only deepened my appreciation for preserving memories through photography. The fact that I couldn’t go back and relive that moment through a photo doesn’t diminish its importance, but it certainly makes me treasure every other moment I get to capture for others even more.
          </p>
        </ScrollItem>
     

      
        <ScrollItem className="img4">
          <img src={kaGif} alt="gif" />
        </ScrollItem>

        <ScrollItem className="text4">
          <h2>My Approach & Energy: Hype Girl Mode</h2>
          <p>
            I’m all about bringing positive energy to every session. I love getting to know my clients, making sure they feel comfortable, and hyping them up every step of the way. When I’m behind the camera, it’s not just about snapping the picture—it’s about creating a vibe, making you feel your best, and capturing your most genuine moments. You’ll never have to worry about awkward poses because I’ll guide you through it with a little energy and a lot of encouragement. I like to think of myself as your personal hype girl, always there to make sure you're feeling confident, relaxed, and ready to shine.
           </p>
        </ScrollItem>
     

       
        <ScrollItem className="img5">
            <img src={walker} alt="hiking" />
        </ScrollItem>

        <ScrollItem className="text5">
            <h2>What Am I Doing When I’m Not Working?</h2>
            <p>When I’m not behind the camera, you’ll likely find me hiking, snowboarding, or creating something new. I grew up skateboarding and surfing in Balneário Camboriú, Brazil, and that laid the foundation for my love of movement, nature, and adventure.</p>
            <br />
            <p>After living in São Paulo, Tennessee, Washington state, Panama City Beach, FL, and now Colorado, I’ve experienced a variety of landscapes, each adding a new layer of inspiration to my work.</p>
            <br />
            <p>I also want to take a moment to remember my beloved Brazilian Golden Retriever, Walker. He was my loyal adventure buddy for so many years, joining me on hikes and snowboarding trips, and teaching me about joy, presence, and companionship. Though he’s no longer with me, his spirit and the memories we made together continue to inspire everything I do.</p>
        </ScrollItem>

     
        <ScrollItem className="img6">
          <img src={snowboard} alt="snowboarding" />
        </ScrollItem>

        <ScrollItem className="text6">
          <h2>Snowboarding Love: Picking It Up at 30</h2>
          <p>
            Snowboarding is one of the best things I’ve ever decided to try. My husband got me into it, and once I started, I was hooked. My first full season was full of challenges, but it quickly became my goal to get good at it—not just for the thrill of snowboarding itself, but so I could bring my camera to the slopes and create.
          </p>
        </ScrollItem>
     

     <ScrollItem className="full2">
        <p>I vividly remember those first days on the mountain—falling a lot, but also feeling that exhilarating sense of freedom every time I got back up. It wasn’t easy, but I made it my mission to master it. I wanted to capture the energy, beauty, and movement of snowboarding in the way I had always captured other moments. By getting better at the sport myself, I could photograph others in the snow, bring my creative vision to life, and tell stories through the lens of someone who truly understood the experience.</p>
        <p>Now, snowboarding is more than just a sport to me—it’s a creative outlet and a huge source of inspiration. Whether I’m on the slopes or capturing others as they carve through fresh powder, snowboarding gives me the perfect blend of adventure and creativity that fuels my photography.</p>

     </ScrollItem>

     </div>


      <section className="contact">
       <h2>
         “Photography is an investment in your memories, your story, and your legacy.”
       </h2>
       <p>If you’re ready to work together, I’d love to hear from you.</p>

       <Link to="/contact" className="seeReviewsBtn">
         CONTACT
       </Link>
     </section>


    </main>
  );
}