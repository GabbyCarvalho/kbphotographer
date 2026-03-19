import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logos/logo.png";
import br from "../../assets/logos/br.jpg";
import us from "../../assets/logos/us.png";
import { useState } from "react";
import ScrollToTop from "../../components/ScrollToTop";


export default function RootLayout () {

  const [menuOpen, setMenuOpen] = useState(false)

    return (
      <>
     <ScrollToTop />   
    <header className="header">
        <div className="topBar">
            <nav className="navbar">
              <Link to="/" className="logo">
              <img src={logo} alt="Karina Bittencourt Photographer" />
              </Link>
            <div className={`navLinks ${menuOpen ? "open" : ""}`}>
                <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
                <Link to="/galleries" onClick={() => setMenuOpen(false)}>GALLERIES</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
                <Link to="/faq" onClick={()=> setMenuOpen(false)}>FAQ</Link>
                <Link to="/engagements" onClick={()=> setMenuOpen(false)}>ENGAGEMENTS</Link>
                <Link to="/ski" onClick={()=> setMenuOpen(false)}>SKI</Link>
                <Link to="/headshots" onClick={()=> setMenuOpen(false)}>HEADSHOTS</Link>
                <Link to="/blog" onClick={()=> setMenuOpen(false)}>BLOG</Link>
                <Link to="/store" onClick={()=> setMenuOpen(false)}>STORE</Link>
            </div>

            <div className="flags">
                <img src={br} alt="br" />
                <img src={us}alt="us" />
            </div>

            {/* Hamburguer menu p/ mobible*/}
            <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={()=> setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>

            </div>
          </nav>
        </div>
</header>

  <main className="mainContent">
      <Outlet />
   </main>

<footer className="footer">
  <div className="footerContainer">
    <div className="footerNav">

      <div>
        <Link to="/about" className="titleFooter">About</Link>
        <div className="regularText">
          <p>Latina Owned</p>
          <p>Speaks English | Português</p>
          <p>All bodies are beautiful</p>
          <p>All humans celebrated here</p>
        </div>
      </div>

      <div>
        <p className="titleFooter">Resources</p>
        <Link to="/store">Buy Art Work & Products</Link>
        <Link to="/blog">Visit Blog</Link>
        <Link to="/faq">Faq</Link>
        <Link to="/vendors-list">Vendor List</Link>
        <Link to="/become-vendor">Become a Vendor</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>

      <div>
        <p className="titleFooter">Client Area</p>
        <Link to="/galleries">View Galleries</Link>
        <a href="https://kbphotographer.hbportal.co/app/login" target="_blank">Client Portal</a>
        <Link to="/blog">Visit Blog</Link>
      </div>

      <div>
        <p className="titleFooter">Powered By</p>
        <p className="regularText">Pic-time & HoneyBook</p>
      </div>

      <div>
        <p className="titleFooter">Stay in Touch</p>
        <div className="socialIcons">
          <a href="https://br.pinterest.com/karinabittencourtphotographer/?actingBusinessId=1077064204541947953" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-pinterest"></i>
          </a>
          <a href="https://www.instagram.com/bittencourt_k" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
          <a href="https://www.facebook.com/KarinaBittencourtPhotographer" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
      </div>

    </div>
  </div>
</footer>

        </>
    )
}